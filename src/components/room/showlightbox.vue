<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        lg="3"
        sm="3"
        xs="12"
        v-for="(item, i) in items"
        :key="i"
      >
        <v-card @click="toggler = !toggler">
          <v-img :src="item"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <FsLightbox :toggler="toggler" :sources="items" />
  </div>
</template>
<script>
import FsLightbox from "fslightbox-vue";
export default {
  name: "Showlightbox",
  components: {
    FsLightbox,
  },
  data() {
    return {
      toggler: false,
    };
  },
  props: ["items"],
};
</script>