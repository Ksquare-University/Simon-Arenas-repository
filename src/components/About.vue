<template>
  <div class="about">
    <div class="about__banner">
      <v-container>
        <v-row align="center">
          <v-col lg="6" sm="12">
            <div class="about__banner-text">
              <h1>About me<span>.</span></h1>
              <div class="line"></div>
              <p class="mt-5">
                I am a developer, designer, and
                <span style=" text-decoration: line-through;">boy scout</span>
                💚. I was born in Venezuela, I studied Software Development
                Engineer in Tecmilenio University, but I’ve always thought that
                tech advance so quickly, so we should not stop learning. I am
                always learning new things, not just tech things, but improving
                my soft skills and trying to be a better human every day.
              </p>
              <p>
                I can not resume my life in a paper or a website, but I will
                share to you some of my hobbies, because we are friends 😊
              </p>
            </div>
          </v-col>
          <v-col lg="6" sm="12" class="center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="about__banner-img" v-on="on" v-bind="attrs">
                  <v-img src="../assets/me.png" alt="" />
                </div>
              </template>
              <span>This is me again</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="about__description">
      <v-container>
        <v-row align="center" class="mt-5">
          <v-col lg="6" sm="12">
            <div class="about__description-text">
              <h1>Kind of Boy Scout<span>.</span></h1>
              <div class="line"></div>
              <p>
                When other people see me using my uniform, they think I am a Boy
                scout. But I am not. I am part of the Seventh-day Adventist
                Church, there we have a club where we grow physically, mentally,
                and more important spiritually.
              </p>
              <p>
                So I love going to camps, see the constellations and stars,
                build campfires and more. Also, we have the opportunity to help
                people in need through very special social programs.
              </p>
            </div>
          </v-col>
          <v-col lg="6" sm="12" class="d-flex justify-end center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="about__description-img" v-on="on" v-bind="attrs">
                  <v-img src="../assets/family.svg" alt="" />
                </div>
              </template>
              <span>My lovely family</span>
            </v-tooltip>
          </v-col>
          <v-row align="center" class="mt-5">
            <v-col>
              <div class="about__description-text">
                <h1>Photography<span>.</span></h1>
                <div class="line"></div>
                <p>
                  Outside of my work I like to spend as much time as I can away
                  from my laptop, travelling and getting out and about with my
                  camera. I shoot with a Nikon D3200 and a 50mm lens, and
                  sometimes just my phone.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </div>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col v-for="n in 7" :key="n" class="d-flex child-flex" cols="6">
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="require(`@/assets/${n}.png`)"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <div class="about__description">
      <v-container>
        <v-row align="center" class="mt-5">
          <v-row align="center" class="mt-5">
            <v-col>
              <div class="about__description-text">
                <h1>Friends<span>.</span></h1>
                <div class="line"></div>
                <p>
                  I love the quote <i>“It’s not the place, it’s the people”</i>.
                  I am so grateful for the amazing people I have in my life.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </div>
    <v-row class="pb-10">
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col v-for="n in 4" :key="n" class="d-flex child-flex" cols="6">
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="require(`@/assets/1${n}.png`)"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.about {
  &__banner {
    background-color: #f7f8f9;
    height: 40rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: $bp-small) {
      height: auto;
    }

    h1 {
      @include title($green, $blue_light);
    }
    p {
      @include paragraph-small($green);
      padding: 10px 0;
    }
  }
  &__description {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: $bp-small) {
      padding-top: 30px;
    }

    h1 {
      @include sub-title($green, $blue_light);
    }
    p {
      @include paragraph-small($green);
      padding: 20px 0 10px 0;
    }
  }
}
.line {
  @include line($blue_light);
}
</style>
