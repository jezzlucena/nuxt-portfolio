<script setup lang="ts">
import { useDebounceFn, useEventListener } from '@vueuse/core'

import PROJECTS from '~/assets/json/projects';

const { scrollY } = useScroll();
const galleryMode = ref<'columns' | 'list'>('columns');
const isShowingGallery = ref(true);
const isMasonryActive = ref(false);
let galleryTimeout: NodeJS.Timeout;

const getColumns = (numColumns: number) => {
  const colArrays: string[][] = Array.from({ length: numColumns }, () => []);
  let columnIndex = 0;

  for (const key in PROJECTS) {
    colArrays[columnIndex].push(key);
    columnIndex = (columnIndex + 1) % numColumns;
  }

  return colArrays;
}

const columns = ref<string[][]>(getColumns(3));

const toggleGalleryMode = () => {
  isShowingGallery.value = false;

  clearTimeout(galleryTimeout);
  galleryTimeout = setTimeout(() => {
    if (galleryMode.value === 'columns') {
      galleryMode.value = 'list';
    } else {
      galleryMode.value = 'columns';
    }
    isShowingGallery.value = true;
    nextTick(handleWindowResize);
  }, 700);
}

const handleMasonryLayout = () => {
  if (!import.meta.browser) return;

  const galleryBox = document.querySelector('.gallery')?.getBoundingClientRect();
  document.querySelectorAll('.column .item').forEach(item => {
    const masonryItem = document.querySelector(`.masonryItem[data-key=${item.getAttribute('data-key')}]`);
    const itemBox = item.getBoundingClientRect();
    masonryItem?.setAttribute('style', `height: ${itemBox.height}px; width: ${itemBox.width}px; transform: translate(${itemBox.x - (galleryBox?.left || 0)}px, ${itemBox.y - (galleryBox?.top || 0 + scrollY.value)}px)`)
  });
  isMasonryActive.value = true;
}

const handleWindowResize = useDebounceFn(() => {
  let numColumns: number;

  if (galleryMode.value === 'list') {
    numColumns = 1;
  } else if (!import.meta.client || window.innerWidth > 940) {
    numColumns = 3;
  } else if (window.innerWidth > 670) {
    numColumns = 2;
  } else {
    numColumns = 1;
  }

  columns.value = getColumns(numColumns);

  nextTick(handleMasonryLayout);
}, 100);

useEventListener('resize', handleWindowResize);
handleWindowResize();

onMounted(() => {
  handleWindowResize();
});
</script>

<template>
  <div class="content relative bg-white">
    <div class="w-[100%] max-w-[1024px] mx-auto p-[50px]">
      <div class="title">
        <span>{{ $t("home.myWork") }}</span>

        <div class="toggle" :class="{ [galleryMode]: true, show: isShowingGallery }" @click="toggleGalleryMode">
          <div class="icon columns"><div class="symbol"></div></div>
          <div class="icon list"><div class="symbol"></div></div>
        </div>
      </div>
      <div class="gallery relative" :class="{ [galleryMode]: true, show: isShowingGallery, masonryActive: isMasonryActive }">
        <div v-for="projectKeys of columns" class="column">
          <div class="layoutItem">
            <GalleryItem
              v-for="key of projectKeys"
              :project="PROJECTS[key]"
              :key="key"
              :data-key="key"
              :projectKey="key"
              :galleryMode="galleryMode"
            />
          </div>
        </div>
        <div
          class="absolute top-0 left-0 masonryItem"
          v-for="key of Object.keys(PROJECTS)"
          :data-key="key"
        >
          <GalleryItem
            :project="PROJECTS[key]"
            :key="key"
            :projectKey="key"
            :galleryMode="galleryMode"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content .title {
  position: relative;
  font-family: myriad-boldcond;
  letter-spacing: 2px;
  text-align: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  line-height: 70px;
  font-size: 22px;
  margin-bottom: 20px;
  text-transform: uppercase;

  .toggle {
    position: absolute;
    top: 47%;
    right: 10px;
    transform-origin: right center;
    transform: translateY(-50%) scale(1.2);
    display: flex;
    cursor: pointer;

    .icon {
      position: relative;
      height: 30px;
      width: 30px;
      border: 1px solid black;
      margin: 0;
      margin-right: -1px;
      background-color: white;
      transition: 0.6s background-color ease;
      
      .symbol {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 50%;
        width: 50%;
        transform: translate(-50%, -50%);
      }

      .symbol::before {
        content: '';
        position: absolute;
        left: 0;
        background: black;
      }

      &.columns .symbol::before {
        top: 0;
        width: 6px;
        height: 6px;
        box-shadow: 0 8px 0 0 black, 8px 8px 0 0 black, 8px 0 0 0 black;
      }

      &.list .symbol::before {
        width: 100%;
        margin-top: 1px;
        height: 3px;
        box-shadow: 0 5px 0 0 black, 0 10px 0 0 black;
      }
    }
  }

  .toggle.show.list .icon.list, .toggle.show.columns .icon.columns {
    background-color: #ccc;
  }
}

.gallery {
  opacity: 0;
  transition: 0.5s opacity ease;
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  overflow: hidden;

  &.show {
    opacity: 1;
    transition-delay: 0.5s;
  }

  &.list {
    flex-direction: column;

    .thumbContainer {
      padding-bottom: 0 !important;
    }
  }

  .column {
    flex-grow: 1;
  }
}

.masonryItem {
  opacity: 0;
  pointer-events: none;
  transition: 0.5s transform ease;
}

.masonryActive {
  .masonryItem {
    opacity: 1;
    pointer-events: auto;
  }

  .layoutItem {
    opacity: 0 !important;
    pointer-events: none;
  }
}

@media (max-width: 480px) {
  .content .title {
    text-align: left;
  }
}
</style>