<template>
  <div>
    <nav
      class="navbar"
      :style="[
        currentRouteName == 'home'
          ? { backgroundColor: '#ecf8ff' }
          : currentRouteName == 'about'
          ? { backgroundColor: '#F7F8F9' }
          : currentRouteName == 'projects'
          ? { backgroundColor: '#FFF7F7' }
          : { backgroundColor: '#ecf8ff' },
      ]"
    >
      <div class="navbar__container">
        <div class="navbar__logo">
          <router-link to="/"
            ><img
              src="../assets/logo.png"
              alt="logo"
              width="200"
              :style="currentRouteName == 'projects' ? styleObject : null"
          /></router-link>
        </div>
        <div class="navbar__links">
          <router-link tag="li" to="/about">About</router-link>
          <router-link tag="li" to="/projects">Projects</router-link>
          <router-link tag="li" to="./" v-scroll-to="'#main-technologies'"
            >Technologies</router-link
          >
          <li>
            <a
              href="mailto:simon.arenas98@gmail.com?subject=Let's build something together⚡"
              >Contact me</a
            >
          </li>
        </div>
      </div>
    </nav>
    <div class="menu-mobile">
      <v-app-bar
        class="navbar"
        :style="[
          currentRouteName == 'home'
            ? { backgroundColor: '#ecf8ff' }
            : currentRouteName == 'about'
            ? { backgroundColor: '#F7F8F9' }
            : currentRouteName == 'projects'
            ? { backgroundColor: '#FFF7F7' }
            : { backgroundColor: '#ecf8ff' },
        ]"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title
          ><div class="navbar__logo">
            <router-link to="/"
              ><img
                src="../assets/logo.png"
                alt="logo"
                width="200"
                :style="currentRouteName == 'projects' ? styleObject : null"
            /></router-link></div
        ></v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute top temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title
                ><router-link to="/about" class="links">About</router-link>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <router-link to="/projects" class="links">Projects</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link
                  to="./"
                  v-scroll-to="'#main-technologies'"
                  class="links"
                  >Technologies</router-link
                >
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <a
                  href="mailto:simon.arenas98@gmail.com?subject=Let's build something together⚡"
                  class="links"
                  >Contact me</a
                >
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: { filter: "saturate(0%)" },
      drawer: false,
      group: null,
    };
  },

  computed: {
    currentRouteName() {
      return this.$route.name.toLowerCase();
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";

.menu-mobile {
  display: none;

  @media screen and (max-width: $bp-small) {
    display: block;
  }
}
.links {
  text-decoration: none;
}
.navbar {
  font-family: "Montserrat", sans-serif;
  padding: 10px 40px;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;

    @media screen and (max-width: $bp-small) {
      display: none;
    }
  }

  img {
    display: block;
  }

  li {
    list-style: none;
  }
  &__links {
    display: flex;
    li {
      padding: 0 25px;
      color: $blue_dark;
      font-weight: 500;
      &:hover {
        cursor: pointer;
      }
      a {
        color: $blue_dark;
        text-decoration: none;
      }
    }
    @media screen and (max-width: $bp-small) {
      margin: 20px 0;
    }
  }
}
.hola {
  border: 2px solid red;
}
</style>
