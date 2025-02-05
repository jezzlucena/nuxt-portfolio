<script setup lang="ts">
const { isScrolled } = useScroll();
</script>

<template>
  <div class="topBar" :class="{ scrolled: isScrolled }">
    <div class="flex w-[100%] max-w-[1024px] mx-auto px-[50px]">
      <NuxtLink to="/" class="logo">
        <img src="~/assets/img/logo.png" class="inline mr-3" width="40"/>
        <span class="name pr-2">Jezz Lucena</span>
        <span class="title pl-3">Full Stack Engineer</span>
      </NuxtLink>
      <div class="grow"></div>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/">Portfolio</NuxtLink>
      <a href="/files/JezzLucenaResume2024.pdf" target="_blank">Resumé</a>
      <a href="mailto:jezzlucena@gmail.com" target="_blank">Contact</a>
    </div>
  </div>
</template>

<style scoped>
.topBar {
  position: fixed;
  top: 0; left: 0; right: 0;
  font-family: 'myriad-cond';
  white-space: nowrap;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  font-size: 18px;
  border-bottom: 1px solid transparent;
  transition: 1s border-bottom-color ease, 1s background-color ease;
  color: white;
  z-index: 1;
}

.logo {
  &, & > .title, & > .name {
    opacity: 0;
    transition: 0.5s opacity ease;
  }

  .title {
    position: relative;
    font-family: myriad-boldcond;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      height: 30px;
      border-right: 1px solid white;
      transform: translateY(-50%);
    }
  }
}

.topBar.scrolled {
  border-bottom-color: white;
  background-color: black;

  .logo {
    transition-delay: 0.3s;

    &, & .name, & .title {
      opacity: 1;
    }

    .name {
      transition-delay: 0.6s;
    }

    .title {
      transition-delay: 0.9s;
      transition-duration: 1s;
    }
  }
}

a {
  position: relative;
  line-height: 60px;
  margin-right: -6px;
  letter-spacing: 2px;

  &:not(.logo) {
    padding: 0 20px;
    font-size: 14px;
    font-weight: bold;

    &.router-link-active::before {
      content: '';
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 20px;
      height: 3px;
      background-color: white;
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      height: 30px;
      border-right: 1px solid white;
      transform: translateY(-50%);
    }
  }
}
</style>