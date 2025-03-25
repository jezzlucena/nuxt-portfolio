<script setup lang="ts">
import PROJECTS from '~/assets/json/projects'
import type { Project } from '~/types/Project';

const route = useRoute();
const project: Project = PROJECTS[route.params.key as keyof typeof PROJECTS];
const { t, locale } = useI18n();

watch(locale, () => {
  useHead({
    title: `${t(project.i18nKeys.name)} - ${t('common.jezzLucena')}`
  });
});

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  });
}
</script>

<template>
  <div class="content bg-white relative">
    <div class="anchor absolute -top-[60px]" id="content"></div>
    <div id="project" class="section project w-[100%] mx-auto py-[70px] px-[50px]">
				<div class="textContainer">
          <Heading>{{ $t(project.i18nKeys.name) }}</Heading>

          <div v-if="project.thumbVideoUrl" class="projectPicture max-w-[900px] mx-auto">
            <video class="profileVideoBackground" :src="project.thumbVideoUrl" autoplay muted playsinline loop></video>
            <video class="profileVideo" :src="project.thumbVideoUrl" autoplay muted playsinline loop></video>
          </div>
          <img :src="project.thumbImgUrl" v-else class="projectPicture max-w-[900px] mx-auto"/>
					
					<div class="description max-w-[900px] mx-auto">
						<div class="projectName">
							<span class="label">{{ $t("projects.project") }}</span>
							{{ $t(project.i18nKeys.description) }}
            </div>
						<div class="projectCompany">
							<span class="label">{{ $t("projects.company") }}</span>
							{{ $t(project.i18nKeys.company) }}
            </div>
						<div class="projectYear">
							<span class="label">{{ $t("projects.shipped") }}</span>
							{{ project.year }}
            </div>
						<div class="projectRole">
							<span class="label">{{ $t("projects.role") }}</span>
							{{ $t(project.i18nKeys.role) }}
            </div>

						<br>

						<Keywords :label="$t('projects.stack')" :keywords="project.stack.split(',')" />
						<br>

						<Keywords :label="$t('projects.platforms')" :keywords="project.platforms.split(',')" />
						<br>

						<div class="projectButtons">
							<span class="label">{{ $t("projects.related") }}</span>
              <NuxtLink
                v-if="project.liveDemoUrl"
                :to="project.liveDemoUrl" 
                target="_blank"
              >
                <Button class="button">{{ $t("projects.tryLiveDemo") }}</Button>
              </NuxtLink>
              <NuxtLink
                v-if="project.videoUrl"
                :to="project.videoUrl" 
                target="_blank"
              >
                <Button class="button">{{ $t("projects.watchVideo") }}</Button>
              </NuxtLink>
              <NuxtLink
                v-if="project.behanceUrl"
                :to="project.behanceUrl" 
                target="_blank"
              >
                <Button class="button">{{ $t("projects.onBehance") }}</Button>
              </NuxtLink>
              <NuxtLink
                v-if="project.githubUrl"
                :to="project.githubUrl" 
                target="_blank"
              >
                <Button class="button">{{ $t("projects.onGitHub") }}</Button>
              </NuxtLink>
            </div>
					</div>
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

  .project {
    .label {
      font-family: myriad-boldcond;
      font-weight: normal;
      display: block;
      letter-spacing: 1px;
      margin-top: 15px;
      margin-right: 0;
      font-size: 16px;
      text-transform: uppercase;
    }

    .projectButtons {
      margin: 20px auto 0;

      .button {
        margin: 10px 20px 0 0;

        &.disabled {
          opacity: 0.5;
          pointer-events: none;
        }
      }
    }

    .projectPicture {
      position: relative;
      display: block;
      margin: 0 auto 30px;
      width: 100%;
      height: auto;
      max-height: 640px;
      box-sizing: border-box;
      border: 2px solid black;

      .profileVideo {
        position: relative;
        width: 100%;
        height: auto;
        max-height: 640px;
      }

      .profileVideoBackground {
        position: absolute;
        width: 100%;
        height: auto;
        max-height: 640px;
        object-fit: cover;
        object-position: 50% 50%;
        filter: blur(5px);
      }
    }

    .description {
      letter-spacing: 0;
    }
  }
}

@media(max-width: 768px) {
  .content .projectButtons {
    margin: 20px auto 0;
    text-align: center;

    .button {
      display: block;
      margin: 10px auto;
    }
  }
}
</style>