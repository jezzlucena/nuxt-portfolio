<script setup lang="ts">
import PROJECTS from '~/assets/json/projects'
import type { Project } from '~/types/Project';

const route = useRoute();
const project: Project = PROJECTS[route.params.key as keyof typeof PROJECTS];

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project Not Found'
  });
}
</script>

<template>
  <div class="content bg-white relative">
    <div id="project" class="section project w-[100%] max-w-[1024px] mx-auto p-[50px]">
				<div class="textContainer">
					<video :src="project.thumbVideoUrl" v-if="project.thumbVideoUrl" class="projectPicture" autoplay muted playsinline loop></video>
					
					<div class="description">
						<div class="projectName">
							<span class="label">Project</span>
							{{ project.name }}						
            </div>
						<div class="projectCompany">
							<span class="label">Company</span>
							{{ project.company }}
            </div>
						<div class="projectYear">
							<span class="label">Shipped in</span>
							{{ project.year }}
            </div>
						<div class="projectRole">
							<span class="label">Role on this project</span>
							{{ project.role }}
            </div>

						<br>

						<Keywords label="Stack" :keywords="project.stack.split(',')" />
						<br>

						<Keywords label="Platforms" :keywords="project.platforms.split(',')" />
						<br>

						<div class="projectButtons">
							<span class="label">Related Links</span>
							<Button 
                :href="project.liveDemoUrl || ''" 
                target="_blank" class="button" 
                :class="{ disabled: !project.liveDemoUrl }"
                external
              >Try Live Demo</Button>
							<Button 
                :href="project.videoUrl || ''" 
                target="_blank" class="button" 
                :class="{ disabled: !project.videoUrl }"
                external
              >Watch Full Video</Button>
              <Button 
                :href="project.behanceUrl || ''" 
                target="_blank" class="button" 
                :class="{ disabled: !project.behanceUrl }"
                external
              >View on Behance</Button>
              <Button 
                :href="project.githubUrl || ''" 
                target="_blank" class="button" 
                :class="{ disabled: !project.githubUrl }"
                external
              >View on GitHub</Button>
            </div>
					</div>
				</div>
				<div style="clear: both;"></div>
			</div>
  </div>
</template>

<style scoped>
.content {
  .project {
    .label {
      font-family: myriad-boldcond;
      font-weight: normal;
      display: block;
      letter-spacing: 2px;
      margin-top: 15px;
      margin-right: 0;
      font-size: 14px;
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
      background-color: black;
      width: 80%;
      height: auto;
      max-height: 600px;
      box-sizing: border-box;
      border: 1px solid black;
    }
  }
}

@media(max-width: 800px) {
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