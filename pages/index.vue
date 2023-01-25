<script lang="ts">
import { defineComponent, onMounted, computed, ref } from "vue"
import me from "@client/assets/images/me.jpg"
import turn from "@client/assets/videos/turn.mp4"
import typing from "@client/assets/images/typing.gif"
import { useMosaic } from "@client/plugins/msort"
import { useTypeout } from "@client/includes/typeout"
import { useTransition } from "@client/plugins/transition"

//Interest Images
import avengers from "@client/assets/images/interests/avengers.gif"
import cooking from "@client/assets/images/interests/cooking.gif"
import js from "@client/assets/images/interests/js.gif"
import sasuke from "@client/assets/images/interests/sasuke.gif"
import squidgames from "@client/assets/images/interests/squidgames.gif"
import sushi from "@client/assets/images/interests/sushi.gif"

//User Images
import me2 from "@client/assets/images/me2.jpg"
import jeff from "@client/assets/images/jeff.jpg"

//Code Images
import aws from "@client/assets/images/codeimages/aws.png"
import heroku from "@client/assets/images/codeimages/heroku.png"
import node from "@client/assets/images/codeimages/node.png"
import trio from "@client/assets/images/codeimages/trio.png"
import typeorm from "@client/assets/images/codeimages/typeorm.png"
import vuejs from "@client/assets/images/codeimages/vuejs.png"

//Owl Images
import owl1 from "@client/assets/images/owls/1.jpg"
import owl2 from "@client/assets/images/owls/2.jpg"
import owl3 from "@client/assets/images/owls/3.jpg"
import owl4 from "@client/assets/images/owls/4.jpg"
import date from "@client/plugins/date"

export default defineComponent({
  name: "IndexPage",
})
</script>

<script setup lang="ts">
const typeout = useTypeout()
const transition = useTransition(".public-project")
const interest = useTransition(".interest")
const cards = useTransition(".public-user-card")
const contact = useTransition(".contact")
const submitted = ref(false)

const codeImages = [
  {
    src: aws,
    alt: "AWS",
  },
  {
    src: heroku,
    alt: "Heroku",
  },
  {
    src: node,
    alt: "Node",
  },
  {
    src: trio,
    alt: "Trio",
  },
  {
    src: typeorm,
    alt: "TypeORM",
  },
  {
    src: vuejs,
    alt: "VueJS",
  },
]

const owls = [
  {
    src: owl1,
    alt: "Owl 1",
  },
  {
    src: owl2,
    alt: "Owl 2",
  },
  {
    src: owl3,
    alt: "Owl 3",
  },
  {
    src: owl4,
    alt: "Owl 4",
  },
]

function loopTimer() {
  typeout.start(".typeout-text", 100)
  setTimeout(loopTimer, 1900)
}

function onScroll() {
  transition.onScroll(".public-project", 1)
  interest.onScroll(".interest", 1)
  cards.onScroll(".public-user-card", 1)
  contact.onScroll(".contact", 1)
}

function submittedForm() {
  console.log("submitted")
  submitted.value = true
  setTimeout(() => (submitted.value = false), 3000)
}

const gallery = ref()
const interests = ref()

onMounted(() => {
  const mosaic = useMosaic(gallery.value)
  const inter = useMosaic(interests.value)

  mosaic.Sort(2, 3)
  inter.Sort(3, 4)

  setTimeout(() => {
    mosaic.Sort(2, 3, 7)
    inter.Sort(3, 4)
  }, 100)

  loopTimer()

  window.addEventListener("scroll", onScroll)

  window.addEventListener("load", () => {
    if (window.innerWidth < 800) {
      inter.Sort(2, 4)
    }
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth < 800) {
      inter.Sort(2, 4)
    }
  })
})

function getYears() {
  const birthdate = date("10/11/1996")

  const today = date()

  const diff = date.duration(date(today).diff(birthdate))

  return Math.floor(diff.asYears())
}

const year = date().get("year")
</script>

