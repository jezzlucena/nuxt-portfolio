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
        <a class="button" target="_blank" href="http://linkedin.com/in/jezzlucena">LinkedIn &#x2197;</a>
        <a class="button" target="_blank" href="/files/JezzLucenaResume2024.pdf">Resumé (pdf) &#x2197;</a>
        <br/>
        <a class="button contactButton" href="mailto:jezzlucena@gmail.com" data-page="contact">Contact</a>
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

.button {
	display: inline-block;
	font-family: opensans;
	text-transform: none;
	height: 30px;
	line-height: 30px;
	padding: 0 30px;
	margin: 10px;
	margin-right: 5px;
	font-size: 14px;
	letter-spacing: 1px;
	color: black;
	background-color: black;
	border: 1px solid white;
	text-decoration: none !important;
  white-space: nowrap;
	cursor: pointer;
	transition: all 0.2s linear;
}
	a.button[href=""], a.button[href="#"] {
		opacity: 0.5;
		pointer-events: none;
	}

	.button:hover {
		box-shadow: 7px 7px 0 -1px rgba(0, 0, 0, 1);
	}

	.buttonAreaWrapper .button:hover {
		box-shadow: 5px 5px 0 -1px rgba(255, 255, 255, 1);
	}

	.button:active {
		background-color: #fff;
		color: black;
		transition: all 0 linear;
	}

	.button.tile {
		height: 130px;
		width: 190px;
		padding: 0;
		background-color: white;
	}

		.button.tile .thumb {
			float: left;
			width: 100%;
			height: 99px;
			opacity: 1;
			background-size: cover;
			background-position: center center;
			background-repeat: no-repeat;
			pointer-events: none;
			transition: all 0.2s linear;
		}

		.button.tile:hover .thumb {
			opacity: 0.7;
		}

		.button.tile .caption {
			height: 30px;
			width: 130px;
			margin-top: 99px;
			padding: 0 30px;
			border-top: 1px solid white;
			background-color: black;
			text-align: center;
			transition: all 0.2s linear;
		}

		.button.tile:active .caption {
			background-color: #fff;
			color: black;
			transition: all 0 linear;
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

  .buttonAreaWrapper .button {
    color: black;
    background-color: white;
    border: 1px solid black;
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