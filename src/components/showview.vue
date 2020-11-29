<template>
  <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "showview",
  data() {
    return {
      items: [
        { src: require("../assets/jpg/S__87457797.jpg") },
        { src: require("../assets/jpg/S__86507535.jpg") },
        { src: require("../assets/jpg/S__86507538.jpg") },
        { src: require("../assets/jpg/S__87457798.jpg") },
        { src: require("../assets/jpg/S__86507532.jpg") },
      ],
    };
  },
};
</script>