<script setup lang="ts">
import $ from 'jquery'

let animationInterval: NodeJS.Timeout | undefined;

const onLoad = () => {
	$('.header.relative').addClass('loaded');

	$('.navIcon, .navCover').click(function(){
		$('body').toggleClass('nav');
	});

	$('.readMoreContainer').click(function(){
		$(this).closest('.textContainer').toggleClass('collapsed');
	});

	if ($('body').attr('data-page') == 'project') {
		$('.projectButtons .button').each(function() {
			if (!$(this).attr('href')) {
				$(this).remove();
				$('.projectButtons').append(this);
			}
		});
	}

	nextTick(animateSVG);
};

function getRandomLightColor() {
	const lowComponent = 255 - Math.round(Math.random() * 150);
	const midComponent = 255 - Math.round(Math.random() * 150);
	const highComponent = Math.round(Math.random() * 255);

	const components = [
		{ value: lowComponent.toString(16).padStart(2, '0'), order: Math.random() },
		{ value: midComponent.toString(16).padStart(2, '0'), order: Math.random() },
		{ value: highComponent.toString(16).padStart(2, '0'), order: Math.random() }
	];

	components.sort((a, b) => a.order - b.order);

	

  return `#${components[0].value}${components[1].value}${components[2].value}`;
}

function animateSVG () {
	let delayAcc = 0;

	$('svg use').each(function() {
		delayAcc += 0.005;

		$(this)
			// .css('transition-duration', (Math.random() * 2).toFixed(2) + "s")
			.css('transition-delay', (Math.random()/2 + delayAcc).toFixed(1) + "s")
			.attr('data-color', getRandomLightColor());
	});

	$('svg').css('opacity', 1);

	let cycle = 0;

	animationInterval = setInterval(() => {
		$('svg use').each(function() {
			if (cycle == 0) {
				const color = $(this).attr("data-color") as string;

				$(this).css('fill', color)
					.css('stroke', color)
					.css('opacity', 1);
			} else if (cycle == 1) {
				$(this).css('opacity', 0);
			} else if (cycle == 2) {
				$(this).css('fill', 'white')
					.css('stroke', 'black')
					.css('opacity', 1);
			}
		});

		cycle = (cycle + 1) % 3;
	}, 4000);
}

