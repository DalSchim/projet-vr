<script>
import {Icon} from "@iconify/vue";

export default {
  name: "LinkComponent",
  components: {Icon},
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  }
}
</script>

<template>
  <router-link :to="to">
    <li>
      <div class="link">
        <icon :icon="icon"/>
        <span>{{ text }}</span>
      </div>
    </li>
  </router-link>
</template>

<style scoped lang="scss">
//si je passe ma sourie sur le lien celui si c'étant pour afficher le text
a {
  text-decoration: none;
  color: white;
}
.link {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 32px;
  height: 32px;
  overflow: hidden;
  transition: width 0.5s;
  background: #2A3138;
  color: #ffff;
  border-radius: 64px;
  span {
    display: none;
  }
}

.link:hover {
  left: 50%;
  border-radius: 16px;
  border: white 2px solid;
  padding: 8px 16px;
  width: 180px;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
  }
}

@media screen and (max-width: 910px) {
  .link {
    left: 50%;
    border-radius: 16px;
    border: white 2px solid;
    padding: 8px 16px;
    width: 200px;
    justify-content: space-between;
    align-items: center;
    span {
      display: block;
    }
  }
}


</style>