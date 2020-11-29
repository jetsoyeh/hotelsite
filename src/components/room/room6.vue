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
        require("../../assets/room/adminroom/1.jpg"),
        require("../../assets/room/adminroom/2.jpg"),
        require("../../assets/room/adminroom/3.jpg"),
        require("../../assets/room/adminroom/4.jpg"),
      ],
      person:"2人",
      commonday:"$5,280",
      holiday:"$5,980",
      roomsize:"30坪",
      bedsize:"1張雙人床(150*180)",
      intro:"入住人數上限為2人<br>超過2人依加人加床說明收費<br>加人加床說明：(顧及住宿品質請先來電或LINE了解)<br>1.三歲以下小朋友不加床不加收費用。(限1位)。<br>2.四~六歲小朋友不加床每人收費 $300。(提供盥洗用品、毛巾及早餐)<br>3.六歲以上視為成人皆需加床，每人收費 $800。(提供單人床墊、寢具、盥洗用品、毛巾及早餐)</br>4.加被子一床200元 / 加枕頭一個50元 / 加浴巾一條50元。",
      floor:"3F"
    };
  },
};
</script>