onMounted(() => onLoad());
onUnmounted(() => clearInterval(animationInterval));
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1571 1362">
		<defs>
			<path id="p1" d="M0,0l28.36-49.65h-56.72Zm0-99.3,28.36,49.65h-56.72Z"/>
			<path id="p2" d="M0,0l-57.2,0,28.36,49.12Zm-86.051,49.68,28.846-49.4,28.36,49.12Z"/>
			<path id="p3" d="M0,0l28.881,49.45,28.3-49.26Zm86.059,49.65-57.181-.2,28.3-49.26Z"/>
			<path id="p4" d="M0,0l-57.2-0.2l28.3-49.3l0,0z"/>
		</defs>
		<use href="#p1" x="1458.28" y="1362.41"/><use href="#p1" x="1486.28" y="1313.89"/><use href="#p1" x="1514.28" y="1265.38"/><use href="#p1" x="1542.28" y="1216.86"/><use href="#p1" x="1430.28" y="1313.89"/><use href="#p1" x="1458.28" y="1265.38"/><use href="#p1" x="1486.28" y="1216.86"/><use href="#p1" x="1514.28" y="1168.34"/><use href="#p1" x="1402.28" y="1265.38"/><use href="#p1" x="1430.28" y="1216.86"/><use href="#p1" x="1458.28" y="1168.34"/><use href="#p1" x="1486.28" y="1119.82"/><use href="#p1" x="1374.28" y="1216.86"/><use href="#p1" x="1402.28" y="1168.34"/><use href="#p1" x="1430.28" y="1119.82"/><use href="#p1" x="1458.28" y="1071.3"/><use href="#p1" x="1346.28" y="1168.84"/><use href="#p1" x="1374.28" y="1120.32"/><use href="#p1" x="1402.28" y="1071.8"/><use href="#p1" x="1430.28" y="1023.28"/><use href="#p1" x="1318.28" y="1120.32"/><use href="#p1" x="1346.28" y="1071.8"/><use href="#p1" x="1374.28" y="1023.28"/><use href="#p1" x="1402.28" y="974.757"/><use href="#p1" x="1290.28" y="1071.8"/><use href="#p1" x="1318.28" y="1023.28"/><use href="#p1" x="1346.28" y="974.757"/><use href="#p1" x="1374.28" y="926.238"/><use href="#p1" x="1262.28" y="1023.28"/><use href="#p1" x="1290.28" y="974.757"/><use href="#p1" x="1318.28" y="926.238"/><use href="#p1" x="1346.28" y="877.718"/><use href="#p1" x="1234.28" y="974.253"/><use href="#p1" x="1262.28" y="925.734"/><use href="#p1" x="1290.28" y="877.214"/><use href="#p1" x="1318.28" y="828.7"/><use href="#p1" x="1206.28" y="925.734"/><use href="#p1" x="1234.28" y="877.214"/><use href="#p1" x="1262.28" y="828.7"/><use href="#p1" x="1290.28" y="780.175"/><use href="#p1" x="1178.28" y="877.214"/><use href="#p1" x="1206.28" y="828.7"/><use href="#p1" x="1234.28" y="780.175"/><use href="#p1" x="1262.28" y="731.656"/><use href="#p1" x="1150.28" y="828.7"/><use href="#p1" x="1178.28" y="780.175"/><use href="#p1" x="1206.28" y="731.656"/><use href="#p1" x="1234.28" y="683.136"/><use href="#p1" x="1122.28" y="779.671"/><use href="#p1" x="1150.28" y="731.152"/><use href="#p1" x="1178.28" y="682.632"/><use href="#p1" x="1206.28" y="634.113"/><use href="#p1" x="1094.28" y="731.152"/><use href="#p1" x="1122.28" y="682.632"/><use href="#p1" x="1150.28" y="634.113"/><use href="#p1" x="1178.28" y="585.593"/><use href="#p1" x="1066.28" y="682.632"/><use href="#p1" x="1094.28" y="634.113"/><use href="#p1" x="1122.28" y="585.593"/><use href="#p1" x="1150.28" y="537.074"/><use href="#p1" x="1038.28" y="634.113"/><use href="#p1" x="1066.28" y="585.593"/><use href="#p1" x="1094.28" y="537.074"/><use href="#p1" x="1122.28" y="488.554"/><use href="#p1" x="1010.28" y="585.089"/><use href="#p1" x="1038.28" y="536.57"/><use href="#p1" x="1066.28" y="488.05"/><use href="#p1" x="1094.28" y="439.531"/><use href="#p1" x="982.28" y="536.57"/><use href="#p1" x="1010.28" y="488.05"/><use href="#p1" x="1038.28" y="439.531"/><use href="#p1" x="1066.28" y="391.011"/><use href="#p1" x="954.28" y="488.05"/><use href="#p1" x="982.28" y="439.531"/><use href="#p1" x="1010.28" y="391.011"/><use href="#p1" x="1038.28" y="342.492"/><use href="#p1" x="926.28" y="439.531"/><use href="#p1" x="954.28" y="391.011"/><use href="#p1" x="982.28" y="342.492"/><use href="#p1" x="1010.28" y="293.972"/><use href="#p1" x="898.28" y="390.507"/><use href="#p1" x="926.28" y="341.988"/><use href="#p1" x="954.28" y="293.468"/><use href="#p1" x="982.28" y="244.949"/><use href="#p1" x="870.28" y="341.988"/><use href="#p1" x="898.28" y="293.468"/><use href="#p1" x="926.28" y="244.949"/><use href="#p1" x="954.28" y="196.429"/><use href="#p1" x="842.28" y="293.468"/><use href="#p1" x="870.28" y="244.949"/><use href="#p1" x="898.28" y="196.429"/><use href="#p1" x="926.28" y="147.91"/><use href="#p1" x="814.28" y="244.949"/><use href="#p1" x="842.28" y="196.429"/><use href="#p1" x="870.28" y="147.91"/><use href="#p1" x="898.28" y="99.39"/><use href="#p1" x="786.28" y="585.45"/><use href="#p1" x="814.28" y="536.9"/><use href="#p1" x="842.28" y="488.353"/><use href="#p1" x="870.28" y="439.8"/><use href="#p1" x="758.28" y="536.9"/><use href="#p1" x="786.28" y="488.353"/><use href="#p1" x="814.28" y="439.8"/><use href="#p1" x="842.28" y="391.255"/><use href="#p1" x="730.28" y="488.353"/><use href="#p1" x="758.28" y="439.8"/><use href="#p1" x="786.28" y="391.255"/><use href="#p1" x="814.28" y="342.707"/><use href="#p1" x="702.28" y="439.8"/><use href="#p1" x="730.28" y="391.255"/><use href="#p1" x="758.28" y="342.707"/><use href="#p1" x="786.28" y="294.158"/><use href="#p1" x="674.28" y="779.566"/><use href="#p1" x="702.28" y="731.018"/><use href="#p1" x="730.28" y="682.469"/><use href="#p1" x="758.28" y="633.92"/><use href="#p1" x="646.28" y="731.018"/><use href="#p1" x="674.28" y="682.469"/><use href="#p1" x="702.28" y="633.92"/><use href="#p1" x="730.28" y="585.372"/><use href="#p1" x="618.28" y="682.469"/><use href="#p1" x="646.28" y="633.92"/><use href="#p1" x="674.28" y="585.372"/><use href="#p1" x="702.28" y="536.823"/><use href="#p1" x="590.28" y="633.92"/><use href="#p1" x="618.28" y="585.372"/><use href="#p1" x="646.28" y="536.823"/><use href="#p1" x="674.28" y="488.275"/><use href="#p1" x="562.28" y="973.683"/><use href="#p1" x="590.28" y="925.134"/><use href="#p1" x="618.28" y="876.586"/><use href="#p1" x="646.28" y="828.037"/><use href="#p1" x="534.28" y="925.134"/><use href="#p1" x="562.28" y="876.586"/><use href="#p1" x="590.28" y="828.037"/><use href="#p1" x="618.28" y="779.488"/><use href="#p1" x="506.28" y="876.586"/><use href="#p1" x="534.28" y="828.037"/><use href="#p1" x="562.28" y="779.488"/><use href="#p1" x="590.28" y="730.94"/><use href="#p1" x="478.28" y="828.037"/><use href="#p1" x="506.28" y="779.488"/><use href="#p1" x="534.28" y="730.94"/><use href="#p1" x="562.28" y="682.391"/><use href="#p1" x="534.28" y="1022.15"/><use href="#p1" x="478.28" y="1022.15"/><use href="#p1" x="506.28" y="973.605"/><use href="#p1" x="422.28" y="1022.15"/><use href="#p1" x="450.28" y="973.605"/><use href="#p1" x="478.28" y="925.056"/><use href="#p1" x="366.28" y="1022.15"/><use href="#p1" x="394.28" y="973.605"/><use href="#p1" x="422.28" y="925.056"/><use href="#p1" x="450.28" y="876.507"/>
		<use href="#p2" x="899.7" y="1.414"/><use href="#p2" x="843.676" y="1.425"/><use href="#p2" x="787.657" y="1.436"/><use href="#p2" x="731.637" y="1.447"/><use href="#p2" x="871.676" y="49.922"/><use href="#p2" x="815.657" y="49.933"/><use href="#p2" x="759.637" y="49.944"/><use href="#p2" x="703.618" y="49.955"/><use href="#p2" x="843.657" y="98.431"/><use href="#p2" x="787.637" y="98.442"/><use href="#p2" x="731.618" y="98.453"/><use href="#p2" x="675.6" y="98.464"/><use href="#p2" x="815.637" y="146.939"/><use href="#p2" x="759.618" y="146.95"/><use href="#p2" x="703.6" y="146.961"/><use href="#p2" x="647.58" y="146.972"/><use href="#p2" x="788.05" y="195.2"/><use href="#p2" x="732.031" y="195.209"/><use href="#p2" x="676.012" y="195.22"/><use href="#p2" x="619.993" y="195.231"/><use href="#p2" x="760.031" y="243.707"/><use href="#p2" x="704.012" y="243.718"/><use href="#p2" x="647.993" y="243.729"/><use href="#p2" x="591.974" y="243.74"/><use href="#p2" x="732.012" y="292.215"/><use href="#p2" x="675.993" y="292.226"/><use href="#p2" x="619.974" y="292.237"/><use href="#p2" x="563.955" y="292.248"/><use href="#p2" x="703.993" y="340.724"/><use href="#p2" x="647.974" y="340.735"/><use href="#p2" x="591.955" y="340.746"/><use href="#p2" x="535.936" y="340.757"/><use href="#p2" x="675.537" y="389.484"/><use href="#p2" x="619.518" y="389.5"/><use href="#p2" x="563.5" y="389.506"/><use href="#p2" x="507.48" y="389.517"/><use href="#p2" x="647.518" y="437.992"/><use href="#p2" x="591.5" y="438"/><use href="#p2" x="535.48" y="438.015"/><use href="#p2" x="479.461" y="438.026"/><use href="#p2" x="619.5" y="486.5"/><use href="#p2" x="563.48" y="486.512"/><use href="#p2" x="507.461" y="486.523"/><use href="#p2" x="451.442" y="486.534"/><use href="#p2" x="591.48" y="535.009"/><use href="#p2" x="535.461" y="535.02"/><use href="#p2" x="479.442" y="535.032"/><use href="#p2" x="423.423" y="535.043"/><use href="#p2" x="563.024" y="583.77"/><use href="#p2" x="507.005" y="583.781"/><use href="#p2" x="450.986" y="583.792"/><use href="#p2" x="394.967" y="583.8"/><use href="#p2" x="535.005" y="632.278"/><use href="#p2" x="478.986" y="632.289"/><use href="#p2" x="422.967" y="632.3"/><use href="#p2" x="366.948" y="632.311"/><use href="#p2" x="506.986" y="680.787"/><use href="#p2" x="450.967" y="680.8"/><use href="#p2" x="394.948" y="680.809"/><use href="#p2" x="338.929" y="680.82"/><use href="#p2" x="478.967" y="729.3"/><use href="#p2" x="422.948" y="729.306"/><use href="#p2" x="366.929" y="729.317"/><use href="#p2" x="310.91" y="729.328"/><use href="#p2" x="450.512" y="778.056"/><use href="#p2" x="394.492" y="778.067"/><use href="#p2" x="338.473" y="778.078"/><use href="#p2" x="282.454" y="778.089"/><use href="#p2" x="422.492" y="826.564"/><use href="#p2" x="366.473" y="826.575"/><use href="#p2" x="310.454" y="826.586"/><use href="#p2" x="254.435" y="826.6"/><use href="#p2" x="394.473" y="875.073"/><use href="#p2" x="338.454" y="875.084"/><use href="#p2" x="282.435" y="875.1"/><use href="#p2" x="226.416" y="875.106"/><use href="#p2" x="366.454" y="923.581"/><use href="#p2" x="310.435" y="923.592"/><use href="#p2" x="254.416" y="923.6"/><use href="#p2" x="198.4" y="923.614"/><use href="#p2" x="338" y="972.342"/><use href="#p2" x="281.979" y="972.353"/><use href="#p2" x="225.96" y="972.364"/><use href="#p2" x="169.941" y="972.375"/><use href="#p2" x="309.979" y="1020.85"/><use href="#p2" x="253.96" y="1020.86"/><use href="#p2" x="197.941" y="1020.87"/><use href="#p2" x="141.922" y="1020.88"/><use href="#p2" x="281.96" y="1069.36"/><use href="#p2" x="225.941" y="1069.37"/><use href="#p2" x="169.922" y="1069.38"/><use href="#p2" x="113.9" y="1069.39"/><use href="#p2" x="253.941" y="1117.87"/><use href="#p2" x="197.922" y="1117.88"/><use href="#p2" x="141.9" y="1117.89"/><use href="#p2" x="85.884" y="1117.9"/><use href="#p2" x="562.824" y="971.865"/><use href="#p2" x="506.779" y="971.891"/><use href="#p2" x="450.735" y="971.916"/><use href="#p2" x="394.691" y="971.942"/><use href="#p2" x="534.779" y="1020.39"/><use href="#p2" x="478.735" y="1020.41"/><use href="#p2" x="422.691" y="1020.44"/><use href="#p2" x="366.646" y="1020.46"/><use href="#p2" x="506.735" y="1068.91"/><use href="#p2" x="450.691" y="1068.94"/><use href="#p2" x="394.646" y="1068.96"/><use href="#p2" x="338.6" y="1068.99"/><use href="#p2" x="478.691" y="1117.43"/><use href="#p2" x="422.646" y="1117.46"/><use href="#p2" x="366.6" y="1117.49"/><use href="#p2" x="310.558" y="1117.51"/><use href="#p2" x="786.934" y="971.8"/><use href="#p2" x="730.889" y="971.827"/><use href="#p2" x="674.845" y="971.853"/><use href="#p2" x="618.8" y="971.879"/><use href="#p2" x="758.889" y="1020.32"/><use href="#p2" x="702.845" y="1020.35"/><use href="#p2" x="646.8" y="1020.38"/><use href="#p2" x="590.756" y="1020.4"/><use href="#p2" x="730.845" y="1068.85"/><use href="#p2" x="674.8" y="1068.87"/><use href="#p2" x="618.756" y="1068.9"/><use href="#p2" x="562.712" y="1068.92"/><use href="#p2" x="702.8" y="1117.37"/><use href="#p2" x="646.756" y="1117.4"/><use href="#p2" x="590.712" y="1117.42"/><use href="#p2" x="534.667" y="1117.45"/><use href="#p2" x="1011.04" y="971.738"/><use href="#p2" x="955" y="971.764"/><use href="#p2" x="898.955" y="971.79"/><use href="#p2" x="842.91" y="971.815"/><use href="#p2" x="983" y="1020.26"/><use href="#p2" x="926.955" y="1020.29"/><use href="#p2" x="870.91" y="1020.31"/><use href="#p2" x="814.866" y="1020.34"/><use href="#p2" x="954.955" y="1068.78"/><use href="#p2" x="898.91" y="1068.81"/><use href="#p2" x="842.866" y="1068.84"/><use href="#p2" x="786.821" y="1068.86"/><use href="#p2" x="926.91" y="1117.31"/><use href="#p2" x="870.866" y="1117.33"/><use href="#p2" x="814.821" y="1117.36"/><use href="#p2" x="758.777" y="1117.38"/><use href="#p2" x="1067.02" y="971.752"/><use href="#p2" x="1095.02" y="1020.25"/><use href="#p2" x="1038.98" y="1020.27"/><use href="#p2" x="1123.02" y="1068.75"/><use href="#p2" x="1066.98" y="1068.77"/><use href="#p2" x="1010.93" y="1068.8"/><use href="#p2" x="1151.02" y="1117.24"/><use href="#p2" x="1094.98" y="1117.27"/><use href="#p2" x="1038.93" y="1117.3"/><use href="#p2" x="982.887" y="1117.32"/>
		<use href="#p3" x="0.827" y="1166.15"/><use href="#p3" x="28.906" y="1214.72"/><use href="#p3" x="56.984" y="1263.3"/><use href="#p3" x="85.063" y="1311.87"/><use href="#p3" x="56.847" y="1166.09"/><use href="#p3" x="84.925" y="1214.66"/><use href="#p3" x="113" y="1263.24"/><use href="#p3" x="141.082" y="1311.82"/><use href="#p3" x="112.866" y="1166.03"/><use href="#p3" x="140.944" y="1214.61"/><use href="#p3" x="169.023" y="1263.18"/><use href="#p3" x="197.1" y="1311.76"/><use href="#p3" x="168.885" y="1165.97"/><use href="#p3" x="196.963" y="1214.55"/><use href="#p3" x="225.042" y="1263.13"/><use href="#p3" x="253.12" y="1311.7"/><use href="#p3" x="224.471" y="1165.67"/><use href="#p3" x="252.55" y="1214.24"/><use href="#p3" x="280.628" y="1262.82"/><use href="#p3" x="308.707" y="1311.39"/><use href="#p3" x="280.49" y="1165.61"/><use href="#p3" x="308.569" y="1214.18"/><use href="#p3" x="336.647" y="1262.76"/><use href="#p3" x="364.726" y="1311.34"/><use href="#p3" x="336.509" y="1165.55"/><use href="#p3" x="364.588" y="1214.13"/><use href="#p3" x="392.667" y="1262.7"/><use href="#p3" x="420.745" y="1311.28"/><use href="#p3" x="392.529" y="1165.49"/><use href="#p3" x="420.607" y="1214.07"/><use href="#p3" x="448.686" y="1262.65"/><use href="#p3" x="476.764" y="1311.22"/><use href="#p3" x="448.984" y="1165.69"/><use href="#p3" x="477.063" y="1214.26"/><use href="#p3" x="505.141" y="1262.84"/><use href="#p3" x="533.22" y="1311.42"/><use href="#p3" x="505" y="1165.63"/><use href="#p3" x="533.082" y="1214.21"/><use href="#p3" x="561.161" y="1262.78"/><use href="#p3" x="589.239" y="1311.36"/><use href="#p3" x="561.023" y="1165.57"/><use href="#p3" x="589.1" y="1214.15"/><use href="#p3" x="617.18" y="1262.73"/><use href="#p3" x="645.258" y="1311.3"/><use href="#p3" x="617.042" y="1165.52"/><use href="#p3" x="645.12" y="1214.09"/><use href="#p3" x="673.2" y="1262.67"/><use href="#p3" x="701.277" y="1311.24"/><use href="#p3" x="673.5" y="1165.71"/><use href="#p3" x="701.576" y="1214.29"/><use href="#p3" x="729.655" y="1262.86"/><use href="#p3" x="757.733" y="1311.44"/><use href="#p3" x="729.517" y="1165.65"/><use href="#p3" x="757.6" y="1214.23"/><use href="#p3" x="785.674" y="1262.81"/><use href="#p3" x="813.752" y="1311.38"/><use href="#p3" x="785.536" y="1165.6"/><use href="#p3" x="813.614" y="1214.17"/><use href="#p3" x="841.693" y="1262.75"/><use href="#p3" x="869.771" y="1311.32"/><use href="#p3" x="841.555" y="1165.54"/><use href="#p3" x="869.633" y="1214.12"/><use href="#p3" x="897.712" y="1262.69"/><use href="#p3" x="925.79" y="1311.27"/><use href="#p3" x="898.011" y="1165.73"/><use href="#p3" x="926.089" y="1214.31"/><use href="#p3" x="954.168" y="1262.89"/><use href="#p3" x="982.246" y="1311.46"/><use href="#p3" x="954.03" y="1165.68"/><use href="#p3" x="982.108" y="1214.25"/><use href="#p3" x="1010.19" y="1262.83"/><use href="#p3" x="1038.27" y="1311.4"/><use href="#p3" x="1010.05" y="1165.62"/><use href="#p3" x="1038.13" y="1214.19"/><use href="#p3" x="1066.21" y="1262.77"/><use href="#p3" x="1094.28" y="1311.35"/><use href="#p3" x="1066.07" y="1165.56"/><use href="#p3" x="1094.15" y="1214.14"/><use href="#p3" x="1122.23" y="1262.71"/><use href="#p3" x="1150.3" y="1311.29"/><use href="#p3" x="1122.52" y="1165.76"/><use href="#p3" x="1150.6" y="1214.33"/><use href="#p3" x="1178.68" y="1262.91"/><use href="#p3" x="1206.76" y="1311.48"/><use href="#p3" x="1178.54" y="1165.7"/><use href="#p3" x="1206.62" y="1214.27"/><use href="#p3" x="1234.7" y="1262.85"/><use href="#p3" x="1262.78" y="1311.43"/><use href="#p3" x="1234.56" y="1165.64"/><use href="#p3" x="1262.64" y="1214.22"/><use href="#p3" x="1290.72" y="1262.79"/><use href="#p3" x="1318.8" y="1311.37"/><use href="#p3" x="1290.58" y="1165.58"/><use href="#p3" x="1318.66" y="1214.16"/><use href="#p3" x="1346.74" y="1262.74"/><use href="#p3" x="1374.82" y="1311.31"/><use href="#p3" x="1009.46" y="971.02"/><use href="#p3" x="1037.56" y="1019.61"/><use href="#p3" x="1065.67" y="1068.2"/><use href="#p3" x="1093.77" y="1116.79"/><use href="#p3" x="1065.51" y="970.977"/><use href="#p3" x="1093.61" y="1019.57"/><use href="#p3" x="1121.71" y="1068.16"/><use href="#p3" x="1149.82" y="1116.75"/><use href="#p3" x="1121.55" y="970.934"/><use href="#p3" x="1149.65" y="1019.52"/><use href="#p3" x="1177.76" y="1068.12"/><use href="#p3" x="1205.86" y="1116.71"/><use href="#p3" x="1177.59" y="970.891"/><use href="#p3" x="1205.7" y="1019.48"/><use href="#p3" x="1233.8" y="1068.07"/><use href="#p3" x="1261.9" y="1116.66"/><use href="#p3" x="897.113" y="776.7"/><use href="#p3" x="925.217" y="825.287"/><use href="#p3" x="953.321" y="873.877"/><use href="#p3" x="981.425" y="922.468"/><use href="#p3" x="953.158" y="776.653"/><use href="#p3" x="981.262" y="825.244"/><use href="#p3" x="1009.37" y="873.835"/><use href="#p3" x="1037.47" y="922.425"/><use href="#p3" x="1009.2" y="776.611"/><use href="#p3" x="1037.31" y="825.2"/><use href="#p3" x="1065.41" y="873.792"/><use href="#p3" x="1093.51" y="922.382"/><use href="#p3" x="1065.25" y="776.568"/><use href="#p3" x="1093.35" y="825.158"/><use href="#p3" x="1121.45" y="873.749"/><use href="#p3" x="1149.56" y="922.34"/><use href="#p3" x="784.766" y="582.373"/><use href="#p3" x="812.87" y="630.963"/><use href="#p3" x="840.974" y="679.554"/><use href="#p3" x="869.077" y="728.145"/><use href="#p3" x="840.811" y="582.33"/><use href="#p3" x="868.914" y="630.921"/><use href="#p3" x="897.018" y="679.511"/><use href="#p3" x="925.122" y="728.1"/><use href="#p3" x="896.855" y="582.287"/><use href="#p3" x="924.959" y="630.878"/><use href="#p3" x="953.062" y="679.468"/><use href="#p3" x="981.166" y="728.059"/><use href="#p3" x="952.9" y="582.244"/><use href="#p3" x="981" y="630.835"/><use href="#p3" x="1009.11" y="679.425"/><use href="#p3" x="1037.21" y="728.016"/><use href="#p3" x="812.775" y="533.778"/><use href="#p3" x="840.715" y="485.145"/><use href="#p3" x="868.819" y="533.736"/><use href="#p3" x="868.656" y="436.511"/><use href="#p3" x="896.759" y="485.1"/><use href="#p3" x="924.863" y="533.693"/><use href="#p4" x="842.8" y="583.5"/><use href="#p4" x="870.8" y="534.9"/><use href="#p4" x="898.7" y="486.2"/><use href="#p4" x="926.7" y="437.6"/>
	</svg>
</template>

<style scoped>
svg {
  height: 65%;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
	background-image: url('~/assets/img/logo.png');
  background-size: contain;

  use {
    fill: white;
    opacity: 1;
    transition: 0.5s fill ease, 0.5s stroke ease, 0.5s opacity ease;
    stroke: black;
    stroke-width: 1px;
  }
}
</style>