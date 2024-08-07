<template>
  <section class="home">
    <canvas-decoration/>
    <div class="robot-case">
      <iframe class="robot" src='https://my.spline.design/untitled-08acb97b8d649c94ca99893e81d8832e/'></iframe>
      <div class="social-media-case">
        <div class="social-media">
          <Icon icon="akar-icons:instagram-fill" color="#ffff" width="32" height="32"/>
        </div>
        <h2>
          <router-link to="/about">About</router-link>
        </h2>
      </div>
    </div>
    <div class="title">
      <h1>
        Bienvenue sur le site de la french sphère
      </h1>
      <h2>
        le site la communauté francophone de Vrchat
      </h2>
      <div class="bouton">
        <router-link to="/about">En savoir plus</router-link>
      </div>
    </div>
  </section>
</template>
<script>
import CanvasDecoration from "@/components/Decoration/CanvasDecoration.vue";
import {Icon} from "@iconify/vue";

export default {
  name: 'HomeView',
  components: {
    Icon,
    CanvasDecoration
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .robot-case {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    position: relative;

    .robot {
      width: 100%;
      height: 100%;
      border: none;
      position: absolute;
    }
  }

  .social-media-case {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

  }

  .title {
    font-family: 'Roboto', sans-serif;
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    color: #ffff;
    text-align: center;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .bouton {
      a {
        padding: 0.5rem 1rem;
        background-color: #4267B2;
        border-radius: 0.5rem;
        color: #ffff;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .home {
    align-items: flex-end;
  }
}

@media (max-width: 480px) {
  .home {
    align-items: flex-end;
  }
}
</style>
