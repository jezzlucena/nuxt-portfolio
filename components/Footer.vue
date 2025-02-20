<script setup lang="ts">
const today = new Date();
const twoWeeksAgo = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000);
const formattedDate = twoWeeksAgo.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
</script>

<template>
  <div class="footer">
    <div class="buttonAreaWrapper">
      <div class="buttonArea">
        <Button theme="light" href="http://linkedin.com/in/jezzlucena" external>LinkedIn</Button>
        <Button theme="light" href="/files/JezzLucenaResume2025.pdf" external>Resumé (pdf)</Button>
        <br/>
        <Button theme="light" href="mailto:jezzlucena@gmail.com">Contact</Button>
        <br/>
        <br/>
        <div class="emailText">...or reach out directly at <b>jezzlucena@gmail.com</b></div>
      </div>
    </div>

    <div class="disclaimer">Creative Commons Attribution-ShareAlike License<br/>Last updated in {{ formattedDate }}. <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/2.0/">Some Rights Reserved</a>.</div>
  </div>
</template>

<style scoped>
.footer {
  position: relative;
  background-color: black;
  color: white;
  z-index: 99;
}

.disclaimer {
  font-family: opensans;
  width: 100%;
  background-color: white;
  color: black;
  text-align: center;
  padding: 10px 0;
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
  border-top: 1px solid white;
  background-color: black;
  color: white;
}

	.buttonArea {
		display: table-cell;
		bottom: 5%;
	}

		.buttonArea .button {
			display: inline-block;
			min-width: 200px;
			width: 10%;
			margin: 10px 20px;
      vertical-align: bottom;
		}

			@media(max-width: 800px) {
				.buttonArea .button {
					display: block;
					margin: 10px auto;
				}
			}

			.button.center {
				background-color: white;
				color: black;
			}
</style>