import type { Project } from "~/types/Project";

const PROJECTS: { [key: string]: Project } = {
  "multiverse": {
    "i18nKeys": {
      "name": "projects.items.multiverse.name",
      "description": "projects.items.multiverse.description",
      "company": "projects.companies.celestialBodies",
      "role": "projects.roles.independentCollaborator",
    },
    "year": 2020,
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3",
    "thumbImgUrl": "/img/portfolio/multiverse/multiverse_thumb.jpg",
    "thumbAspectRatio": 0.9,
    "thumbVideoUrl": "/img/portfolio/multiverse/multiverse_thumb.mp4",
    "videoUrl": "https://youtu.be/niPZFy9t9b0",
    "liveDemoUrl": "https://multiverse.campcelestialbodies.org/"
  },
  "chatbot": {
    "i18nKeys": {
      "name": "projects.items.chatbot.name",
      "description": "projects.items.chatbot.description",
      "company": "projects.companies.independentProject",
      "role": "projects.roles.fullStackAi",
    },
    "year": 2025,
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "Vue 3,Python,Hugging Face Transformers,LLMs,JavaScript,ES6,HTML5,CSS3",
    "thumbImgUrl": "/img/portfolio/chatbot/chatbot_thumb.png",
    "thumbAspectRatio": 1.15,
    "thumbVideoUrl": "/img/portfolio/chatbot/chatbot_thumb.mp4",
    "githubUrl": "https://github.com/jezzlucena/vue-ai-chatbot",
    "liveDemoUrl": "https://chatbot.jezzlucena.xyz/"
  },
  "climatempo": {
    "i18nKeys": {
      "name": "projects.items.climatempo.name",
      "description": "projects.items.climatempo.description",
      "company": "projects.companies.hxd",
      "role": "projects.roles.fullStack",
    },
    "year": 2012,
    "platforms": "Samsung SmartTV OS,LG SmartTV OS,Web",
    "stack": "JavaScript,XML,JSON,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/climatempo/climatempo_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/climatempo/climatempo_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/climatempo/climatempo_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097271/Climatempo-Weather-Forecast",
  },
  "dell": {
    "i18nKeys": {
      "name": "projects.items.dell.name",
      "description": "projects.items.dell.description",
      "company": "projects.companies.kaon",
      "role": "projects.roles.fullStack",
    },
    "year": 2018,
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "WebSockets,SQLite,JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/dell/dell_thumb.jpg",
    "thumbAspectRatio": 0.8,
    "thumbVideoUrl": "/img/portfolio/dell/dell_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/dell/dell_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097417/Dell-OME-Gamified-Experience",
    "videoUrl": "https://youtu.be/McDy33GSPUM",
    "liveDemoUrl": "https://demos.jezzlucena.com/DellOME"
  },
  "thermofisher": {
    "i18nKeys": {
      "name": "projects.items.thermofisher.name",
      "description": "projects.items.thermofisher.description",
      "company": "projects.companies.thermoFisher",
      "role": "projects.roles.fullStack",
    },
    "year": 2018,
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/thermofisher/thermo_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/thermofisher/thermo_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/thermofisher/thermo_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097771/Thermo-Fisher-Precision-Medicine",
    "videoUrl": "https://youtu.be/JUgZ73YrFKs",
    "liveDemoUrl": "https://demos.jezzlucena.com/ThermoFisher_ADN"
  },
  "abbott": {
    "i18nKeys": {
      "name": "projects.items.abbott.name",
      "description": "projects.items.abbott.description",
      "company": "projects.companies.kaon",
      "role": "projects.roles.frontEnd",
    },
    "year": 2016,
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n,Gather Content",
    "thumbImgUrl": "/img/portfolio/abbott/abbott_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/abbott/abbott_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/abbott/abbott_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74096955/Abbott-Transformation",
    "videoUrl": "https://youtu.be/CLGU7GhBO0k",
    "liveDemoUrl": "https://demos.jezzlucena.com/Transformation_ADN"
  },
  "strikeapose": {
    "i18nKeys": {
      "name": "projects.items.strikeapose.name",
      "description": "projects.items.strikeapose.description",
      "company": "projects.companies.independentProject",
      "role": "projects.roles.leadEngineerGameDesigner",
    },
    "year": 2020,
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,Heroku",
    "thumbImgUrl": "/img/portfolio/strikeapose/strikeapose_thumb.jpg",
    "thumbAspectRatio": 0.74,
    "thumbVideoUrl": "/img/portfolio/strikeapose/strikeapose_thumb.mp4",
    "videoUrl": "https://youtu.be/zbpl4O8iWtE"
  },
  "kaon": {
    "i18nKeys": {
      "name": "projects.items.kaon.name",
      "description": "projects.items.kaon.description",
      "company": "projects.companies.kaon",
      "role": "projects.roles.seniorFullStack",
    },
    "year": 2017,
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "Ruby on Rails,MongoDB,JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/kaon/kaon_thumb.jpg",
    "thumbAspectRatio": 1.15,
    "thumbVideoUrl": "/img/portfolio/kaon/kaon_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/kaon/kaon_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74096433/Kaoncom",
    "videoUrl": "https://youtu.be/2RX7FPld2lI",
    "liveDemoUrl": "http://www.kaon.com/"
  },
  "dxma": {
    "i18nKeys": {
      "name": "projects.items.dxma.name",
      "description": "projects.items.dxma.description",
      "company": "projects.companies.kaon",
      "role": "projects.roles.fullStack",
    },
    "year": 2016,
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/dxma/dxma_thumb.jpg",
    "thumbAspectRatio": 1.74,
    "thumbVideoUrl": "/img/portfolio/dxma/dxma_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/dxma/dxma_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097473/DxMA-Awards-Catalog",
    "videoUrl": "https://youtu.be/aQ6I_z8w9vo",
    "liveDemoUrl": "https://demos.jezzlucena.com/DxMA_2016"
  },
  "f5": {
    "i18nKeys": {
      "name": "projects.items.f5.name",
      "description": "projects.items.f5.description",
      "company": "projects.companies.kaon",
      "role": "projects.roles.fullStack",
    },
    "year": 2016,
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/f5/f5_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/f5/f5_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/f5/f5_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097513/F5-Hybrid-Cloud",
    "videoUrl": "https://youtu.be/Bp1X9JAe0VE",
    "liveDemoUrl": "https://demos.jezzlucena.com/F5_ADN"
  },
  "hyundai": {
    "i18nKeys": {
      "name": "projects.items.hyundai.name",
      "description": "projects.items.hyundai.description",
      "company": "projects.companies.hxd",
      "role": "projects.roles.fullStack",
    },
    "year": 2013,
    "platforms": "Samsung SmartTV OS,LG SmartTV OS,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/hyundai/hyundai_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/hyundai/hyundai_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/hyundai/hyundai_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097571/Hyundai-HB20s-Launch",
  },
  "photobooth": {
    "i18nKeys": {
      "name": "projects.items.photobooth.name",
      "description": "projects.items.photobooth.description",
      "company": "projects.companies.independentProject",
      "role": "projects.roles.designerAi",
    },
    "year": 2019,
    "platforms": "iOS,Android,Desktop,Web",
    "stack": "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/photobooth/photobooth_thumb.jpg",
    "thumbAspectRatio": 0.74,
    "thumbVideoUrl": "/img/portfolio/photobooth/photobooth_thumb.mp4",
    "videoUrl": "https://youtu.be/N8bxdOAP8Aw",
    "githubUrl": "https://github.com/jezzlucena/face-api-photobooth",
    "liveDemoUrl": "https://photobooth.jezzlucena.com"
  },
  "haystack": {
    "i18nKeys": {
      "name": "projects.items.haystack.name",
      "description": "projects.items.haystack.description",
      "company": "projects.companies.wpi",
      "role": "projects.roles.leadEngineerGameDesigner",
    },
    "year": 2016,
    "platforms": "Desktop,Web,iOS",
    "stack": "RPGMaker MV Script,Game Design,JavaScript,JSON,ES6,i18n",
    "thumbImgUrl": "/img/portfolio/in-a-haystack/haystack_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/in-a-haystack/haystack_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/in-a-haystack/haystack_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097641/In-a-Haystack",
    "liveDemoUrl": "https://demos.jezzlucena.com/In_a_Haystack"
  },
  "cocacola": {
    "i18nKeys": {
      "name": "projects.items.cocacola.name",
      "description": "projects.items.cocacola.description",
      "company": "projects.companies.hxd",
      "role": "projects.roles.softwareEngineer",
    },
    "year": 2012,
    "platforms": "LG SmartTV OS,Web",
    "stack": "ActionScript 3,XML,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/coca-cola/coca_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/coca-cola/coca_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/coca-cola/coca_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097365/Coca-Cola-FM",
  },
  "pong4x": {
    "i18nKeys": {
      "name": "projects.items.pong4x.name",
      "description": "projects.items.pong4x.description",
      "company": "projects.companies.independentProject",
      "role": "projects.roles.leadEngineerGameDesigner",
    },
    "year": 2014,
    "platforms": "Desktop",
    "stack": "Processing 3,Game Design,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/pong-4x/pong4x_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/pong-4x/pong4x_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/pong-4x/pong4x_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097689/Pong-4X",
    "githubUrl": "https://github.com/jezzlucena/pong_4x",
    "liveDemoUrl": "https://demos.jezzlucena.com/Pong_4X"
  },
  "bandip": {
    "i18nKeys": {
      "name": "projects.items.bandip.name",
      "description": "projects.items.bandip.description",
      "company": "projects.companies.hxd",
      "role": "projects.roles.fullStack",
    },
    "year": 2013,
    "platforms": "Samsung SmartTV OS,LG SmartTV OS,Web",
    "stack": "JavaScript,XML,JSON,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "thumbImgUrl": "/img/portfolio/band-ip/band_thumb.jpg",
    "thumbVideoUrl": "/img/portfolio/band-ip/band_thumb.mp4",
    "thumbGifUrl": "/img/portfolio/band-ip/band_0.gif",
    "behanceUrl": "https://www.behance.net/gallery/74097179/Band-IP",
  }
}

export default PROJECTS;