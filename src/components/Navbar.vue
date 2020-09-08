<template>
  <div
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
        <li>
          <a
            href="mailto:simon.arenas98@gmail.com?subject=Let's build something together⚡"
            >Contact me</a
          >
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: { filter: "saturate(0%)" },
    };
  },

  computed: {
    currentRouteName() {
      return this.$route.name.toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
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
      flex-direction: column;
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
