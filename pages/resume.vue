<script setup lang="ts">
const { t } = useI18n();

useHead({
  title: `${t('common.resume')} - ${t('common.jezzLucena')}`
});
</script>

<template>
  <div class="content relative bg-white" id="content">
    <div class="relative w-[100%] max-w-[1024px] mx-auto py-[70px] px-[50px]">
      <Heading>
        <span>{{ $t("common.resume") }}</span>
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
.pdfContainer {
  padding-bottom: calc(129% + 56px);
}
</style>