<template>
  <Page class="index-page" id="home">
    <div class="info">
      <div class="left">
        <h1>Makanaokeakua Edwards, {{ getYears() }}</h1>

        <h2>Software Engineer</h2>

        <span
          >Creating professional and insightful solutions to real world
          problems.</span
        >

        <div class="buttons">
          <PublicButton label="Explore" />

          <PublicNavigationLink
            to="https://github.com/MakanaMakesStuff"
            target="_blank"
          >
            <PublicButton icon="fa-brands fa-github" class="social" />
          </PublicNavigationLink>

          <PublicNavigationLink
            to="https://www.linkedin.com/in/makanaokeakua/"
            target="_blank"
          >
            <PublicButton icon="fa-brands fa-linkedin" class="social" />
          </PublicNavigationLink>
        </div>
      </div>

      <div class="right">
        <img :src="me" alt="Image of Makana Edwards" />
      </div>
    </div>

    <PublicSplashSection>
      <div class="middle">
        <img
          v-for="img of codeImages"
          :key="img.alt"
          :src="img.src"
          :alt="img.alt"
        />
      </div>
    </PublicSplashSection>

    <div class="projects-section">
      <h1 id="projects">Projects</h1>

      <PublicProject class="turn">
        <template #left>
          <h2>Turn is here!</h2>
          <span
            >Turn is a simple, yet difficult game. If you think you have what it
            takes, go download and give it a try. Good luck.</span
          >

          <PublicNavigationLink
            to="https://play.google.com/store/apps/details?id=com.Makri.Turn"
            target="_blank"
          >
            <PublicButton>
              <i class="fas fa-brain" />
              <span>Learn More</span>
            </PublicButton>
          </PublicNavigationLink>
        </template>

        <template #right>
          <div class="video-container">
            <video
              :src="turn"
              autoplay
              loop
              muted
              playsinline
              preload="metadata"
            />
          </div>
        </template>
      </PublicProject>

      <PublicProject class="owls reversed">
        <template #left>
          <h2>Let's sort things owlt</h2>
          <span
            >Msort.js makes sorting images in a Mosiac style easy and fun. With
            just a one line of code you can make beautiful galleries!</span
          >

          <PublicNavigationLink
            to="https://github.com/MakanaMakesStuff/msort"
            target="_blank"
          >
            <PublicButton>
              <i class="fas fa-brain" />
              <span>Learn More</span>
            </PublicButton>
          </PublicNavigationLink>
        </template>

        <template #right>
          <div class="gallery" ref="gallery">
            <img v-for="owl of owls" :src="owl.src" :alt="owl.alt" />
          </div>
        </template>
      </PublicProject>

      <PublicProject class="minecraft">
        <template #left>
          <h2>Canvas Minecraft 👉</h2>
          <span
            >A simple Vue component that takes coordinates from a specified
            object and maps interact-able areas to the inner image(Modified to
            look minecrafty)</span
          >

          <PublicNavigationLink
            to="https://github.com/MakanaMakesStuff/Canvas-Image-Map"
            target="_blank"
          >
            <PublicButton>
              <i class="fas fa-brain" />
              <span>Learn More</span>
            </PublicButton>
          </PublicNavigationLink>
        </template>

        <template #right>
          <PublicImageMap />
        </template>
      </PublicProject>

      <PublicProject class="typeout reversed">
        <template #left>
          <h2 class="typeout-text">Typeout JS 😁</h2>
          <span
            >Typeout.js will let iterate through any text and type it out in
            your browser. Just a simple plugin to give life to your text.</span
          >

          <PublicNavigationLink
            to="https://typeoutjs.herokuapp.com/about/"
            target="_blank"
          >
            <PublicButton>
              <i class="fas fa-brain" />
              <span>Learn More</span>
            </PublicButton>
          </PublicNavigationLink>
        </template>

        <template #right>
          <img :src="typing" alt="Gif of typing" />
        </template>
      </PublicProject>
    </div>

    <PublicSplashSection
      :top="{
        fill: '#ffffff',
        fillOpacity: 1,
        coordinates:
          'M0,64L20,80C40,96,80,128,120,117.3C160,107,200,53,240,74.7C280,96,320,192,360,229.3C400,267,440,245,480,218.7C520,192,560,160,600,176C640,192,680,256,720,245.3C760,235,800,149,840,117.3C880,85,920,107,960,138.7C1000,171,1040,213,1080,218.7C1120,224,1160,192,1200,165.3C1240,139,1280,117,1320,117.3C1360,117,1400,139,1420,149.3L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z',
      }"
      class="interests-splash"
    >
      <div class="container">
        <h1 id="about">
          Who am I? <br />

          <span style="font-size: 0.7em; color: rgb(132, 88, 179)">
            Well here are some gifs that describe me 😊
          </span>
        </h1>

        <div class="interests" ref="interests">
          <img :src="sasuke" alt="Gif of sasuke smiling" />

          <img :src="avengers" alt="Avengers Assemble Scene from Endgame" />

          <img :src="js" alt="I Love Javascript Gif" />

          <img :src="sushi" alt="Anime gif of sushi being eaten" />

          <img
            :src="cooking"
            alt="Cooking scene from The Princess and the Frog"
          />

          <img
            :src="squidgames"
            alt="Clever candy licking scene from Squid Games Netflix series"
          />
        </div>

        <span style="color: rgb(132, 88, 179)"> Enough said. </span>

        <h1>Cool, but what do people actually think? 😒</h1>

        <PublicUserCard :src="me2">
          <p>Notme Mcgee - <span>Software Engineer at GoogFace</span></p>
          <blockquote>
            "Mr Edwards is an amazing character. He saved us many hours of work.
            God bless him."
          </blockquote>
        </PublicUserCard>

        <PublicUserCard :src="jeff">
          <p>Jeff Bezos - <span>Amazon's dad</span></p>
          <blockquote>
            "Masterful use of stackoverflow. This guy's going places!"
          </blockquote>
        </PublicUserCard>
      </div>
    </PublicSplashSection>

    <div class="contact">
      <h1 id="contact">Get in touch</h1>

      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd09C_4PLdH5tInHW0MfMxA1j8cCYsBpSQ5DNljYPxYfmAdZQ/formResponse?"
        target="hidden_iframe"
        method="POST"
        class="contact-form shadow"
        autocomplete="on"
        @submit="submittedForm"
      >
        <h2 style="color: green" :class="{ submitted }">
          Email sent Successfully!
        </h2>

        <input
          type="text"
          name="entry.504636968"
          id="entry.504636968"
          placeholder="Your name"
          required
        />

        <input
          type="text"
          name="entry.776231149"
          id="entry.776231149"
          placeholder="abc@gmail.com"
          required
        />

        <input
          type="text"
          name="entry.1661813233"
          id="entry.1661813233"
          placeholder="Subject"
          required
        />

        <textarea
          name="entry.1974294052"
          id="entry.1974294052"
          cols="30"
          rows="5"
          placeholder="Type your message"
          required
        ></textarea>

        <PublicButton type="submit">
          <i class="fas fa-paper-plane" />
          <span>Send</span>
        </PublicButton>
      </form>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style="display: none"
      ></iframe>
    </div>

    <PublicSplashSection
      :top="{
        fill: '#ffffff',
        fillOpacity: 1,
        coordinates:
          'M0,192L14.1,213.3C28.2,235,56,277,85,266.7C112.9,256,141,192,169,186.7C197.6,181,226,235,254,240C282.4,245,311,203,339,181.3C367.1,160,395,160,424,170.7C451.8,181,480,203,508,218.7C536.5,235,565,245,593,234.7C621.2,224,649,192,678,192C705.9,192,734,224,762,229.3C790.6,235,819,213,847,192C875.3,171,904,149,932,133.3C960,117,988,107,1016,133.3C1044.7,160,1073,224,1101,213.3C1129.4,203,1158,117,1186,106.7C1214.1,96,1242,160,1271,186.7C1298.8,213,1327,203,1355,202.7C1383.5,203,1412,213,1426,218.7L1440,224L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z',
      }"
      class="no-bottom footer"
    >
      <div class="middle">
        <div class="overlay" />

        <div class="footer-options">
          <div class="left">
            <PublicNavigationLink to="#home">
              <i class="fas fa-arrow-up" />
            </PublicNavigationLink>
            <PublicNavigationLink to="#about" label="About" />
            <PublicNavigationLink to="#contact" label="Contact" />
          </div>
          <div class="right">
            <PublicNavigationLink
              to="https://github.com/MakanaMakesStuff"
              target="_blank"
            >
              <i class="fa-brands fa-github" />
            </PublicNavigationLink>

            <PublicNavigationLink
              to="https://www.linkedin.com/in/makanaokeakua/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin" />
            </PublicNavigationLink>
          </div>
        </div>

        <span
          >copyright @ {{ year }} Makanaokeakua Edwards All rights
          reserved</span
        >
      </div>
    </PublicSplashSection>
  </Page>
