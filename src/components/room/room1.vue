<template>
  <div>
    <Showlightbox :items="items" />
    <Itemtab :person="person" :commonday="commonday" :holiday="holiday" :roomsize="roomsize" :bedsize="bedsize" :intro="intro" :floor="floor" />
  </div>
</template>
<script>
import Showlightbox from "./showlightbox";
import Itemtab from "./itemtab";

export default {
  components: {
    Showlightbox,
    Itemtab,
  },
  data() {
    return {
      items: [
        require("../../assets/room/twoperson/1.jpg"),
        require("../../assets/room/twoperson/2.jpg"),
        require("../../assets/room/twoperson/3.jpg"),
        require("../../assets/room/twoperson/4.jpg"),
      ],
      person:"2人",
      commonday:"$2,280",
      holiday:"$2,980",
      roomsize:"6坪",
      bedsize:"1張雙人床(150*180)",
      intro:"入住人數上限為2人<br />本房型不提供加人加床服務。 加被子一床200元 <br />加枕頭一個50元 / 加浴巾一條50元。",
      floor:"2F"
    };
  },
};
</script>