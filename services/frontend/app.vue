<script setup lang="ts">
import { Capacitor } from "@capacitor/core";
import { initialize } from "@capacitor-community/safe-area";

initialize();

const isNativeOrPWA = import.meta.client && (window?.matchMedia('(display-mode: standalone)').matches || Capacitor.isNativePlatform());
</script>

<template>
  <div class="bg-black pt-[60px]" :class="{ native: isNativeOrPWA }">
    <TopBar />

    <div class="header fixed">
      <Logo />
    </div>

    <div class="header relative">
      <div class="text">
        <span>{{ $t("common.jezzLucena") }}</span>
        <span class="title">{{ $t("common.fullStackEngineer") }}</span>
      </div>
    </div>

    <NuxtRouteAnnouncer />
    <NuxtPage />

    <Footer />
  </div>
</template>

<style>
.header {
	min-height: 180px;
  height: calc(100vh - 147px);
  left: 0; right: 0;

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
      padding: 20px 0;
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
          border-right: 2px solid white;
          transform: translateY(-50%);
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .header {
    &.relative {
      .text {
        font-size: 18px;
        line-height: 26px;
    
        .title {
          display: block;
          padding-left: 0;
          margin-left: 0;

          &::after {
            display: none;
          }
        }
      }
    }
  }
}

@media (max-height: 480px) {
  .header.relative .text {
    font-size: 14px;
    line-height: 26px;
    padding: 10px 0;
  }
}

.native .header {
  height: calc(100vh - 60px - var(--safe-area-inset-top));
}
</style>