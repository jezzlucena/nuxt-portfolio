<script setup lang="ts">
import PROJECTS from '~/assets/json/projects.json'
const galleryMode = ref<'grid' | 'list' | null>('grid');

const toggleGalleryMode = () => {
  if (galleryMode.value === 'grid') {
    galleryMode.value = null;
    setTimeout(() => {
      galleryMode.value = 'list';
    }, 500);
  } else if (galleryMode.value === 'list') {
    galleryMode.value = null;
    setTimeout(() => {
      galleryMode.value = 'grid';
    }, 500);
  }
}
</script>

<template>
  <div class="header fixed">
    <Logo />
  </div>
  <div class="header relative">
    <div class="text">
      <span>Jezz Lucena</span>
      <span class="title">Full Stack Engineer</span>
    </div>
  </div>
  <div class="content relative bg-white">
    <div class="w-[100%] h-[2000px] max-w-[1024px] mx-auto p-[50px]">
      <div class="title">
					<span>Some of my work</span>

					<div class="toggle" :class="{ grid: galleryMode === 'grid', list: galleryMode === 'list'}" @click="toggleGalleryMode">
						<div class="icon grid"><div class="symbol"></div></div>
						<div class="icon list"><div class="symbol"></div></div>
					</div>
				</div>
        <div class="gallery" :class="{ grid: galleryMode === 'grid', list: galleryMode === 'list'}">
          Test
        </div>
    </div>
  </div>
</template>

<style>
.header {
	min-height: 180px;
  height: 65vh;
  width: 100%;

  &.fixed {
    background-color: black;
  }

  &.relative {
    background-color: transparent;
    pointer-events: none;

    .text {
      position: absolute;
      bottom: 0;
      margin-bottom: 6vh;
      width: 100%;
      font-size: 24px;
      line-height: 30px;
      font-family: myriad-cond;
      color: white;
      letter-spacing: 3px;
      padding: 20px 0 20px;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
      text-align: center;
      text-transform: uppercase;

      .title {
        position: relative;
        font-family: myriad-boldcond;
        padding-left: 15px;
        margin-left: 15px;

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          height: 40px;
          border-right: 1px solid white;
          transform: translateY(-50%);
        }
      }
    }
  }
}

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
      height: 20px;
      width: 20px;
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

      &.grid .symbol::before {
        top: 0;
        width: 4px;
        height: 4px;
        box-shadow: 0 6px 0 0 black, 6px 6px 0 0 black, 6px 0 0 0 black;
      }

      &.list .symbol::before {
        width: 100%;
        height: 2px;
        box-shadow: 0 4px 0 0 black, 0 8px 0 0 black;
      }
    }
  }

  .toggle.list .icon.list, .toggle.grid .icon.grid {
    background-color: #ccc;
  }
}

.gallery {
  opacity: 0;
  transition: 0.5s opacity ease;

  &.grid {
    opacity: 1;
    column-count: 3;
    transition-delay: 1s;
  }

  &.list {
    opacity: 1;
    transition-delay: 1s;
  }
}
</style>