<script setup lang="ts">
import $ from 'jquery'
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
  }, 700);
}

const onLoad = () => {
  window.addEventListener('scroll', triggerScrollClasses);
  window.addEventListener('resize', handleWindowResize);

  nextTick(handleWindowResize);
}

const triggerScrollClasses = () => {
	let scrollTop = $(window).scrollTop() || 0;
	let windowHeight = window.innerHeight;

	$('body').toggleClass('scrolled', (scrollTop > 0));
	$('body').toggleClass('foldPassed', (scrollTop > windowHeight/3));

	$('.trigger:not(.triggered)').each(function(index){
		if(isOnScreen($(this))){
			$(this).addClass('triggered');

      setTimeout(() => {
			  $(this).find(".loadingGradient").removeClass('loadingGradient');
      }, 2000);
		}
	});
};

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

const isOnScreen = function(element: JQuery<HTMLElement>){
    const win = $(window);

    const viewport = {
        top: win.scrollTop() || 0,
        left: win.scrollLeft() || 0,
        right: (win.scrollLeft() || 0) + (win.width() || 0),
        bottom: (win.scrollTop() || 0) + (win.height() || 0)
    };

    const offset = element.offset();

    const bounds = {
        top: offset?.top || 0,
        left: offset?.left || 0,
        right: (offset?.left || 0) + (element.outerWidth() || 0),
        bottom: (offset?.top || 0) + (element.outerHeight() || 0)
    };

    return (!(
      viewport.right < bounds.left ||
      viewport.left > bounds.right ||
      viewport.bottom < bounds.top ||
      viewport.top > bounds.bottom)
    );
}

onMounted(() => onLoad());
onUnmounted(() => {
  window.removeEventListener('scroll', triggerScrollClasses);
  window.removeEventListener('resize', handleWindowResize);
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
        <div v-for="projects of columns" class="column">
          <NuxtLink
            v-for="key of projects"
            :to="$localePath(`/projects/${key}`)" 
            class="item trigger"
            :class="{ noVideo: !PROJECTS[key].thumbVideoUrl && !PROJECTS[key].thumbGifUrl }"
          >
            <div class="thumbContainer loadingGradient" :style="{ paddingBottom: `${(PROJECTS[key].thumbAspectRatio || 0.56) * 100}%` }">
              <video v-if="PROJECTS[key].thumbVideoUrl" class="thumbVideo" autoplay muted playsinline loop :src="PROJECTS[key].thumbVideoUrl"></video>
              <img v-else-if="PROJECTS[key].thumbGifUrl" class="thumbVideo" :src="PROJECTS[key].thumbGifUrl">
              <img class="thumb" :src="PROJECTS[key].thumbImgUrl">
            </div>

            <div class="detailsContainer">
              <div class="name loadingGradient">{{ $t(PROJECTS[key].i18nKeys.name) }}</div>
              <div class="subtitle loadingGradient">
                <span class="role">{{ $t(PROJECTS[key].i18nKeys.role) }}</span>
                <span class="company">{{ $t(PROJECTS[key].i18nKeys.company) }}</span>
                <span class="year">{{ PROJECTS[key].year }}</span>
              </div>
              <div class="description loadingGradient">{{ $t(PROJECTS[key].i18nKeys.description) }}</div>
            </div>
          </NuxtLink>
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

  .item {
    position: relative;
    display: flex;
    border: 1px solid black;
    break-inside: avoid-column;
    margin-bottom: 20px;
    opacity: 0;
    transition: 0.5s opacity ease;

    &.triggered {
      opacity: 1;
      transition-delay: 0.3s;
    }
  }

  &.columns .item {
    flex-direction: column;
    margin: 0 auto 20px;
    cursor: pointer;
  }

    @media(max-width: 600px) {
      &:not(.columns) .item {
        padding: 10px;
      }
    }

    .thumbContainer {
      flex: none;
      position: relative;
      width: 246px;
      padding-bottom: 56%;
      margin-right: 16px;
      overflow: hidden;
      border-bottom: 1px solid black;
    }

    &.columns .thumbContainer {
      margin-right: 0;
      width: 100%;
    }

    @media(max-width: 600px) {
      &:not(.columns) .thumbContainer {
        width: 136px;
        height: 195px;
        margin-right: 10px;
      }
    }

      .thumbContainer .thumb,
      .thumbContainer .thumbVideo {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
        opacity: 0;
        transition: 0.5s opacity ease;
      }

        .item.triggered {
          .thumb {
            opacity: 1;
            transition-delay: 1s;
          }

          .thumbVideo {
            opacity: 1;
            transition-delay: 1.5s;
          }

          &:not(.noVideo):hover .thumbContainer .thumb,
          &:not(.noVideo).touched .thumbContainer .thumb {
            opacity: 0;
            transition-delay: 0s;
          }
        }

    .detailsContainer {
      position: relative;
      flex-grow: 1;
      padding: 16px 20px;
      letter-spacing: 0;

      .name, .subtitle, .description {
        color: black;
        transition: 0.5s color ease;

        &.loadingGradient {
          color: transparent;
        }
      }

      .name {
        font-size: 18px;
        padding-right: 30px;
        letter-spacing: 0;
        margin-bottom: 10px;
      }

      @media(max-width: 600px) {
        .name {
          font-size: 14px;
          line-height: 16px;
          font-weight: bold;
          padding-right: 0;
        }
      }

      .subtitle {
        font-size: 13px;
        line-height: 18px;
        margin-bottom: 10px;
        margin-left: 0;
        padding-right: 30px;
        opacity: 0.7;
        animation-delay: 0.1s;
      }

      .description {
        font-size: 12px;
        opacity: 1;
        animation-delay: 0.2s;
      }
    }

          &.columns .detailsContainer {
            .name {
              font-size: 14px;
              line-height: 14px;
              font-weight: bold;
              margin-bottom: 10px;
              padding-right: 0;
              text-decoration: underline;
            }

            .subtitle {
              font-size: 12px;
              line-height: 15px;
              margin-bottom: 8px;
              padding-right: 0;

              span {
                white-space: nowrap;
              }

              .role {
                display: block;
              }

              .company::after {
                content: ' \2022  ';
              }
            }
          }

          &.list span {
            display: block;
          }

  .loadingGradient {
    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #f4f4f4 8%, #ddd 38%, #f4f4f4 54%);
    background-size: 1000px 640px;
    position: relative;
  }
}

@keyframes placeHolderShimmer{
  0%{
    background-position: -150% 0;
  }
  100%{
    background-position: 100% 0;
  }
}

@media (max-width: 480px) {
  .content .title {
    text-align: left;
  }
}
</style>