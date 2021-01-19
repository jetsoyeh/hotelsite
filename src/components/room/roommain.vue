<template>
  <div>
    <!--xs size-->
    <div class="hidden-sm-and-up">
      <v-card v-for="room in showroom" :key="room.title">
        <div>
          <v-avatar class="ma-3" size="250" tile>
            <v-img :src="room.pic"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="headline">{{ room.title }}</v-card-title>

            <v-card-subtitle>{{ room.title }}</v-card-subtitle>
            <v-card-subtitle class="red--text">{{
              room.price
            }}</v-card-subtitle>
            <v-card-subtitle
              ><router-link :to="room.link">{{
                room.detail
              }}</router-link></v-card-subtitle
            >
          </div>
        </div>
      </v-card>
    </div>
    <!--lg size-->
    <div class="hidden-xs-only">
      <v-card v-for="(item, i) in showroom" :key="i">
        <div class="d-flex">
          <v-avatar class="ma-3" size="250" tile>
            <v-img :src="item.pic"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="headline">{{ item.title }}</v-card-title>

            <v-card-subtitle>{{ item.title }}</v-card-subtitle>
            <v-card-subtitle class="red--text">{{
              item.price
            }}</v-card-subtitle>
            <v-card-subtitle
              ><router-link :to="item.link">{{
                item.detail
              }}</router-link></v-card-subtitle
            >
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "roommain",
  data() {
    return {
      showroom: [
        {
          title: "標準雙人房",
          price: "定價: $5,000/房 平日: $2,280/房 假日: $2,980房",
          detail: "詳細資訊",
          pic: require("../../assets/room/DisplayCut1.jpg"),
          link:"/room/room1"
        },
        {
          title: "豪華雙人房(king)",
          price: "定價: $5,000/房 平日: $2,580/房 假日: $3,280房",
          detail: "詳細資訊",
          pic: require("../../assets/room/DisplayCut2.jpg"),
          link:"/room/room2"
        },
        {
          title: "四人房",
          price: "定價: $5,000/房 平日: $2,980/房 假日: $3,380房",
          detail: "詳細資訊",
          pic: require("../../assets/room/DisplayCut3.jpg"),
          link:"/room/room3"
        },
        {
          title: "六人房",
          price: "定價: $5,000/房 平日: $3,580/房 假日: $4,080房",
          detail: "詳細資訊",
          pic: require("../../assets/room/DisplayCut4.jpg"),
          link:"/room/room4"
        },
        {
          title: "家庭房",
          price: "定價: $5,000/房 平日: $4,280/房 假日: $5,980房",
          detail: "詳細資訊",
          pic: require("../../assets/room/DisplayCut5.jpg"),
          link:"/room/room5"
        },
        {
          title: "行政雙人房",
          price: "定價: $5,000/房 平日: $5,280/房 假日: $5,980房",
          detail: "詳細資訊",
          pic: require("../../assets/room/DisplayCut5.jpg"),
          link:"/room/room6"
        },
      ],
    };
  },
};
</script>