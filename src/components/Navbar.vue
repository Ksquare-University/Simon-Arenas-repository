<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__logo">
        <router-link to="/"><img src="../assets/logo.png" alt="logo" width="200"/></router-link>
      </div>
      <div class="navbar__links">
        <router-link tag="li" to="/about">About</router-link>
        <router-link tag="li" to="/about">Projects</router-link>
        <router-link tag="li" to="/about">Contact me</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
.navbar {
  background-color: #ecf8ff;
  font-family: "Montserrat", sans-serif;
  padding: 10px 40px;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    
    margin: 0 auto;
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
    }
    
  }
}
</style>
