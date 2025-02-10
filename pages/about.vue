<script setup lang="ts">
const KEYWORDS = [
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "NuxtJS",
  "Python",
  "Django",
  "ES6",
  "HTML5",
  "CSS3",
  "Ruby on Rails",
  "Agile Software Development",
  "UX/UI Design",
  "RESTful APIs",
  "i18n"
];
const isCollapsed = ref(true);

const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
}
</script>

<template>
    <div class="content relative bg-white">
      <div class="w-[100%] max-w-[1024px] mx-auto p-[50px]">
        <div id="about" class="section about">
          <div class="aboutContainer">
            <div class="description">
              <a class="profilePicture Jezz" target="_blank" href="http://linkedin.com/in/jezzlucena"></a>
              <div class="profileName">Jezz Lucena</div>
              <div class="profileTitle">Full Stack Software Engineer</div>
              
              <Keywords label="Keywords" :keywords="KEYWORDS" />

              <div class="profileButtons">
                <Button external>Download Resumé (pdf)</Button>
                <a href="resource/JezzLucenaResume2020.pdf" target="_blank" class="button"></a>
              </div>
            </div>
          </div>
          <div class="textContainer relative" :class="{ collapsed: isCollapsed }">
            <p>Building magical end-user experiences is my true passion. I actively seek out new technologies, and stay up-to-date on the industry's most recent frameworks, languages and trends.</p>
            <p>With a Bachelor’s degree in Computer Engineering and a Master’s degree in Interactive Media &amp; Game Development, continued education has allowed me to stay ahead of the curve and deliver exceptional work to each employer I’ve worked for - both full-time and contract.</p>
            <p>My technical expertise includes cross-platform proficiency (Mac OS, Unix, Linux and Windows); expertise in 13 scripting/programming languages (including ES6, CSS3, HTML5, Phoenix/Elixir and PostgreSQL); and advanced knowledge of developer applications, tools, methodologies and best practices (including OOD, client/server architecture and self-test automation).</p>

            <div class="readMoreContainer">
              <Button class="button" @click="toggleCollapsed">{{ isCollapsed ? 'Read More' : 'Collapse' }}</Button>
            </div>
          </div>
          <div style="clear: both;"></div>
        </div>

        <div class="testimonials">
          <div class="title">Testimonials</div>

          <div class="container">
            <Testimonial href="https://www.linkedin.com/in/chrisebennett/">
              <template #quote>Working with Jezz was a pleasure. His creative, detail oriented approach was very valuable in the product creation process at Wonderschool. I found it rare and rewarding to work with engineer who could think about the full stack of development while also empathizing with the customers needs.</template>
              <template #author>Chris Bennet</template>
              <template #role>CEO at Wonderschool, Inc.</template>
              <template #connection>Chris was senior to Jezz at Wonderschool</template>
            </Testimonial>

            <Testimonial href="https://www.linkedin.com/in/klewwilliams/">
              <template #quote>Jezz and I studied together at Worcester Polytechnic Institute for our MS in Interactive Media and Game Development where we worked together on projects. Jezz is a phenomenal worker and a phenomenal personality to work with. He has a broad base of talents, particularly engineering, writing, design, and criticism, and is a truly deep thinker who is easy to collaborate on and passionate about positivity, authenticity, and morality in the work place. The best thing about Jezz as a worker is that he has true, raw talent that he's honed with practice and that he is deeply focused on making positive changes in his community and his industry with that talent and practice. He seeks to learn about others, to understand the theory behind his work, and to act beyond himself. This reflects WPI's motto, "Theory and Practice" which Jezz has truly exemplified in his academic and personal projects.</template>
              <template #author>Klew Williams</template>
              <template #role>UX Designer at Finalize, Inc.</template>
              <template #connection>Jezz and Klew were grad students together at Worcester Polytechnic Institute</template>
            </Testimonial>

            <Testimonial href="https://www.linkedin.com/in/chaima-jemmali-732a7655/">
              <template #quote>Jezz is not only an excellent programmer with technical skills covering multiple languages, platforms and engines, he is also a creative thinker and designer always looking for new ideas and projects. As an active learner, he is continuously taking on new challenges to harness his skills and acquire new ones.</template>
              <template #author>Chaima Jemmali</template>
              <template #role>PhD Researcher at Northeastern University</template>
              <template #connection>Jezz and Chaima were grad students together at Worcester Polytechnic Institute</template>
            </Testimonial>
          </div>
        </div>
		</div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  color: black;
  border-top: 1px solid white;

  .aboutContainer {
    .profilePicture {
      float: left;
      margin: 20px 40px 20px 0;
      height: 175px;
      width: 175px;
      background-image: url('~/assets/img/jezz_profile.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border: 5px solid black;
      border-radius: 50%;
    }

    .profileName {
      font-size: 24px;
      font-weight: bold;
      line-height: 24px;
      padding-top: 25px;
      margin-bottom: 10px;
      letter-spacing: 3px;
    }
    
    .profileTitle {
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 20px;
      letter-spacing: 2px;
    }

    .profileButtons {
      margin: 20px;
    }

    .keywords {
      font-family: opensans;
      letter-spacing: 2px;
      margin-right: 5px;
      font-size: 0;
      color: white;

      .label, .keyword {
        font-size: 14px;
        color: black;
      }

      .label {
        font-weight: bold;
      }

      .keyword {
        display: inline-block;
        white-space: nowrap;
        letter-spacing: 1px;
        margin-bottom: 6px;
        margin-right: 6px;
        border: 1px solid black;
        padding: 2px 10px;
      }
    }
  }

  .textContainer {
    max-height: 2000px;
    transition: 1s max-height ease;
    padding-bottom: 10px;

    &.collapsed {
      max-height: 100px;
      overflow: hidden;

      .readMoreContainer {
        background-image: linear-gradient(to bottom, transparent, white);
      }
    }

    p {
      margin-bottom: 20px;
      line-height: 28px;
    }

    .readMoreContainer {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100px;
      width: 100%;

      .button {
        position: absolute;
        bottom: 10px;
        right: 20px;
      }
    }
  }
}

.testimonials {
  margin: 50px auto;
  
  .title {
    font-family: myriad-boldcond;
    letter-spacing: 2px;
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    line-height: 70px;
    font-size: 22px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .container {
    max-width: 700px;
    margin: 0 auto;
  }
}
</style>