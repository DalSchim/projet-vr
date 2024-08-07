<script>
import LinkComponent from "@/components/Navigation/LinkComponent.vue";

export default {
  name: "NavComponent",
  components: {LinkComponent}

  /*nav Home about admin user */
}
</script>

<template>
  <div class="navbar">
    <div class="header-nav">

    </div>
    <nav>
      <ul>
        <li>
          <link-component to="/" icon="bx:bx-home" text="Home"/>

        </li>
        <li>
          <link-component to="/about" icon="bx:bx-info-circle" text="about"/>
        </li>
        <li>
          <link-component to="/admin" icon="bx:bx-user-circle" text="Notre équipe"/>
        </li>
        <li>
          <link-component to="/user" icon="bx:bx-user" text="profil"/>
        </li>
      </ul>
    </nav>
    <div class="footer-nav">
      <hr>
      <ul>
        <li>
          <link-component to="/settings" icon="bx:bx-cog"/>
        </li>
        <li>
          <link-component to="/profile" icon="bx:bx-user"/>
        </li>
        <li>
          <link-component to="/logout" icon="bx:bx-log-out"/>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped lang="scss">
.navbar {
  z-index: 5;
  background-color: #333;
  width: 70px;
  position: fixed;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  flex-direction: column;

  .header-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;

    h1 {
      color: #fff;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }

  nav {
    display: flex;
    flex-direction: column;

    ul {
      display: flex;
      flex-direction: column;
      padding: 10px;
      list-style-type: none;
      gap: 8px;

      li {
        margin: 0 10px;
      }
    }
  }

  .footer-nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    padding: 10px;
    width: 100%;
    hr {
      width: 100%;
      border: 1px solid #fff;
    }

    ul {
      display: flex;
      flex-direction: column;
      padding: 10px;
      list-style-type: none;
      gap: 8px;
    }
  }
}


</style>