<template>
  <div class="home">
    <div class="home__banner">
      <v-container>
        <v-row align="center">
          <v-col lg="6" sm="12">
            <div class="home__banner-text">
              <h1>Hey, my name is Simón<span>.</span></h1>
              <p>I’m a creative developer and tech lover.</p>
              <button>Let's talk</button>
            </div>
          </v-col>
          <v-col lg="6" sm="12" class="d-flex justify-end">
            <div class="home__banner-img">
              <img src="../assets/avatar.svg" alt="" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="home__description">
      <v-container>
        <v-row align="center">
          <v-col lg="6" sm="12">
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
          <v-col lg="6" sm="12" class="d-flex justify-end">
            <div class="home__description-img">
              <img src="../assets/img_1.png" alt="" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="home__technologies">
      <v-container>
        <div class="home__technologies-text">
          <h1>Main Technologies<span>.</span></h1>
          <div class="line"></div>
          <p>
            I’m always learning new technologies and getting better on the most
            used ones.
          </p>
        </div>
        <Card />
      </v-container>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.home {
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
  }
  &__description {
    background-color: #ecf8ff;
    height: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

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

    height: 30rem;
    display: flex;
    justify-content: space-between;
    // align-items: center;

    h1 {
      @include sub-title($blue_dark, $blue_light);
    }
    p {
      @include paragraph-small($blue_dark);
      padding: 20px 0 10px 0;
    }
  }
}
.line {
  @include line($blue_light);
}
</style>
