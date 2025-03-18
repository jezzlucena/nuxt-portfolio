<script setup lang="ts">
const KEYWORDS = [
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "NuxtJS",
  "Python",
  "Django",
  "ES6",
  "HTML5",
  "CSS3",
  "Ruby on Rails",
  "Agile Software Development",
  "UX/UI Design",
  "RESTful APIs",
  "i18n"
];
const isCollapsed = ref(true);
</script>

<template>
    <div class="content relative bg-white">
      <div class="w-[100%] max-w-[1024px] mx-auto p-[50px]">
        <div id="about" class="section about">
          <div class="aboutContainer">
            <div class="description">
              <a class="profilePicture Jezz" target="_blank" href="http://linkedin.com/in/jezzlucena"></a>
              <div class="profileName">{{ $t("common.jezzLucena") }}</div>
              <div class="profileTitle">{{ $t("common.fullStackEngineer") }}</div>
              
              <Keywords label="Keywords" :keywords="KEYWORDS" />

              <div class="profileButtons">
                <a href="resource/JezzLucenaResume2025.pdf" target="_blank" class="button">
                  <Button external>{{ $t("about.downloadResume") }}</Button>
                </a>
              </div>
            </div>
          </div>
          <div class="textContainer relative" :class="{ collapsed: isCollapsed }">
            <p v-for="paragraph of $tm('about.blurb')">{{ $rt(paragraph) }}</p>

            <div class="readMoreContainer">
              <Button v-if="isCollapsed" class="button" @click="() => { isCollapsed = false }">{{ $t("about.readMore") }}</Button>
              <Button v-else class="button" @click="() => { isCollapsed = true }">{{ $t("about.collapse") }}</Button>
            </div>
          </div>
          <div style="clear: both;"></div>
        </div>

        <div class="testimonials">
          <div class="title">{{ $t("about.testimonials.title") }}</div>

          <div class="container">
            <Testimonial :href="$t('about.testimonials.chris.link')">
              <template #quote>{{ $t("about.testimonials.chris.quote") }}</template>
              <template #author>{{ $t("about.testimonials.chris.author") }}</template>
              <template #role>{{ $t("about.testimonials.chris.role") }}</template>
              <template #connection>{{ $t("about.testimonials.chris.connection") }}</template>
            </Testimonial>

            <Testimonial :href="$t('about.testimonials.klew.link')">
              <template #quote>{{ $t("about.testimonials.klew.quote") }}</template>
              <template #author>{{ $t("about.testimonials.klew.author") }}</template>
              <template #role>{{ $t("about.testimonials.klew.role") }}</template>
              <template #connection>{{ $t("about.testimonials.klew.connection") }}</template>
            </Testimonial>

            <Testimonial :href="$t('about.testimonials.chaima.link')">
              <template #quote>{{ $t("about.testimonials.chaima.quote") }}</template>
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
  border-top: 1px solid white;

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
      border: 1px solid black;
      border-radius: 10px;
    }

    .profileName {
      font-size: 24px;
      font-weight: bold;
      line-height: 24px;
      padding-top: 25px;
      margin-bottom: 10px;
      letter-spacing: 3px;
    }
    
    .profileTitle {
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 20px;
      letter-spacing: 2px;
    }

    .profileButtons {
      margin: 20px;
    }

    .keywords {
      font-family: opensans;
      letter-spacing: 2px;
      margin-right: 5px;
      font-size: 0;
      color: white;

      .label, .keyword {
        font-size: 14px;
        color: black;
      }

      .label {
        font-weight: bold;
      }

      .keyword {
        display: inline-block;
        white-space: nowrap;
        letter-spacing: 1px;
        margin-bottom: 6px;
        margin-right: 6px;
        border: 1px solid black;
        padding: 2px 10px;
      }
    }
  }

  .textContainer {
    max-height: 2000px;
    transition: 1s max-height ease;
    padding-bottom: 30px;

    &.collapsed {
      max-height: 100px;
      overflow: hidden;

      .readMoreContainer {
        background-image: linear-gradient(to bottom, transparent, white);
      }
    }

    p {
      margin-bottom: 20px;
      line-height: 28px;
    }

    .readMoreContainer {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100px;
      width: 100%;

      .button {
        position: absolute;
        bottom: 10px;
        right: 20px;
      }
    }
  }
}

.testimonials {
  margin: 50px auto;
  
  .title {
    font-family: myriad-boldcond;
    letter-spacing: 2px;
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    line-height: 70px;
    font-size: 22px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .container {
    max-width: 700px;
    margin: 0 auto;
  }
}
</style>