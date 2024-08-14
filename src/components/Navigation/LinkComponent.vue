<script>
import {Icon} from "@iconify/vue";

export default {
  name: "LinkComponent",
  components: {Icon},
  data() {
    return {
      link: [
        {icon: "bx:bx-home", text: "Home", to: "/"},
        {icon: "mdi:internet", text: "About", to: "/about"},
        {icon: "bx:bx-user", text: "Admin", to: "/nosadmin"},
        {icon: "", text: "User", to: "/nosmembre"},
      ]
    }
  },
}
</script>

<template>
  <li v-for="item in link" :key="item.text">
    <router-link :to="item.to" class="link">
      <Icon :icon="item.icon"/>
      <span>{{ item.text }}</span>
    </router-link>
  </li>
</template>

<style scoped lang="scss">
// si on passe la souris sur le lien on affiche en absolu le texte du lien a droite

.link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 16px;
  transition: 0.3s;
  position: relative;
  &:hover {
    background: rgba(255, 255, 255, 0.50);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
    span {
      display: block;
    }
  }
  span {
    display: none;
    position: absolute;
    color: white;
    left: 40px;
    background: rgba(66, 110, 191, 0.73);
    padding: 5px 10px;
    border-radius:8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
  }
}






</style>