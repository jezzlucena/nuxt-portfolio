<script setup lang="ts">
import { Capacitor } from "@capacitor/core";
import { FileOpener } from '@capacitor-community/file-opener';

const isNative = import.meta.client && Capacitor.isNativePlatform();
const pdfAnchor = useTemplateRef("pdfAnchor");
const { t, locale } = useI18n();

watch(locale, () => {
  useHead({
    title: `${t('common.resume')} - ${t('common.jezzLucena')}`
  });
});

const openPdf = () => {
  const filePath = pdfAnchor.value?.getAttribute("href") as string;

  if (isNative) {
    try {
      FileOpener.open({
        filePath,
        contentType: 'application/pdf',
        openWithDefault: true
      });
    } catch (e) {
      console.log('Error opening file', e);
    }
  } else {
    window.open(filePath);
  }
}
</script>

<template>
  <div class="content relative bg-white" id="content">
    <div class="anchor absolute -top-[60px]" id="content"></div>
    <div class="relative w-[100%] max-w-[768px] mx-auto py-[30px] px-[20px] md:px-[30px] lg:px-[50px]">
      <Heading>
        <span>{{ $t("common.resume") }}</span>
        <a
          href="/files/JezzLucenaResume2025.pdf"
          target="_blank"
          ref="pdfAnchor"
          @click.prevent="openPdf"
        >
          <Button>
            <img src="/img/download.svg">
          </Button>
        </a>
      </Heading>

      <div class="relative w-[100%] pdfContainer">
        <embed
          class="absolute top-0 left-0 w-[100%] h-[100%]"
          src="/files/JezzLucenaResume2025.pdf#toolbar=1&navpanes=0&scrollbar=0&view=FitH"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: env(safe-area-inset-top);

  .anchor {
    margin-top: -env(safe-area-inset-top);
  }
}

.pdfContainer {
  padding-bottom: calc(129% + 56px);
}

.button {
  position: absolute;
  padding: 5px 10px;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  &:hover, &.hovered {
    transform: translate(-3px, calc(-50% - 3px));
  }

  img {
    width: 20px;
  }
}
</style>