<template>
  <div>
    <v-carousel
      cycle
      height="700"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="12" lg="3" sm="3" xs="12" v-for="(item ,i) in smallitems" :key="i">
        <v-card class="mx-auto" max-width="400">
          <router-link :to="item.link">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.source"
            >
              <v-card-title>{{item.title}}<br>{{item.name}}</v-card-title>
            </v-img>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      items: [
        { src: require("../assets/jpg/S__86507552.jpg") },
        { src: require("../assets/jpg/S__86507554.jpg") },
        { src: require("../assets/jpg/S__86507533.jpg") },
        { src: require("../assets/jpg/S__86507557.jpg") },
        { src: require("../assets/jpg/S__86687754.jpg") },
        { src: require("../assets/jpg/S__86507530.jpg") },
      ],
      smallitems:[
        {title:"房型介紹",source:require("../assets/jpg/S__86507538.jpg") ,link:"/room" ,name:"Rooms"},
        {title:"周邊景點",source:require("../assets/jpg/S__86507549.jpg") ,link:"/attractions" ,name:"Tourist Information"},
        {title:"最新消息",source:require("../assets/jpg/images.jpg") ,link:"/new" ,name:"What's on"},
        {title:"前往訂房",source:require("../assets/images.png") ,link:"/booking" ,name:"Book Now"},
      ]
    };
  },
};
</script>
