<script>

export default {
  name: "WebPage",

}
</script>

<template>
  <div class="wrapeur">
    <div class="container-app">
      <router-view/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-app {
  width: 100%;
}

.wrapeur {
  display: flex;
}

</style>