<script setup lang="ts">
const props = defineProps<{
  href?: string
}>();
</script>

<template>
  <a :href="props.href" target="_blank">
    <div class="testimonial">
      <div class="quote">
        <slot name="quote" />
      </div>
      <a :href="props.href" target="_blank">
        <div class="author">
          - <slot name="author" />
        </div>
        <div class="role">
          <slot name="role" />
        </div>
      </a>
      <div class="connection">
        <slot name="connection" />
      </div>
    </div>
  </a>
</template>

<style scoped>
.testimonial {
  position: relative;
  padding: 80px 60px;
  margin: 40px 0 80px;
  letter-spacing: 0;

  &::before, &::after {
    position: absolute;
    content: '';
    width: 90%;
    height: 90%;
    max-width: 400px;
    max-height: 150px;
  }

  &::before {
    top: 0;
    left: 0;
    border-top: 2px solid black;
    border-left: 2px solid black;
  }

  &::after {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
  }

  .author {
    margin-top: 30px;
    margin-bottom: -5px;
    text-align: right;
    font-size: 18px;
    font-family: myriad-boldcond;
  }

  .role {
    text-align: right;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .connection {
    text-align: right;
    font-size: 11px;
    opacity: 0.5;
  }

  &:hover .connection,
  &.hovered .connection {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .testimonial {
    padding: 30px;
  }
}
</style>