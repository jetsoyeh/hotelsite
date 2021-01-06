<template>
  <div>
    <Showview />
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="3" sm="3" xs="12">
          <v-list dense>
            <v-list-item>
              <v-list-item-content
                >Members Area<br />會員專區</v-list-item-content
              >
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense v-for="(item, i) in items" :key="i">
              <v-list-item :to="item.link">
                <v-list-item-content class="content">{{
                  item.title
                }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list>
        </v-col>
        <v-col cols="12" lg="9" sm="9" xs="12">
            <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Showview from "../components/showview.vue";
export default {
  data() {
    return {
      items: [
        { title: "會員登入", link: "/members/login" },
        { title: "會員註冊", link: "/members/register" },
        { title: "忘記密碼", link: "/members/forget" },
      ],
    };
  },
  components: {
    Showview,
  },
};
</script>
<style scoped>
.content:hover {
  background: rgb(86, 104, 86);
}
</style>