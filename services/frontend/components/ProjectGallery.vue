<script setup lang="ts">
import PROJECTS from '~/assets/json/projects';

const { galleryMode, isShowingGallery } = defineProps<{
  galleryMode: 'columns' | 'list',
  isShowingGallery: boolean
}>();

const { scrollY } = useScroll();
const isMasonryActive = ref(false);

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

  if (galleryMode === 'list') {
    numColumns = 1;
  } else if (!import.meta.client || window.innerWidth >= 1280) { // xl
    numColumns = 5;
  } else if (window.innerWidth >= 1024) { // lg
    numColumns = 4;
  } else if (window.innerWidth >= 768) { // md
    numColumns = 3;
  } else if (window.innerWidth >= 393) { // iPhone 14 Pro viewport dimensions
    numColumns = 2;
  } else { // xs and lower
    numColumns = 1;
  }

  columns.value = getColumns(numColumns);

  nextTick(handleMasonryLayout);
}, 100);

defineExpose({
  handleWindowResize
});

onMounted(() => {
  useEventListener('resize', handleWindowResize);
  handleWindowResize();
});
</script>

<template>
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
</template>

<style scoped>
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
</style>