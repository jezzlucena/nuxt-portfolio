import type { Project } from "~/types/Project";

const PROJECTS: { [key: string]: Project } = {
  "multiverse": {
    "name": "Burning Man: Multiverse",
    "company": "Celestial Bodies Camp",
    "year": 2020,
    "role": "Independent Collaborator",
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3",
    "description": "A socialy distanced and virtual 2020 simulation of what would happen on Playa.",
    "thumbAspectRatio": 0.9,
    "thumbImgUrl": "/img/portfolio/multiverse/multiverse_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/multiverse/multiverse_thumb.mp4",
    "thumbGifUrl": null,
    "behanceUrl": null,
    "videoUrl": "https://youtu.be/niPZFy9t9b0",
    "githubUrl": null,
    "liveDemoUrl": "https://multiverse.campcelestialbodies.org/"
  },
  "chatbot": {
    "name": "AI Chatbot",
    "company": "Personal Project",
    "year": 2025,
    "role": "Full Stack / AI Engineer",
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "Vue 3,Python,Hugging Face Transformers,LLMs,JavaScript,ES6,HTML5,CSS3",
    "description": "A chatbot powered by the Large Language Model Qwen 2.5, by Alibaba Cloud.",
    "thumbAspectRatio": 1.15,
    "thumbImgUrl": "/img/portfolio/chatbot/chatbot_thumb.png",
    "thumbVideoUrl": "/img/portfolio/chatbot/chatbot_thumb.mp4",
    "thumbGifUrl": null,
    "behanceUrl": null,
    "videoUrl": null,
    "githubUrl": "https://github.com/jezzlucena/vue-ai-chatbot",
    "liveDemoUrl": "https://chatbot.jezzlucena.com/"
  },
  "climatempo": {
    "name": "Climatempo Forecast",
    "company": "HXD Smart Solutions",
    "year": 2012,
    "role": "Full Stack Engineer (Intern)",
    "platforms": "Samsung SmartTV OS,LG SmartTV OS,Web",
    "stack": "JavaScript,XML,JSON,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "description": "The leading weather forecast cross-platform app in Brazil",
    "thumbImgUrl": "/img/portfolio/climatempo/climatempo_thumb.jpg",
    "thumbVideoUrl": null,
    "thumbGifUrl": "/img/portfolio/climatempo/climatempo_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097271/Climatempo-Weather-Forecast",
    "videoUrl": null,
    "githubUrl": null,
    "liveDemoUrl": null
  },
  "dell": {
    "name": "Dell OME Training Game",
    "company": "Kaon Interactive",
    "year": 2018,
    "role": "Full Stack Engineer (Contract)",
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "WebSockets,SQLite,JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "description": "Dell's gamified experience to showcase their cutting-edge corporate server deployment application",
    "thumbAspectRatio": 0.8,
    "thumbImgUrl": "/img/portfolio/dell/dell_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/dell/dell_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/dell/dell_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097417/Dell-OME-Gamified-Experience",
    "videoUrl": "https://youtu.be/McDy33GSPUM",
    "githubUrl": null,
    "liveDemoUrl": "https://demos.jezzlucena.com/DellOME"
  },
  "thermofisher": {
    "name": "Thermo Fisher Precision Medicine",
    "company": "Kaon Interactive",
    "year": 2018,
    "role": "Full Stack Engineer (Contract)",
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "description": "Thermo Fisher Scientific's Precision Medicine technology showcase app.",
    "thumbImgUrl": "/img/portfolio/thermofisher/thermo_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/thermofisher/thermo_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/thermofisher/thermo_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097771/Thermo-Fisher-Precision-Medicine",
    "videoUrl": "https://youtu.be/JUgZ73YrFKs",
    "githubUrl": null,
    "liveDemoUrl": "https://demos.jezzlucena.com/ThermoFisher_ADN"
  },
  "abbott": {
    "name": "Abbott Transformation",
    "company": "Kaon Interactive",
    "year": 2016,
    "role": "Front-End Engineer",
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n,Gather Content",
    "description": "B2B sales showcase for Abbott Diagnostics' Transformation laboratory solutions.",
    "thumbImgUrl": "/img/portfolio/abbott/abbott_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/abbott/abbott_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/abbott/abbott_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74096955/Abbott-Transformation",
    "videoUrl": "https://youtu.be/CLGU7GhBO0k",
    "githubUrl": null,
    "liveDemoUrl": "https://demos.jezzlucena.com/Transformation_ADN"
  },
  "strikeapose": {
    "name": "Strike A Pose",
    "company": "Personal Project",
    "year": 2020,
    "role": "Lead Engineer and Game Designer",
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,Heroku",
    "description": "A dystopian rhythm action-adventure video game, but make it fashion.",
    "thumbAspectRatio": 0.74,
    "thumbImgUrl": "/img/portfolio/strikeapose/strikeapose_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/strikeapose/strikeapose_thumb.mp4",
    "thumbGifUrl": null,
    "behanceUrl": null,
    "videoUrl": "https://youtu.be/zbpl4O8iWtE",
    "githubUrl": null,
    "liveDemoUrl": null
  },
  "kaon": {
    "name": "Kaon.com",
    "company": "Kaon Interactive",
    "year": 2017,
    "role": "Senior Full Stack Engineer",
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "Ruby on Rails,MongoDB,JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "description": "Kaon creates advanced software technology and platforms to enable global companies to simplify their complex stories at every customer touch-point",
    "thumbAspectRatio": 1.15,
    "thumbImgUrl": "/img/portfolio/kaon/kaon_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/kaon/kaon_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/kaon/kaon_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74096433/Kaoncom",
    "videoUrl": "https://youtu.be/2RX7FPld2lI",
    "githubUrl": null,
    "liveDemoUrl": "http://www.kaon.com/"
  },
  "dxma": {
    "name": "DxMA Awards 2016 Catalog",
    "company": "Kaon Interactive",
    "year": 2016,
    "role": "Full Stack Engineer",
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "description": "The digital catalog for DxMA's best B2B apps award ceremony",
    "thumbAspectRatio": 1.74,
    "thumbImgUrl": "/img/portfolio/dxma/dxma_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/dxma/dxma_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/dxma/dxma_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097473/DxMA-Awards-Catalog",
    "videoUrl": "https://youtu.be/aQ6I_z8w9vo",
    "githubUrl": null,
    "liveDemoUrl": "https://demos.jezzlucena.com/DxMA_2016"
  },
  "f5": {
    "name": "F5 Hybrid Cloud",
    "company": "Kaon Interactive",
    "year": 2016,
    "role": "Full Stack Engineer",
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "description": "A showcase app for F5 Networks' best practices on cloud computing and security",
    "thumbImgUrl": "/img/portfolio/f5/f5_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/f5/f5_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/f5/f5_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097513/F5-Hybrid-Cloud",
    "videoUrl": "https://youtu.be/Bp1X9JAe0VE",
    "githubUrl": null,
    "liveDemoUrl": "https://demos.jezzlucena.com/F5_ADN"
  },
  "hyundai": {
    "name": "Hyundai HB20s Launch",
    "company": "HXD Smart Solutions",
    "year": 2013,
    "role": "Full Stack Engineer",
    "platforms": "Samsung SmartTV OS,LG SmartTV OS,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "description": "Hyundai's marketing app for the launch of HB20 and HB20s new models in Brazil",
    "thumbImgUrl": "/img/portfolio/hyundai/hyundai_thumb.jpg",
    "thumbVideoUrl": null,
    "thumbGifUrl": "/img/portfolio/hyundai/hyundai_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097571/Hyundai-HB20s-Launch",
    "videoUrl": null,
    "githubUrl": null,
    "liveDemoUrl": null
  },
  "photobooth": {
    "name": "Photobooth",
    "company": "Personal Project",
    "year": 2019,
    "role": "Designer & AI Engineer",
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "description": "A web application that snaps a picture when you smile. Machine Learning, AI, and Material Design included.",
    "thumbAspectRatio": 0.74,
    "thumbImgUrl": "/img/portfolio/photobooth/photobooth_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/photobooth/photobooth_thumb.mp4",
    "thumbGifUrl": null,
    "behanceUrl": null,
    "videoUrl": "https://youtu.be/N8bxdOAP8Aw",
    "githubUrl": "https://github.com/jezzlucena/face-api-photobooth",
    "liveDemoUrl": "https://photobooth.jezzlucena.com"
  },
  "haystack": {
    "name": "In a Haystack",
    "company": "Worcester Polytechnic Institute",
    "year": 2016,
    "role": "Lead Engineer and Game Designer",
    "platforms": "Desktop,Web,iOS",
    "stack": "RPGMaker MV Script,Game Design,JavaScript,JSON,ES6,i18n",
    "description": "A graduate thesis proof-of-concept video game project implementation",
    "thumbImgUrl": "/img/portfolio/in-a-haystack/haystack_thumb.jpg",
    "thumbVideoUrl": null,
    "thumbGifUrl": "/img/portfolio/in-a-haystack/haystack_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097641/In-a-Haystack",
    "videoUrl": null,
    "githubUrl": null,
    "liveDemoUrl": "https://demos.jezzlucena.com/In_a_Haystack"
  },
  "cocacola": {
    "name": "Coca-Cola FM",
    "company": "HXD Smart Solutions",
    "year": 2012,
    "role": "Generalist Software Engineer (Intern)",
    "platforms": "LG SmartTV OS,Web",
    "stack": "ActionScript 3,XML,UX/UI Design,i18n",
    "description": "Coca-Cola FM's official Smart TV app in Latin America",
    "thumbImgUrl": "/img/portfolio/coca-cola/coca_thumb.jpg",
    "thumbVideoUrl": null,
    "thumbGifUrl": "/img/portfolio/coca-cola/coca_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097365/Coca-Cola-FM",
    "videoUrl": null,
    "githubUrl": null,
    "liveDemoUrl": null
  },
  "pong4x": {
    "name": "Pong! 4X",
    "company": "Independent Project",
    "year": 2014,
    "role": "Lead Engineer and Game Designer",
    "platforms": "Desktop",
    "stack": "Processing 3,Game Design,UX/UI Design,i18n",
    "description": "Proof-of-concept computer game that takes the classic Pong to a whole new hectic multiplayer experience",
    "thumbImgUrl": "/img/portfolio/pong-4x/pong4x_thumb.jpg",
    "thumbVideoUrl": null,
    "thumbGifUrl": "/img/portfolio/pong-4x/pong4x_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097689/Pong-4X",
    "videoUrl": null,
    "githubUrl": "https://github.com/jezzlucena/pong_4x",
    "liveDemoUrl": "https://demos.jezzlucena.com/Pong_4X"
  },
  "bandip": {
    "name": "Band IP",
    "company": "HXD Smart Solutions",
    "year": 2013,
    "role": "Full Stack Engineer",
    "platforms": "Samsung SmartTV OS,LG SmartTV OS,Web",
    "stack": "JavaScript,XML,JSON,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "description": "Band TV's leading video-on-demand multiplatform app in Brazil",
    "thumbImgUrl": "/img/portfolio/band-ip/band_thumb.jpg",
    "thumbVideoUrl": null,
    "thumbGifUrl": "/img/portfolio/band-ip/band_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097179/Band-IP",
    "videoUrl": null,
    "githubUrl": null,
    "liveDemoUrl": null
  }
}

export default PROJECTS;