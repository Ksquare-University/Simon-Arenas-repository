<template>
  <section class="cards-mine">
    <div
      v-for="card in cards"
      :key="card.name"
      :style="[{ color: card.color }, { background: card.colorBg }]"
      class="card-mine"
    >
      <img :src="require(`../assets/${card.img}.png`)" :alt="card.name" />
      <div class="card-mine__title">
        <h1>{{ card.name }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          name: "HTML",
          img: "html",
          color: "#E64C18",
          colorBg: "#F3E3DE",
        },
        {
          name: "CSS",
          img: "css",
          color: "#006BC0",
          colorBg: "#D9E8EF",
        },
        {
          name: "JavaScript",
          img: "js",
          color: "#E4BA42",
          colorBg: "#FFF6DC",
        },
        {
          name: "React",
          img: "react",
          color: "#5ADAFD",
          colorBg: "#DBF7FF",
        },
        {
          name: "Vue",
          img: "vue",
          color: "#41B883",
          colorBg: "#CAEFDF",
        },
        {
          name: "Git\nGithub",
          img: "git",
          color: "#222123",
          colorBg: "#EEEEEE",
        },
        {
          name: "Sass",
          img: "sass",
          color: "#CD6699",
          colorBg: "#FEF0F7",
        },
        {
          name: "Node JS",
          img: "node",
          color: "#6DA75D",
          colorBg: "#EAFEE5",
        },
        {
          name: "Ionic",
          img: "ionic",
          color: "#478AFF",
          colorBg: "#EFF5FF",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.cards-mine {
  margin-top: 40px;
  max-width: 1000px;
  margin: 0 auto;
  h1 {
    @include card-title;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  justify-content: center;
  column-gap: 30px;
  row-gap: 40px;
}
.card-mine {
  border-radius: 15px;
  text-align: center;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0 10px 0;
  transition: all 0.4s;
  &:hover {
    transform: translateY(-10px);
    -webkit-box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.109);
    box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.109);
  }

  img {
    // width: 70px;
    height: 70px;
    margin: 0 auto;
  }
}
</style>
