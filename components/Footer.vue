<template>
  <div class="footer">
    <div class="buttonAreaWrapper">
      <div class="buttonArea">
        <Button theme="light" href="http://linkedin.com/in/jezzlucena">{{ $t("footer.linkedIn") }}</Button>
        <Button theme="light" href="/files/JezzLucenaResume2025.pdf">{{ $t("footer.resume") }}</Button>
        <br/>
        <Button theme="light" href="https://rznlvjsm.formester.com/f/2_rn9_199YR-">{{ $t("common.contact") }}</Button>
        <br/>
        <br/>
        <div class="emailText">{{ $t("footer.orDirectly") }} <b>jezzlucena@gmail.com</b></div>
      </div>
    </div>

    <div class="disclaimer">{{ $t("footer.creativeCommons") }}<br/>{{ $t("footer.lastUpdated") }} {{ (new Date((new Date()).getTime() - 14 * 24 * 60 * 60 * 1000)).toLocaleDateString($i18n.locale || $i18n.defaultLocale, { year: 'numeric', month: 'long', day: 'numeric' }) }}. <a target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/2.0/">{{ $t("footer.someRightsReserved") }}</a>.</div>
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

			@media(max-width: 940px) {
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