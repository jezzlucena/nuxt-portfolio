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
  <div class="bg-white">This route takes you to project {{ project.name }}</div>
</template>