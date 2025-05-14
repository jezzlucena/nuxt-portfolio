<script setup lang="ts">
/**
 * Component that displays the footer, to be imported in every page
 */

const twoWeeksAgo = ref(0);

onMounted(() => {
  const now = Date.now();
  twoWeeksAgo.value = now - 14 * 24 * 60 * 60 * 1000
});
</script>

<template>
  <div class="footer">
    <div class="buttonAreaWrapper">
      <div class="buttonArea">
        <NuxtLink to="https://linkedin.com/in/jezzlucena" target="_blank">
          <Button theme="light">{{ $t("footer.linkedIn") }}</Button>
        </NuxtLink>
        <NuxtLink to="https://github.com/jezzlucena" target="_blank">
          <Button theme="light">{{ $t("footer.gitHub") }}</Button>
        </NuxtLink>
        <NuxtLink :to="$localePath('/resume') + '#content'">
          <Button theme="light">{{ $t("common.resume") }}</Button>
        </NuxtLink>
        <NuxtLink :to="$localePath('/contact') + '#content'">
          <Button theme="light">{{ $t("common.contact") }}</Button>
        </NuxtLink>

        <br/>
        <br/>

        <div class="emailText">
          {{ $t("footer.orDirectly") }} <b><u><a href="mailto:jezzlucena@gmail.com">jezzlucena@gmail.com</a></u></b>
        </div>
      </div>
    </div>

    <div class="disclaimer">
      {{ $t("footer.creativeCommons") }}<br/>
      {{ $t("footer.lastUpdated") }} 
      {{ (new Date(twoWeeksAgo)).toLocaleDateString($i18n.locale || $i18n.defaultLocale, { year: 'numeric', month: 'long', day: 'numeric' }) }}. <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/2.0/">{{ $t("footer.someRightsReserved") }}</a>.<br/>
      Read our <NuxtLink to="/privacy#content">Privacy Policy.</NuxtLink> Use of this website or apps is subject to our <NuxtLink to="/terms#content">Terms and Conditions.</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: relative;
  background-color: black;
  color: white;
  z-index: 1;
}

.disclaimer {
  font-family: opensans;
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
  padding: 20px 10px calc(20px + var(--safe-area-inset-bottom));
  font-size: 14px;
}

.disclaimer *:link {
  color: black;
  text-decoration: underline;
}

.buttonAreaWrapper {
	display: table;
	text-align: center;
	height: 40px;
	width: 100%;
  padding: 50px 0;
  border-top: 2px solid white;
  background-color: black;
  color: white;
}

	.buttonArea {
		display: table-cell;
		bottom: 5%;
	}

		.buttonArea .button {
			display: inline-block;
			margin: 10px 20px;
      vertical-align: bottom;
		}

			@media(max-width: 1024px) {
				.buttonArea .button {
					display: block;
          max-width: 200px;
					margin: 10px auto;
				}
			}

			.button.center {
				background-color: white;
				color: black;
			}
</style>