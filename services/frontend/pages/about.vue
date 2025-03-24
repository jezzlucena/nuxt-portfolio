<script setup lang="ts">
const isTextCollapsed = ref(true);
const { t, locale } = useI18n();

useHead({
  title: `${t('common.about')} - ${t('common.jezzLucena')}`
});

watch(locale, () => {
  useHead({
    title: `${t('common.about')} - ${t('common.jezzLucena')}`
  });
});
</script>

<template>
    <div class="content relative bg-white" id="content">
      <div class="absolute -top-[50px]" id="content"></div>
      <div class="w-[100%] mx-auto py-[30px] px-[20px] md:px-[30px] lg:px-[50px]">
        <div id="about" class="section about">
          <div class="aboutContainer">
            <div class="description">
              <NuxtLink class="profilePicture Jezz" target="_blank" to="http://linkedin.com/in/jezzlucena"></NuxtLink>
              <NuxtLink target="_blank" to="http://linkedin.com/in/jezzlucena">
                <div class="profileName">{{ $t("common.jezzLucena") }}</div>
                <div class="profileTitle">{{ $t("common.fullStackEngineer") }}</div>
              </NuxtLink>
              
              <Keywords label="Keywords" :keywords="PROFILE_KEYWORDS" />
            </div>
          </div>
          <div class="textContainer relative" :class="{ collapsed: isTextCollapsed }">
            <p v-for="paragraph of $tm('about.blurb')">{{ $rt(paragraph) }}</p>

            <div class="readMoreContainer">
              <Button
                v-if="isTextCollapsed"
                class="button"
                @click="() => isTextCollapsed = false"
              >{{ $t("about.readMore") }}</Button>
              <Button
                v-else
                class="button"
                @click="() => isTextCollapsed = true"
              >{{ $t("about.collapse") }}</Button>
            </div>
          </div>
          <div style="clear: both;"></div>
        </div>

        <div class="testimonials">
          <Heading>{{ $t("about.testimonials.title") }}</Heading>

          <div class="container">
            <Testimonial :href="$t('about.testimonials.chris.link')">
              <template #quote>
                <p>"{{ $t("about.testimonials.chris.quote") }}"</p>
              </template>
              <template #author>{{ $t("about.testimonials.chris.author") }}</template>
              <template #role>{{ $t("about.testimonials.chris.role") }}</template>
              <template #connection>{{ $t("about.testimonials.chris.connection") }}</template>
            </Testimonial>

            <Testimonial :href="$t('about.testimonials.klew.link')">
              <template #quote>
                <p>"{{ $t("about.testimonials.klew.quote1") }}</p>
                <p>{{ $t("about.testimonials.klew.quote2") }}</p>
                <p>{{ $t("about.testimonials.klew.quote3") }}"</p>
              </template>
              <template #author>{{ $t("about.testimonials.klew.author") }}</template>
              <template #role>{{ $t("about.testimonials.klew.role") }}</template>
              <template #connection>{{ $t("about.testimonials.klew.connection") }}</template>
            </Testimonial>

            <Testimonial :href="$t('about.testimonials.chaima.link')">
              <template #quote>
                <p>"{{ $t("about.testimonials.chaima.quote") }}"</p>
              </template>
              <template #author>{{ $t("about.testimonials.chaima.author") }}</template>
              <template #role>{{ $t("about.testimonials.chaima.role") }}</template>
              <template #connection>{{ $t("about.testimonials.chaima.connection") }}</template>
            </Testimonial>
          </div>
        </div>
		</div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  color: black;
  border-top: 2px solid white;
  padding-top: env(safe-area-inset-top);

  .anchor {
    margin-top: -env(safe-area-inset-top);
  }

  .aboutContainer {
    .profilePicture {
      float: left;
      margin: 20px 40px 20px 0;
      height: 175px;
      width: 175px;
      background-image: url('~/assets/img/jezz_profile.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border: 2px solid black;
      transition: 0.2s box-shadow ease, 0.2s transform ease;

      &:hover, &.hovered {
        box-shadow: 7px 7px 0 -1px rgba(0, 0, 0, 1);
        transform: translate(-3px, -3px);
      }
    }

    @media (max-width: 1024px) {
      .profilePicture {
        height: 140px;
        width: 140px;
        margin: 10px 20px 10px 0;
      }
    }

    @media (max-width: 640px) {
      .profilePicture {
        height: 100px;
        width: 100px;
        margin: 10px 20px 10px 0;
      }
    }

    .profileName {
      font-size: 30px;
      font-weight: bold;
      line-height: 30px;
      padding-top: 24px;
      margin-bottom: 10px;
      text-decoration: underline;
      font-family: myriad-boldcond;
    }
    
    .profileTitle {
      font-size: 18px;
      line-height: 18px;
      margin-bottom: 10px;
      letter-spacing: 1px;
    }

    @media (max-width: 1024px) {
      .profileName {
        margin-bottom: 5px;
        font-size: 26px;
        padding-top: 10px;
      }

      .profileTitle {
        font-size: 14px;
        line-height: 14px;
      }
    }

    @media (max-width: 640px) {
      .profileName {
        font-size: 22px;
      }

      .profileTitle {
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 14px;
      }
    }
  }

  .textContainer {
    margin-top: 30px;
    max-height: 1000px;
    transition: 1s max-height ease;
    padding-bottom: 40px;
    overflow: hidden;

    .readMoreContainer {
      background-image: linear-gradient(to bottom, transparent, white);
    }

    &.collapsed {
      max-height: 100px;
      overflow: hidden;
    }

    p {
      margin-bottom: 20px;
      line-height: 28px;

      &:first-child {
        text-indent: 40px;
      }
    }

    .readMoreContainer {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 80px;
      width: 100%;

      .button {
        position: absolute;
        bottom: 10px;
        right: 20px;
      }
    }
  }

  @media (max-width: 640px) {
    .textContainer {
      max-height: 1000px;

      &.collapsed {
        max-height: 300px;
      }
    }
  }

  @media (max-width: 1024px) {
    .textContainer {
      max-height: 1000px;

      &.collapsed {
        max-height: 200px;
      }
    }
  }
}

.testimonials {
  background-color: white;
  margin: 50px auto;

  .container {
    max-width: 700px;
    margin: 0 auto;
  }
  
  p {
    text-indent: 60px;
    margin-bottom: 20px;
  }
}
</style>