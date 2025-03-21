<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'

import type { Project } from '~/types/Project';

const { project, projectKey, galleryMode } = defineProps<{
  project: Project,
  projectKey: string,
  galleryMode: 'list' | 'columns',
}>();

const item = useTemplateRef('item');
const video = useTemplateRef('video');
const isVisible = useElementVisibility(item);
const isTriggered = ref(false);

watch(isVisible, () => {
  isTriggered.value = isTriggered.value || isVisible.value;
});

const playVideo = () => {
  video.value?.play();
}

const pauseVideo = () => {
  video.value?.pause();
}
</script>

<template>
  <div
    class="item trigger"
    :class="{ [galleryMode]: true, triggered: isTriggered, noVideo: !project.thumbVideoUrl && !project.thumbGifUrl }"
    ref="item"
    @mouseenter="playVideo"
    @mouseleave="pauseVideo"
  >
    <NuxtLink :to="$localePath(`/projects/${projectKey}`)" class="wrapper">
      <div class="thumbContainer loadingGradient" :style="{ paddingBottom: `${(project.thumbAspectRatio || 0.56) * 100}%` }">
        <video v-if="project.thumbVideoUrl" ref="video" class="thumbVideo" preload="none" :poster="project.thumbImgUrl" muted playsinline loop :src="project.thumbVideoUrl"></video>
        <img v-else-if="project.thumbGifUrl" class="thumbVideo" :src="project.thumbGifUrl">
        <img class="thumb" :src="project.thumbImgUrl">
      </div>

      <div class="detailsContainer">
        <div class="name loadingGradient">{{ $t(project.i18nKeys.name) }}</div>
        <div class="subtitle loadingGradient">
          <span class="role">{{ $t(project.i18nKeys.role) }}</span>
          <span class="company">{{ $t(project.i18nKeys.company) }}</span>
          <span class="year">{{ project.year }}</span>
        </div>
        <div class="description loadingGradient">{{ $t(project.i18nKeys.description) }}</div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.item {
  position: relative;
  border: 1px solid black;
  margin-bottom: 20px;
  opacity: 0;
  transition: 0.5s opacity ease, 0.5s transform ease;
  cursor: pointer;

  .wrapper {
    display: flex;
  }

  &.columns {
    margin: 0 auto 20px;

    .wrapper {
      flex-direction: column;
    }
  }

  &.list {
    .wrapper {
      flex-direction: row;
    }
  }

  &.triggered {
    opacity: 1;
    transition-delay: 0.3s, 0s;
  }

  .thumbContainer {
    flex: none;
    position: relative;
    width: 246px;
    padding-bottom: 56%;
    overflow: hidden;
  }

  &.list .thumbContainer {
    padding-bottom: 0 !important;
    border-right: 1px solid black;
  }

  &.columns .thumbContainer {
    width: 100%;
    border-bottom: 1px solid black;
  }

  @media(max-width: 600px) {
    &.list .thumbContainer {
      width: 136px;
    }
  }

  @media(max-width: 460px) {
    &.list .thumbContainer {
      width: 100px;
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

    &.triggered {
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

      .name {
        font-size: 18px;
        padding-right: 30px;
        letter-spacing: 0;
        margin-bottom: 10px;
        text-decoration: underline;
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

      @media(max-width: 600px) {
        .name {
          font-size: 14px;
          line-height: 16px;
          font-weight: bold;
          padding-right: 0;
        }

        .subtitle {
          font-size: 11px;
        }

        .description {
          font-size: 10px;
        }
      }
    }
    
    &.columns .detailsContainer {
      .name {
        font-size: 14px;
        line-height: 14px;
        font-weight: bold;
        margin-bottom: 10px;
        padding-right: 0;
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
}

.loadingGradient {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    animation: 1.8s placeHolderShimmer infinite;
    background: linear-gradient(to right, #f4f4f4 8%, #ddd 38%, #f4f4f4 54%);
    background-size: 1000px 640px;
    transition: 0.5s opacity ease, 0s visibility ease;
    transition-delay: 2s, 2.5s;
    visibility: visible;
    opacity: 1;
  }

  &.name, &.subtitle, &.description {
    color: transparent;
    text-decoration-color: transparent;
    transition: 0.5s color ease, 0.5s text-decoration-color ease;
    transition-delay: 2s, 2s;
  }
}

.triggered .loadingGradient {
  &::before {
    opacity: 0;
    visibility: hidden;
  }

  &.name, &.subtitle, &.description {
    color: black;
    text-decoration-color: black;
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
</style>