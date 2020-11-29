<template>
  <v-app id="inspire">
    <!--側邊欄-->
    <v-navigation-drawer temporary v-model="sidebar" app class="red lighten-3">
      <v-list nav dense>
        <v-list-item>
          <v-list-item-content>
            <v-img src="@/assets/logo.png"></v-img>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <div v-for="item in menuItems" :key="item.title">
          <v-list-item :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <!--主選單-->
    <v-app-bar dark class="red lighten-3" app>
      <v-app-bar-nav-icon
        @click.stop="sidebar = !sidebar"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"
          >SunRaise</router-link
        >
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
    </v-app-bar>
    <!--主內容-->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <!--頁尾-->
    <v-divider></v-divider>
    <v-footer >
      <myfooter />
    </v-footer>
  </v-app>
</template>

<script>
import myfooter from "./components/footer.vue";

export default {
  name: "App",
  components: {
    myfooter,
  },
  data() {
    return {
      sidebar: false,
      menuItems: [
        { icon: "mdi-home", title: "日出之美", link: "/" },
        { icon: "mdi-room-service", title: "房型介紹", link: "/room/main" },
        {
          icon: "mdi-backspace-reverse-outline",
          title: "日出空間",
          link: "/publicspace",
        },
        { icon: "mdi-google-maps", title: "周邊景點", link: "/attractions" },
        { icon: "mdi-new-box", title: "最新消息", link: "/new" },
        { icon: "mdi-contacts", title: "聯絡我們", link: "/contacts" },
      ],
    };
  },
};
</script>
<style lang="sass">
@import '~vuetify/src/styles/main.sass'

</style>
