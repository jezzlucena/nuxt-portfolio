<script setup lang="ts">
const { t, locale } = useI18n();

watch(locale, () => {
  useHead({
    title: `${t('common.resume')} - ${t('common.jezzLucena')}`
  });
});
</script>

<template>
  <div class="content relative bg-white">
    <div class="anchor absolute -top-[60px]" id="content"></div>
    <div class="relative w-[100%] max-w-[768px] mx-auto py-[30px] px-[20px] md:px-[30px] lg:px-[50px]">
      <Heading>
        <span>{{ $t("common.resume") }}</span>
        <a href="https://jezzlucena.com/files/JezzLucenaResume2025.pdf" target="_blank" download>
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