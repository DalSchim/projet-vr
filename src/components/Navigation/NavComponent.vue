<script>
import LinkComponent from "@/components/Navigation/LinkComponent.vue";
import {Icon} from "@iconify/vue";

export default {
  name: "NavComponent",
  components: {Icon, LinkComponent}

  /*nav Home about admin user */
}
</script>

<template>
  <div class="navbar">
    <div class="header-nav">
      <img src="@/assets/logo.png" alt="logo">
      <hr>
    </div>
    <nav>
      <ul>
        <LinkComponent/>
      </ul>
    </nav>
    <div class="footer-nav">
      <hr>
      <ul>
        <li>
          <router-link to="/parametter">
            <Icon icon="eos-icons:rotating-gear"/>
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <Icon icon="bx:bx-log-out"/>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped lang="scss">
.navbar {
  margin-left:16px ;
  z-index: 1000;
  position: fixed;
  top: 32px;
  display: flex;
  width: 70px;
  height: 90vh;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.50);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);

  .header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius:90px ;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }

  nav {
    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }

  hr {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.84);
  }
  .footer-nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;

    gap: 5px;

    ul {
      display: flex;
      gap: 5px;
      flex-direction: column;
      margin-bottom: 32px;
      li {
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #2A3138;
          color: #ffff;
          transition: all 0.5s;
          &:hover {
            background: #2A3138;
            color: #ffff;
            border-radius: 16px;
          }
        }
      }
    }
  }
}
</style>