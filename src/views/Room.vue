<template>
  <div>
    <Showview />
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="3" sm="3" xs="12">
          <v-list dense>
            <v-list-item>
              <v-list-item-content>ROOM<br />房型介紹</v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list dense v-for="(item, i) in items" :key="i">
            <v-list-item :to="item.link">
              <v-list-item-content class="content">{{
                item.title
              }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" lg="9" sm="9" xs="12">
          <v-row>
            <v-col cols="12" lg="2" sm="2" xs="12">
              <h1>Room</h1>
              <h4>房間介紹</h4>
            </v-col>
            <v-col cols="12" lg="10" sm="10" xs="12">
              <VueBreadcrumbs />
            </v-col>
          </v-row>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Showview from "../components/showview.vue";
import VueBreadcrumbs from "../components/vuebreadcrumbs";

export default {
  data() {
    return {
      items: [
        { title: "標準雙人房", link: "/room/room1" },
        { title: "豪華雙人房(king)", link: "/room/room2" },
        { title: "四人房", link: "/room/room3" },
        { title: "六人房", link: "/room/room4" },
        { title: "家庭房", link: "/room/room5" },
        { title: "行政雙人房", link: "/room/room6" },
      ],
    };
  },
  components: {
    Showview,
    VueBreadcrumbs,
  },
};
</script>
<style scoped>
.content:hover {
  background: rgb(86, 104, 86);
}
</style>