import $ from 'jquery';

window.$ = window.jQuery = $;

export default defineNuxtPlugin(() => {
  return {
    provide: {
      $: $
    }
  };
});