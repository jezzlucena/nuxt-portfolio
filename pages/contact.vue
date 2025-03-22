<script setup lang="ts">
const { t, locale } = useI18n();

useHead({
  title: `${t('common.contact')} - ${t('common.jezzLucena')}`
});

watch(locale, () => {
  useHead({
    title: `${t('common.contact')} - ${t('common.jezzLucena')}`
  });
});
</script>

<template>
  <div class="content relative bg-white" id="content">
    <div class="relative w-[100%] max-w-[1024px] mx-auto py-[70px] px-[50px]">
      <Heading>
        <span>{{ $t("common.contact") }}</span>
      </Heading>

      <embed
        class="relative w-[100%]"
        height="940"
        src="https://rznlvjsm.formester.com/f/2_rn9_199YR-"
      />
    </div>
  </div>
</template>