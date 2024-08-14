<script>

import NavComponent from "@/components/Navigation/NavComponent.vue";

export default {
  name: "WebPage",
  components: {NavComponent},

}
</script>

<template>
  <div class="wrapeur">
    <div class="container-app">
      <router-view/>
    </div>
    <nav-component/>
  </div>
</template>

<style scoped lang="scss">
.container-app {
  width: 100%;
  height: 100vh;
}

.wrapeur {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

</style>