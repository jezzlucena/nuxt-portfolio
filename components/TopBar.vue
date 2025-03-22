<script setup lang="ts">
import type { Language } from '~/types/Language';
import { LANGUAGES } from '~/utils/constants';

const localePath = useLocalePath();
const { availableLocales } = useI18n();
const { isScrolled } = useScroll();
const isNavOpen = ref(false);
const route = useRoute();

async function changeLocale() {
  // Change URL to correct language, ex: '/about' to '/pt/about'
  await window.history.pushState({}, document.title, localePath(useRoute().path));
}

const toggleNavOpen = () => {
  isNavOpen.value = !isNavOpen.value;
}

const handleWindowResize = useDebounceFn(() => {
  if (!import.meta.client || window.innerWidth > 768) {
    isNavOpen.value = false;
  }
}, 500);

useEventListener('resize', handleWindowResize);
</script>

<template>
  <div
    class="topBarBg"
    :class="{ navOpen: isNavOpen }"
    @click="toggleNavOpen"
  ></div>
  <div
    class="topBar"
    :class="{ scrolled: isScrolled, navOpen: isNavOpen }"
  >
    <div class="flex w-[100%] mx-auto lg:px-[50px] px-[10px]">
      <NuxtLink
        :to="$localePath('/')" 
        class="logo"
        @click="isNavOpen = false"
      >
        <img src="~/assets/img/logo.png" class="inline mr-3" width="40"/>
        <span class="name pr-2">{{ $t("common.jezzLucena") }}</span>
        <span class="title pl-3">{{ $t("common.fullStackEngineer") }}</span>
      </NuxtLink>

      <div class="grow"></div>

      <div class="hamburger" @click="toggleNavOpen">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <div class="links">
        <NuxtLink 
          :to="$localePath('/about') + '#content'"
          :class="{ 'router-link-active': (route.name as string).startsWith('about') }"
          @click="isNavOpen = false"
        >{{ $t('common.about') }}</NuxtLink>
        <NuxtLink 
          :to="$localePath('/')"
          :class="{ 'router-link-active': (route.name as string).startsWith('projects-key') || (route.name as string).startsWith('index') }"
          @click="isNavOpen = false"
        >{{ $t("common.portfolio") }}</NuxtLink>
        <NuxtLink
          :to="$localePath('/resume') + '#content'"
          :class="{ 'router-link-active': (route.name as string).startsWith('resume') }"
          @click="isNavOpen = false"
        >{{ $t("common.resume") }}</NuxtLink>
        <NuxtLink
          :to="$localePath('/contact') + '#content'"
          :class="{ 'router-link-active': (route.name as string).startsWith('contact') }"
          @click="isNavOpen = false"
        >{{ $t("common.contact") }}</NuxtLink>

        <select
          v-model="$i18n.locale"
          @change="() => changeLocale()"
        >
          <option
            v-for="(locale, index) in availableLocales"
            :key="index"
            :value="locale"
          >{{ LANGUAGES[locale as Language].long }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topBarBg {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  opacity: 0;
  pointer-events: none;
  transition: 0.5s opacity ease;
  z-index: 1;

  &.navOpen {
    opacity: 1;
    pointer-events: auto;
  }
}

.topBar {
  position: fixed;
  top: 0; left: 0; right: 0;
  font-family: 'myriad-cond';
  white-space: nowrap;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  font-size: 18px;
  border-bottom: 2px solid transparent;
  background-color: black;
  transition: 1s border-bottom-color ease;
  color: white;
  z-index: 2;
}

.logo {
  pointer-events: none;

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
      border-right: 2px solid white;
      transform: translateY(-50%);
    }
  }
}

.topBar.scrolled, .topBar.navOpen {
  border-bottom-color: white;

  .logo {
    pointer-events: auto;
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

select {
  padding: 15px 0;
  margin-left: 20px;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;

  option {
    background-color: black;
  }
}

a {
  position: relative;
  line-height: 60px;
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
      bottom: -7px;
      height: 2px;
      background-color: white;
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -1px;
      height: 30px;
      border-right: 2px solid white;
      transform: translateY(-50%);
    }
  }
}

.links {
  transition: 0.5s transform ease, 1s border-color ease;
}

.hamburger {
  display: none;
  padding-top: 17px;
  cursor: pointer;
  
  .line {
    width: 30px;
    border-top: 3px solid white;
    transform-origin: 100% 50%;
    transition: 0.5s transform ease, 0.5s opacity ease;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
}

.topBar.navOpen {
  .hamburger {
    .line:nth-child(1) {
      transform: rotate(-45deg);
    }

    .line:nth-child(2) {
      opacity: 0;
    }

    .line:nth-child(3) {
      transform: rotate(45deg);
    }
  }
}

@media (max-width: 768px) {
  .links {
    position: absolute;
    top: 100%;
    left: 100%;
    background-color: black;
    border: 2px solid black;
    text-align: center;

    a {
      display: block;
      margin: 0 40px;
      padding: 5px 20px;
      line-height: 40px;

      &.router-link-active::before {
        bottom: 10px;
      }

      &::after {
        display: none;
      }
    }

    select {
      padding: 10px 0 20px;
    }
  }

  .topBar.navOpen, .topBar.scrolled {
    .links {
      border-bottom: 2px white solid;
      border-left: 2px white solid;
    }
  }

  .hamburger {
    display: inline-block;
  }
  
  .topBar.navOpen {
    .links {
      transform: translateX(-100%);
    }
  }
}

@media (max-width: 480px) {
  .title {
    display: none;
  }
}
</style>