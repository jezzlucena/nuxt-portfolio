<script setup lang="ts">
import type { Language } from '~/types/Language';
import { LANGUAGES } from '~/utils/constants';

const localePath = useLocalePath();
const { locale, availableLocales } = useI18n();
const { setLocale } = useI18n();

const currentLang = ref(locale);

async function changeLocale() {
  setLocale(locale.value);
  currentLang.value = locale.value;

  // Change URL to correct language, ex: '/home' to '/fr/home'
  await navigateTo(localePath(useRoute().path));
}

const { isScrolled } = useScroll();
const isNavOpen = ref(false);

const toggleNavOpen = () => {
  isNavOpen.value = !isNavOpen.value;
}
</script>

<template>
  <div class="topBar" :class="{ scrolled: isScrolled, navOpen: isNavOpen }">
    <div class="flex w-[100%] max-w-[1024px] mx-auto px-[50px]">
      <NuxtLink :to="$localePath('/')" class="logo">
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
        <NuxtLink :to="$localePath('/about')">{{ $t('common.about') }}</NuxtLink>
        <NuxtLink :to="$localePath('/')">{{ $t("common.portfolio") }}</NuxtLink>
        <a href="/files/JezzLucenaResume2025.pdf" target="_blank">{{ $t("common.resume") }}</a>
        <a href="mailto:jezzlucena@gmail.com" target="_blank">{{ $t("common.contact") }}</a>
        <select v-model="$i18n.locale" id="localeSelector" @change="() => changeLocale()">
          <option
            v-for="(locale, index) in availableLocales"
            :key="index"
            :value="locale"
          >
            {{ LANGUAGES[locale as Language].short }}
          </option>
      </select>
      </div>
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
  background-color: black;
  transition: 1s border-bottom-color ease;
  color: white;
  z-index: 1;
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
      border-right: 1px solid white;
      transform: translateY(-50%);
    }
  }
}

.topBar.scrolled {
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
  margin: 0 10px;
  font-family: NotoColorEmojiLimited;

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
      bottom: -5px;
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

.links {
  transition: 0.5s transform ease, 1s border-color ease;
}

.hamburger {
  display: none;
  padding-top: 17px;
  margin-right: -30px;
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

@media (max-width: 760px) {
  .links {
    position: absolute;
    top: 100%;
    left: 100%;
    background-color: black;
    border: 1px solid black;
    text-align: center;

    a {
      display: block;
      margin: 0 40px;
      padding: 5px 20px;

      &.router-link-active::before {
        bottom: 20px;
      }

      &::after {
        display: none;
      }
    }
  }

  .topBar.scrolled .links {
    border-bottom: 1px white solid;
    border-left: 1px white solid;
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