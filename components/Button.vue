<script setup lang="ts">
const props = defineProps<{
  theme?: 'light' | 'dark',
  href?: string,
  external?: boolean
}>();
</script>

<template>
  <a
    class="button"
    :class="{ light: props.theme === 'light' }"
    target="_blank"
    :href="props.href"
  >
    <slot />
    {{ props.external ? '  &#x2197;' : null }}
  </a>
</template>

<style scoped>
.button {
	display: inline-block;
	font-family: opensans;
	text-transform: none;
	height: 30px;
	line-height: 30px;
	padding: 0 30px;
	margin-right: 5px;
	font-size: 14px;
	letter-spacing: 1px;
	color: white;
	background-color: black;
	border: 1px solid white;
	text-decoration: none !important;
  white-space: nowrap;
	cursor: pointer;
	transition: all 0.2s linear;

  &:hover {
		box-shadow: 7px 7px 0 -1px rgba(0, 0, 0, 1);
	}

  &:active {
		background-color: #fff;
		color: black;
		transition: all 0 linear;
	}

  &.light {
    color: black;
    background-color: white;
    border: 1px solid black;

    &:hover {
      box-shadow: 7px 7px 0 -1px rgba(255, 255, 255, 1);
    }

    &:active {
      background-color: #000;
      color: white;
    }
	}
}
</style>