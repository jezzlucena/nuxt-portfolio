<script setup lang="ts">
import PROJECTS from '~/assets/json/projects';

const galleryMode = ref<'columns' | 'list'>('columns');
const isShowingGallery = ref(true);
let galleryTimeout: NodeJS.Timeout;

const columns = ref<string[][]>([]);

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
    nextTick(triggerScrollClasses);
  }, 700);
}

const handleWindowResize = () => {
  if (!import.meta.browser) return;

  let numColumns: number;

  if (window.innerWidth <= 670) {
    numColumns = 1;
  } else if (window.innerWidth <= 940) {
    numColumns = 2;
  } else {
    numColumns = 3;
  }

  columns.value = Array.from({ length: numColumns }, () => []);
  let columnIndex = 0;

  for (const key in PROJECTS) {
    columns.value[columnIndex].push(key);
    columnIndex = (columnIndex + 1) % numColumns;
  }

  nextTick(triggerScrollClasses);
};

const triggerScrollClasses = () => {
  const galleryItems = document.querySelectorAll('.trigger:not(.triggered)');
  galleryItems.forEach(item => {
    if (isOnScreen(item)) {
      item.classList.add('triggered');
      
      setTimeout(() => {
        item.querySelectorAll('.loadingGradient').forEach(loadingElement => {
          loadingElement.classList.remove('loadingGradient');
        });
      }, 2000);
    }
  })
};

const isOnScreen = (element: Element) => {
  if (!window) return false;

  const viewport = {
    top: window.scrollY,
    left: window.scrollX,
    right: window.scrollX + window.innerWidth,
    bottom: window.scrollY + window.innerHeight
  };

  const bounds = element.getBoundingClientRect();

  return (!(
    viewport.right < bounds.left ||
    viewport.left > bounds.right ||
    viewport.bottom < bounds.top ||
    viewport.top > bounds.bottom)
  );
}

onMounted(() => {
  window.addEventListener('resize', handleWindowResize);
  window.addEventListener('scroll', triggerScrollClasses);
  handleWindowResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleWindowResize);
  window.removeEventListener('scroll', triggerScrollClasses);
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
      <div class="gallery" :class="{ [galleryMode]: true, show: isShowingGallery }">
        <div v-for="projectKeys of columns" class="column">
          <GalleryItem
            v-for="key of projectKeys"
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
}

@media (max-width: 480px) {
  .content .title {
    text-align: left;
  }
}
</style>