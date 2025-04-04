<script setup lang="ts">
import { InAppBrowser, DefaultSystemBrowserOptions } from "@capacitor/inappbrowser"
import { Capacitor } from "@capacitor/core";

const isNative = import.meta.client && Capacitor.isNativePlatform();
const pdfAnchor = useTemplateRef("pdfAnchor");
const { t, locale } = useI18n();

const setLocaleTitle = () => useHead({ title: `${t('common.resume')} - ${t('common.jezzLucena')}` });
watch(locale, setLocaleTitle);
setLocaleTitle();

const openPdf = () => {
  const url = pdfAnchor.value?.getAttribute("href") as string;

  if (isNative) {
    InAppBrowser.openInSystemBrowser({
      url,
      options: DefaultSystemBrowserOptions
    });
  } else {
    window.open(url);
  }
}
</script>

<template>
  <div class="content relative bg-white">
    <div class="anchor absolute -top-[60px]" id="content"></div>
    <div class="relative w-[100%] max-w-[1280px] mx-auto py-[30px] px-[20px] md:px-[30px] lg:px-[50px]">
      <Heading>
        <span>{{ $t("common.resume") }}</span>
        <a
          href="https://jezzlucena.com/files/JezzLucenaResume2025.pdf"
          target="_blank"
          download
          ref="pdfAnchor"
          @click.prevent="openPdf"
        >
          <div class="icon">
            <img src="/img/download.png" class="symbol">
          </div>
        </a>
      </Heading>

      <div class="relative w-[100%] pdfContainer">
        <embed
          class="absolute top-0 left-0 w-[100%] h-[100%]"
          src="https://jezzlucena.com/files/JezzLucenaResume2025.pdf#toolbar=1&navpanes=0&scrollbar=0&view=FitH"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: var(--safe-area-inset-top);

  .anchor {
    margin-top: -var(--safe-area-inset-top);
  }
}

.pdfContainer {
  padding-bottom: calc(129% + 56px);
}

.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  height: 45px;
  width: 45px;
  border: 2px solid black;
  margin: 0;
  background-color: white;
  transition: 0.2s box-shadow ease, 0.2s transform ease;

  &:hover, &.hovered {
    box-shadow: 7px 7px 0 -1px rgba(0, 0, 0, 1);
    transform: translate(-3px, calc(-50% - 3px));
  }
  
  .symbol {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>