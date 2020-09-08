<template>
  <div class="projects">
    <div class="projects__banner">
      <v-container>
        <v-row align="center">
          <v-col lg="6" sm="12">
            <div class="projects__banner-text">
              <h1>Projects<span>.</span></h1>
              <div class="line"></div>
              <p class="mt-5">
                For me it’s important to build beautiful and useful things. I've
                devoted to making the web a little bit brighter.
              </p>
              <p>
                I have experience working with the best practices of HTML, CSS
                and JavaScript (ES7+). I like JS frameworks such as React and
                VueJS.
              </p>
            </div>
          </v-col>
          <v-col lg="6" sm="12" class="d-flex justify-end">
            <div class="projects__banner-img">
              <v-img src="../assets/Person.svg" alt="" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="projects__description">
      <v-container>
        <v-row align="center">
          <v-col lg="6" sm="12">
            <div class="projects__description-text">
              <h1>Considered development<span>.</span></h1>
              <div class="line"></div>
              <p>
                No two projects are the same and I take a pragmatic approach to
                each job I take on, focussing on delivering work that is as
                accessible and optimised as possible.
              </p>
              <p>
                I can help you identify the most appropriate technology for your
                project and, whilst I love a good framework, you can be sure
                that I will never use tech for tech's sake.
              </p>
            </div>
          </v-col>
          <v-col lg="6" sm="12" class="d-flex justify-end">
            <div class="projects__description-img">
              <img src="../assets/img_3.svg" alt="" />
            </div>
          </v-col>
        </v-row>
        <div class="projects__card mb-10">
          <div class="card" v-for="card in cards" :key="card.nombre">
            <img :src="require(`../assets/${card.img}.svg`)" :alt="card.name" />
            <h3 class="mt-10">{{ card.nombre }}<span>.</span></h3>
            <h5>{{ card.texto }}</h5>

            <button class="mt-5"><a :href="card.url">Visit page</a></button>
          </div>
        </div>
      </v-container>
    </div>
    <div class="projects__contact">
      <v-container>
        <v-row align="center" class="mt-5">
          <v-col lg="6" sm="12">
            <div class="projects__contact-text">
              <h1>Let's build something together<span>.</span></h1>
              <p class="mt-5">
                I strongly believe that designers and developers have a
                responsibility to make sure that what we are building does no
                harm and I try to be as ethical as I can in taking on projects.
              </p>
              <p>
                If your organization represents online gambling, payday loans,
                big tobacco, or mines and monetizes personal data, then I am
                probably not the best fit for your project.
              </p>
              <p>
                But, if you are looking for help building something that
                promotes sustainability, diversity, or generally aims to make a
                positive impact, then let’s talk 😉
              </p>
              <button>
                <a
                  href="mailto:simon.arenas98@gmail.com?subject=Let's build something together⚡"
                  >Contact me 🎉</a
                >
              </button>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          img: "icon-1",
          nombre: "Conoce México",
          texto:
            "Two things I love? Travel and Mexico. Actually, one of my goals is to open my own travel agency. So, I started building the website.",
          url: "https://conoce-mexico.netlify.app/",
        },
        {
          img: "icon-2",
          nombre: "Lux travel",
          texto:
            "Did I mention that I like to travel? Lux travel is a landing page to book a lux place to stay.",
          url: "https://conoce-mexico.netlify.app/",
        },
        {
          img: "icon-3",
          nombre: "Hogar dulce hogar",
          texto:
            "I believe that buy a house shouldn’t be that hard. Nobody likes all the boring paper work. Why not just order it online?",
          url: "https://conoce-mexico.netlify.app/",
        },
        {
          img: "icon-4",
          nombre: "Cryptos Exchange",
          texto:
            "This was my first VueJS project, it is a cryptos exchange app, connected to and API.",
          url: "https://conoce-mexico.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.projects {
  &__banner {
    background-color: #fff7f7;
    // height: 40rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      @include title($blue_dark, $pink);
    }
    p {
      @include paragraph($blue_dark);
      padding: 10px 0;
    }
    button {
      @include button($red, white);
    }
  }
  &__description {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      @include sub-title($blue_dark, $pink);
    }
    p {
      @include paragraph-small($blue_dark);
      padding: 20px 0 10px 0;
    }
  }
  &__card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    column-gap: 60px;
    row-gap: 30px;
    grid-template-rows: 2;
    img {
      margin: 0 auto;
      height: 200px;
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    color: $blue_dark;
    h3 {
      font-size: 1.5rem;

      span {
        font-size: 50px;
        color: $pink;
      }
    }
    button {
      @include border-button($pink_light, $pink, $pink);
    }
  }
  &__contact {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      @include title($blue_dark, $pink);
    }
    p {
      @include paragraph($blue_dark);
      padding: 10px 0;
    }
    button {
      @include button($pink, white);
    }
  }
}
.line {
  @include line($pink);
}
</style>