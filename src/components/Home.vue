<template>
  <section class="home">
    <div class="home__banner">
      <v-container>
        <v-row align="center">
          <v-col md="6" xs="12">
            <div class="home__banner-text">
              <h1>Hey, my name is Simón<span>.</span></h1>
              <p>I’m a creative developer and tech lover.</p>
              <button>
                <a
                  href="mailto:simon.arenas98@gmail.com?subject=Let's build something together⚡"
                  >Let's talk</a
                >
              </button>
            </div>
          </v-col>
          <v-col md="6" xs="12" class="center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="home__banner-img" v-on="on" v-bind="attrs">
                  <img src="../assets/me.png" alt="" />
                </div>
              </template>
              <span>This is me</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <section class="home__description pt-16">
      <v-container>
        <v-row align="center">
          <v-col md="6" xs="12">
            <div class="home__description-text">
              <h1>Hello, nice to meet you<span>.</span></h1>
              <div class="line"></div>
              <p>
                I’m a frontend developer and UI designer who has building
                beautiful things for web and app development since 2019. I
                specialise in accessibility, performance and usability without
                sacrificing creativity.
              </p>
              <p><strong>Current location:</strong> Villahermosa, MX.</p>
            </div>
          </v-col>
          <v-col md="6" xs="12" class="center">
            <div class="home__description-img">
              <img src="../assets/img_1.png" alt="" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="home__technologies">
      <v-container>
        <div class="home__technologies-text" id="main-technologies">
          <h1>Main Technologies<span>.</span></h1>
          <div class="line"></div>
          <p>
            I’m always learning new technologies and getting better on the most
            used ones.
          </p>
        </div>
      </v-container>
    </section>

    <Card />

    <section class="home__projects">
      <v-container>
        <div class="home__projects-text">
          <h1>Projects<span>.</span></h1>
          <div class="line"></div>
          <v-row>
            <v-col md="6" xs="12">
              <p>
                I know you want to see more.
              </p>

              <router-link class="home__projects-link" to="/projects"
                ><p>👉🏻 Visit my project page.</p></router-link
              >
            </v-col>
            <!-- <v-spacer></v-spacer> -->
            <v-col md="6" xs="12" class="d-flex justify-end align-center">
              <button>
                <router-link to="/projects">More projects 👀</router-link>
              </button>
            </v-col>
          </v-row>
          <div class="home__projects-cards">
            <a
              href="https://conoce-mexico.netlify.app/"
              class="home__projects-link"
            >
              <div id="project-1" class="mx-5">
                <div class="project-title pl-3"><h4>Conoce México</h4></div>
                <div class="project-img  ">
                  <img src="../assets/project-1.png" alt="" class="hvr-sink" />
                </div>
                <div class="project-demo">
                  <a href="https://conoce-mexico.netlify.app/" target="_blank"
                    >View demo</a
                  >
                </div>
              </div>
            </a>
            <a
              href="https://cryptos-app.netlify.app/"
              class="home__projects-link"
            >
              <div id="project-2" class="mx-5">
                <div class="project-title pl-3"><h4>Cryptos Exchange</h4></div>
                <div class="project-img ">
                  <img src="../assets/project-2.png" alt="" class="hvr-sink" />
                </div>
                <div class="project-demo">
                  <a href="https://cryptos-app.netlify.app/" target="_blank"
                    >View demo</a
                  >
                </div>
              </div>
            </a>
          </div>
          <v-row class="home__cta">
            <v-container>
              <v-row align="center">
                <v-col md="6" xs="12">
                  <div class="home__banner-text pl-5">
                    <h1>Let’s build something together</h1>
                    <button class="mt-10">
                      <a
                        href="mailto:simon.arenas98@gmail.com?subject=Let's build something together⚡"
                        >Let's talk</a
                      >
                    </button>
                  </div>
                </v-col>
                <v-col md="6" xs="12" class="center">
                  <div class="home__banner-img">
                    <img src="../assets/img_2.svg" alt="" />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
          <div class="home__contact pb-16">
            <h1>Stay tuned</h1>
            <p>simon.arenas98@gmail.com</p>
            <div class="home__contact-social">
              <a href="https://www.instagram.com/s.mon98/" target="_blank">
                <img src="../assets/insta.svg" alt="" class="hvr-bob" />
              </a>
              <a href="https://twitter.com/lsimon98" target="_blank">
                <img src="../assets/twitter.svg" alt="" class="hvr-bob" />
              </a>
              <a
                href="https://www.linkedin.com/in/simon-arenas/"
                target="_blank"
              >
                <img src="../assets/linkedin.svg" alt="" class="hvr-bob" />
              </a>
              <a href="https://github.com/SimonArenas" target="_blank">
                <img src="../assets/github.svg" alt="" class="hvr-bob" />
              </a>
            </div>
          </div>
        </div>
      </v-container>
    </section>
  </section>
