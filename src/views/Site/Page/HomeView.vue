<template>
  <section class="home">
    <canvas-decoration/>
    <div class="robot-case">
      <iframe src='https://my.spline.design/untitled-08acb97b8d649c94ca99893e81d8832e/' frameborder='0' width='100%' height='100%'></iframe>
    </div>
    <div class="title">
      <h1>
        Bienvenue sur le site de la french sphère
      </h1>
      <h2>
        Le site de la communauté francophone de Vrchat
      </h2>
      <div class="bouton">
        <router-link to="/about">En savoir plus</router-link>
      </div>
    </div>
  </section>
</template>
<script>
import CanvasDecoration from "@/components/Decoration/CanvasDecoration.vue";


export default {
  name: 'HomeView',
  components: {

    CanvasDecoration
  }
}
</script>

<style scoped lang="scss">


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .robot-case {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    iframe {
      border: none;
    }
  }

  .title {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    h1 {
      font-size: 2.5rem;
      font-weight: 300;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 300;
    }
    .bouton {
      margin-top: 20px;
      a {
        padding: 10px 20px;
        background: #426ebf;
        color: white;
        border-radius: 8px;
        text-decoration: none;
        transition: 0.3s;
        &:hover {
          background: #2e4b7f;
        }
      }
    }
  }
}
</style>