</template>

<style lang="scss">
.index-page {
  width: 100%;
  margin: auto;

  .info {
    @include flex(row, space-around, center);
    gap: 2em;
    width: 100%;
    height: 100%;
    max-height: max-content;
    max-width: 1000px;
    margin: auto;
    margin-top: 10em;
    position: relative;
    padding: 0 2em;

    .left {
      @include flex(column);
      gap: 1em;
      height: 100%;

      h1 {
        font-weight: 400;
      }

      h1,
      h2 {
        margin: 0;
      }

      h2 {
        font-weight: 400;
      }

      h2,
      span {
        color: white;
      }

      .buttons {
        @include flex(row);
        gap: 0.5em;
        height: 50px;

        .public-navigation-link {
          height: 100%;
          aspect-ratio: 1;
        }

        .public-button {
          height: 100%;

          &:not(.social) {
            background-color: rgba(40, 40, 40, 1);
            padding: 1em 2em;

            &:hover {
              background-color: rgba(100, 100, 100, 1);
            }
          }

          &.social {
            box-sizing: border-box;
            font-size: 1.2em;
            padding: 0;
            aspect-ratio: 1;
            background-color: white;
            color: rgba(40, 40, 40, 1);

            &:hover {
              background-color: rgba(40, 40, 40, 1);
              color: white;
            }
          }
        }
      }
    }

    .right {
      height: 100%;
      width: max-content;
      display: flex;

      img {
        height: 100%;
        max-height: 200px;
        border-radius: 5px;
        box-shadow: -3px -3px 15px 8px rgba(0, 0, 0, 0.15);
      }
    }

    @include mobile(900px) {
      margin: 5em 0;
      flex-direction: column-reverse;
    }
  }

  .projects-section {
    @include flex(column, center, center);
    gap: 7em;
    width: 100%;
    height: 100%;
    max-height: max-content;
    max-width: 1300px;
    margin: auto;
    position: relative;

    h1 {
      color: white;
    }

    .public-project {
      gap: 4em;

      .left {
        @include flex(column);
        gap: 1.5em;

        h2 {
          margin: 0;
          color: white;
        }

        .public-navigation-link {
          text-decoration: none;

          .public-button {
            @include flex(row, center, center);
            gap: 0.75em;
            background-color: rgba(40, 40, 40, 1);
            width: max-content;

            &:hover {
              background-color: rgba(100, 100, 100, 1);
            }

            * {
              white-space: nowrap;
            }
          }
        }
      }

      .right {
        .video-container {
          border-radius: 10px;
          box-shadow: -3px -3px 15px 2px rgba(0, 0, 0, 0.15);
          overflow: hidden;

          video {
            width: 100%;
            height: auto;
          }
        }
      }

      &.owls {
        .right {
          .gallery {
            width: 100%;
          }
        }
      }

      &.minecraft {
        .right {
          .public-image-map {
            box-shadow: -3px -3px 15px 2px rgba(0, 0, 0, 0.15);
          }
        }
      }

      &.typeout {
        .left {
          h2 {
            height: 30px;
          }
        }

        .right {
          img {
            width: 100%;
            border-radius: 5px;
            box-shadow: -3px -3px 15px 2px rgba(0, 0, 0, 0.15);
          }
        }
      }
    }

    @include mobile(900px) {
      gap: 3em;

      .public-project {
        flex-direction: column;
        gap: 1em;
        padding: 0 2em;

        .left,
        .right {
          width: 100%;
        }
      }
    }
  }

  .public-splash-section {
    .middle {
      @include flex(row, center, center);
      flex-wrap: wrap;
      gap: 2.5em;
      padding: 2em;
      background-color: white;

      img {
        width: 100%;
        max-width: 250px;
        height: auto;
      }

      @include mobile(500px) {
        img {
          max-width: unset;
          width: 50%;
        }
      }
    }

    &.interests-splash {
      .container {
        background-color: white;
        @include flex(column, center, center);
        gap: 5em;
        padding: 1em 2em;

        .interests {
          margin: 0 auto;
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .public-user-card {
          height: 175px;
          width: 100%;
          max-width: 700px;
          box-shadow: -3px -3px 15px 2px rgba(0, 0, 0, 0.15);
          padding: 1em;
          @include flex(row, flex-start, center);
          gap: 2em;
          border-radius: 5px;

          img {
            border-radius: 50%;
            height: 100%;
            width: auto;
            border: 4px solid rgb(132, 88, 179);
            padding: 3px;
          }

          .user-info {
            span {
              color: #dda0dd;
            }
          }

          @include mobile(550px) {
            flex-direction: column;
            height: max-content;
            gap: 3em;

            img {
              width: 50%;
              height: auto;
              aspect-ratio: 1;
            }

            .user-info {
              text-align: center;
            }
          }
        }
      }
    }

    &.footer {
      .middle {
        @include flex(column, center, center);
        gap: 4em;

        .overlay {
          width: 50px;
          height: 50px;
          background-color: rgb(132, 88, 179);
          -webkit-mask-image: url("../assets/images/logo.png");
          mask-image: url("../assets/images/logo.png");
          -webkit-mask-size: 100%;
          mask-size: 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-clip: border-box;
          mask-clip: border-box;
        }

        .footer-options {
          @include flex(row, center, center);
          width: 100%;

          .left {
            @include flex(column, flex-start, flex-end);
            border-right: 2px solid lightgray;
            width: 100%;
            max-width: 100px;
          }

          .right {
            @include flex(column, flex-start, flex-start);
            width: 100%;
            max-width: 100px;
          }

          .left,
          .right {
            padding: 2em;
            gap: 1em;

            * {
              text-decoration: none;
              color: rgba(40, 40, 40, 1);
            }
          }
        }
      }
    }
  }

  .contact {
    @include flex(column, center, center);
    gap: 5em;
    padding: 2em;

    h1 {
      color: white;
    }

    form {
      @include flex(column, center, center);
      gap: 1em;
      padding: 2em;
      border-radius: 5px;
      background-color: white;
      width: 100%;
      max-width: 400px;
      aspect-ratio: 0.8;
      box-shadow: -3px -3px 15px 2px rgba(0, 0, 0, 0.15);

      h2 {
        transition: all 0.5s ease-in-out;

        &:not(.submitted) {
          position: absolute;
          height: 0px;
          opacity: 0;
        }
        &.submitted {
          position: relative;
          height: 30px;
          opacity: 1;
        }
      }

      input,
      textarea {
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        border: none;
        border-bottom: 3px solid rgb(132, 88, 179);
        border-radius: 5px;
        box-shadow: -2px -2px 10px 2px rgba(0, 0, 0, 0.05);
        padding: 0.5em;
        min-height: 50px;
      }

      input {
        height: 50px;
      }

      textarea {
        height: 200px;
      }

      .public-button {
        @include flex(row, center, center);
        gap: 1em;
        width: max-content;
        padding: 1em 2em;
        background-color: rgba(40, 40, 40, 1);
        align-self: flex-start;

        &:hover {
          background-color: rgb(132, 88, 179);
        }
      }
    }
  }
}
</style>
<route>
meta:
  layout: default
</route>