</template>

<script>
import Card from "./Card.vue";
export default {
  title: "Simón Arenas - web developer",

  components: {
    Card,
  },

  mounted() {
    var aqui = this.$router.currentRoute.hash.replace("#", "");
    if (aqui)
      this.$nextTick(() =>
        window.document.getElementById(aqui).scrollIntoView()
      );
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.home {
  width: 100%;
  &__banner {
    background-color: #ecf8ff;
    height: 40rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      @include title($blue_dark, $blue_light);
    }
    p {
      @include paragraph($blue_dark);
      padding: 10px 0;
    }
    button {
      @include button($red, white);
    }
    &-img {
      @media screen and (max-width: $bp-small) {
        width: 200px;
        img {
          width: 100%;
        }
      }
    }
  }
  &__description {
    background-color: #ecf8ff;
    // height: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: $bp-small) {
      padding-top: 30px;
    }

    h1 {
      @include sub-title($blue_dark, $blue_light);
    }
    p {
      @include paragraph-small($blue_dark);
      padding: 20px 0 10px 0;
    }
  }
  &__technologies {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    h1 {
      @include sub-title($blue_dark, $blue_light);
    }
    p {
      @include paragraph-small($blue_dark);
      padding: 20px 0 10px 0;
    }
  }
  &__projects {
    margin-top: 30px;

    // height: 30rem;
    display: flex;
    justify-content: space-between;
    &-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      row-gap: 100px;
    }

    // @media screen and (max-width: $bp-large) {
    //   flex-direction: column;
    // }
    &-link {
      text-decoration: none;
    }

    h1 {
      @include sub-title($blue_dark, $blue_light);
    }
    p {
      @include paragraph-small($blue_dark);
      margin-top: 20px;
    }
    button {
      @include button($red, white);
      font-size: 20px;
    }
  }
  &__cta {
    margin-top: 100px;
    background-color: #ecf8ff;
    border-radius: 15px;
  }
  &__contact {
    margin-top: 50px;
    text-align: center;
    &-social {
      img {
        width: 50px;
        margin: 10px 10px 20px 10px;
      }
    }
  }
}
.line {
  @include line($blue_light);
}
#project-1 {
  background-color: #f8f4f3;
  border-radius: 10px;
  position: relative;
  height: 400px;
  @media screen and (max-width: $bp-small) {
    width: 390px;
  }
  img {
    position: absolute;
    bottom: -80px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: $bp-small) {
      width: 400px;
    }
  }
  .project-demo {
    position: absolute;
    bottom: -30px;
    right: 0;
    a {
      font-family: "Goldplay";

      color: #f05859;
      text-decoration: none;
    }
  }
}
#project-2 {
  background-color: #eafee5;
  border-radius: 10px;
  height: 400px;

  position: relative;
  @media screen and (max-width: $bp-small) {
    width: 390px;
  }
  img {
    width: auto; /* width of container */
    height: 80%; /* height of container */
    object-fit: cover;
    object-position: 20% 10px;
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
  .project-demo {
    position: absolute;
    bottom: -30px;
    right: 0;
    a {
      font-family: "Goldplay";

      color: #41a46a;
      text-decoration: none;
    }
  }
}
</style>
