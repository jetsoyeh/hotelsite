<template>
  <div>
    <v-row>
      <v-col cols="12" lg="2" sm="2" xs="12">
        <v-img src="../assets/sunraise-logo.png" width="100px"></v-img>
      </v-col>
      <v-col cols="12" lg="5" sm="5" xs="12">
        <ul>
          <li><v-icon>mdi-phone</v-icon> : (+886)958732012</li>
          <li>
            <v-icon>mdi-email-plus-outline</v-icon> : lovepenelope@msn.com
          </li>
          <li><v-icon>mdi-home</v-icon> : 台南市永康區中山南路1054巷37號</li>
        </ul>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" lg="2" sm="2" xs="12">
        <ul>
          <li><router-link to="/person">招募資訊</router-link></li>
          <li><router-link to="/contacts">聯絡我們</router-link></li>
          <li><router-link to="/report">相關報導</router-link></li>
          <li><router-link to="/traffic">交通指引</router-link></li>
        </ul>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="12" lg="2" sm="2" xs="12">
        <ul>
          <li v-for="(item, i) in items" :key="i">
            <router-link to="#"
              ><v-icon>{{ item.icon }}</v-icon></router-link
            >
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-spacer></v-spacer>
      ©Sun Raise Hotel. ALL RIGHTS RESERVED By SunRaise Corp
    </v-row>
  </div>
</template>
<script>
export default {
  name: "myfooter",
  data() {
    return {
      items: [
        { icon: "mdi-account-lock" },
        { icon: "mdi-instagram" },
        { icon: "mdi-linkedin" },
        { icon: "mdi-facebook" },
      ],
    };
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li {
  margin: 10px;
  float: left;
}
li a {
  color: black;
  text-align: center;

  padding: 1px;
  text-decoration: none;
}
li a:hover {
  color: #9b4444;
}
</style>