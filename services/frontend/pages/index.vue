<script setup lang="ts">
import PROJECTS from '~/assets/json/projects';

const { scrollY } = useScroll();
const galleryMode = ref<'columns' | 'list'>('columns');
const isShowingGallery = ref(true);
const isMasonryActive = ref(false);
let galleryTimeout: NodeJS.Timeout;
const { t, locale } = useI18n();

watch(locale, () => {
  useHead({
    title: `${t('common.portfolio')} - ${t('common.jezzLucena')}`
  });
});

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
    const roundedBox = {
      height: Math.round(itemBox.height * 10) / 10,
      width: Math.round(itemBox.width * 10) / 10,
      x: Math.round((itemBox.x - (galleryBox?.left || 0)) * 10) / 10,
      y: Math.round((itemBox.y - (galleryBox?.top || 0 + scrollY.value)) * 10) / 10,
    }
    masonryItem?.setAttribute('style', `height: ${roundedBox.height}px; width: ${roundedBox.width}px; transform: translate(${roundedBox.x}px, ${roundedBox.y}px)`);
  });
  isMasonryActive.value = true;
}

const handleWindowResize = useDebounceFn(() => {
  let numColumns: number;

  if (galleryMode.value === 'list') {
    numColumns = 1;
  } else if (!import.meta.client || window.innerWidth >= 1024) { // lg
    numColumns = 5;
  } else if (window.innerWidth >= 768) { // md
    numColumns = 4;
  } else if (window.innerWidth >= 640) { // sm
    numColumns = 3;
  } else if (window.innerWidth >= 393) { // iPhone 14 Pro viewport dimensions
    numColumns = 2;
  } else {
    numColumns = 1;
  }

  columns.value = getColumns(numColumns);

  nextTick(handleMasonryLayout);
}, 100);

onMounted(() => {
  useEventListener('resize', handleWindowResize);
  handleWindowResize();
});
</script>

<template>
  <div class="content relative bg-white">
    <div class="anchor absolute -top-[60px]" id="content"></div>
    <div class="w-[100%] mx-auto py-[30px] px-[10px] md:px-[30px] lg:px-[50px]">
      <Heading>
        <span>{{ $t("home.myWork") }}</span>

        <div class="toggle" :class="{ [galleryMode]: true, show: isShowingGallery }" @click="toggleGalleryMode">
          <div class="icon columns">
            <div class="symbol"></div>
          </div>
          <div class="icon list">
            <div class="symbol"></div></div>
        </div>
      </Heading>

      <div
        class="gallery relative"
        :class="{ [galleryMode]: true, show: isShowingGallery, masonryActive: isMasonryActive }"
      >
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
.content {
  padding-top: env(safe-area-inset-top);

  .anchor {
    margin-top: -env(safe-area-inset-top);
  }
}

.toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  transform-origin: right center;
  transform: translateY(-50%);
  display: flex;
  cursor: pointer;

  .icon {
    position: relative;
    height: 45px;
    width: 45px;
    border: 2px solid black;
    margin: 0;
    margin-right: -2px;
    background-color: #aaa;
    transition: 0.6s background-color ease, 0.2s box-shadow ease, 0.2s transform ease;

    &:hover, &.hovered {
      box-shadow: 7px 7px 0 -1px rgba(0, 0, 0, 1);
      transform: translate(-3px, -3px);
    }
    
    .symbol {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 50%;
      width: 50%;
      transform: translate(-50%, -50%);
    }

    .symbol::before,
    .symbol::after {
      content: '';
      position: absolute;
      background: black;
    }

    &.columns .symbol::before,
    &.columns .symbol:after {
      left: 0.5px;
      width: 5.5px;
    }

    &.columns .symbol::before {
      top: 0;
      height: 7px;
      box-shadow: 7.5px 13.5px 0 0 black, 15px 0 0 0 black;
    }

    &.columns .symbol::after {
      bottom: 0;
      height: 11px;
      box-shadow: 7.5px -9.5px 0 0 black, 15px 0 0 0 black;
    }

    &.list .symbol::before,
    &.list .symbol::after {
      height: 4.5px;
      box-shadow: 0 8px 0 0 black, 0 16px 0 0 black;
    }

    &.list .symbol::before {
      left: 0;
      width: 4px;
    }

    &.list .symbol::after {
      right: 0;
      width: calc(100% - 6px);
    }
  }

  &.show {
    &.list .icon.list, &.columns .icon.columns {
      background-color: white;
    }
  }
}

.gallery {
  opacity: 0;
  transition: 0.5s opacity ease;
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  overflow: visible;

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

@media (max-width: 640px) {
  .gallery {
    gap: 10px;
  }
}

.masonryItem {
  opacity: 0;
  pointer-events: none;
}

.masonryActive {
  .masonryItem {
    opacity: 1;
    pointer-events: auto;
    transition: 0.5s transform ease;
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