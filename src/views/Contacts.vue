<template>
  <div>
    <Showview />
    <v-container>
      <v-row>
        <v-col cols="12" lg="3" sm="3" xs="12">
          <v-list>
            <v-list-item>
              <v-list-item-content>Links<br />快速連結</v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12"  lg="8" sm="8" xs="12">
          <h1>CONTACT FORM</h1>
          <h3>聯絡表單</h3>
          <v-divider></v-divider>
          <v-card ref="form">
            <v-card-text>
              <v-text-field
                ref="name"
                v-model="name"
                :rules="[() => !!name || '請輸入姓名']"
                :error-messages="errorMessages"
                label="*聯絡姓名"
                required
              ></v-text-field>
              <v-text-field
                ref="phone"
                v-model="phone"
                :rules="[
                  () => !!phone || '請輸入手機號碼',
                  () =>
                    (!!phone && phone.length != 10) ||
                    'Phone must be 10 characters',
                  addressCheck,
                ]"
                label="*連絡電話"
                counter="10"
                required
              ></v-text-field>
              <v-text-field
                ref="email"
                v-model="email"
                :rules="[() => !!email || '請輸入電子信箱', addressCheck]"
                label="*聯絡信箱"
                required
              ></v-text-field>
              <v-textarea
                ref="content"
                v-model="content"
                :rules="[() => !!content || '請輸入留言']"
                label="*聯絡內容"
                required
                background-color="grey lighten-2"
              ></v-textarea>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn text>Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-slide-x-reverse-transition>
                <v-tooltip v-if="formHasErrors" left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      class="my-0"
                      v-bind="attrs"
                      @click="resetForm"
                      v-on="on"
                    >
                      <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                  </template>
                  <span>Refresh form</span>
                </v-tooltip>
              </v-slide-x-reverse-transition>
              <v-btn color="primary" text @click="submit">Submit</v-btn>
            </v-card-actions>
          </v-card>
          <v-row>
            <v-col cols="12" lg="8" sm="8" xs="12">
              <!-- 初始化地圖設定 -->
              <l-map
                ref="myMap"
                :zoom="zoom"
                :center="center"
                :options="options"
                @update:zoom="zoomUpdated"
                style="height: 50vh"
              >
                <!-- 載入圖資 -->
                <l-tile-layer :url="url" :attribution="attribution" />
                <!-- 自己所在位置 -->
                <l-marker ref="location" :lat-lng="center">
                  <l-tooltip :options="{ permanent: true, interactive: true }">
                    台南市永康區中山南路1054巷37號
                  </l-tooltip>
                </l-marker>
                <!-- 創建標記點 -->
                <l-marker
                  :lat-lng="[item.latitude,item.longitude]"
                  v-for="item in info"
                  :key="item.id"
                >
                  <!-- 標記點樣式判斷 -->
                  <l-icon
                    :icon-url="
                      item.name === '夢時代購物中心'
                        ? icon.type.gold
                        : icon.type.red
                    "
                    :shadow-url="icon.shadowUrl"
                    :icon-size="icon.iconSize"
                    :icon-anchor="icon.iconAnchor"
                    :popup-anchor="icon.popupAnchor"
                    :shadow-size="icon.shadowSize"
                  />
                  <!-- 彈出視窗 -->
                  <l-tooltip>
                    {{ item.name }}
                  </l-tooltip>
                </l-marker>
              </l-map>
            </v-col>
            <v-col cols="12" lg="4" sm="4" xs="12"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Showview from "../components/showview.vue";
import axios from "axios";
export default {
  components: {
    Showview,
  },
  data() {
    return {
      info:[],
      data: [
        { id: 1, name: "南紡夢時代", local: [22.9913037,120.2311419] },
        { id: 2, name: "新光三越台南中山店", local: [22.995444, 120.209902] },
        { id: 3, name: "新光三越台南新天地", local: [22.986884, 120.197851] },
        { id: 4, name: "台南美術2館", local: [22.990375,120.1991667] },
        { id: 5, name: "focus百貨", local: [22.9955969,120.2078749] },
        { id: 6, name: "台南遠百成功店", local: [22.9962661,120.212158] },
        { id: 7, name: "赤崁樓", local: [22.9973518,120.2005071] },
        { id: 8, name: "楓華沐月台南行館", local: [22.9851778,120.1867104] },
        { id: 9, name: "臺南市政府永華市政中心", local: [22.9922351,120.1828661] },
      ],
      zoom: 13,
      center: [23.0242395,120.2559632],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      options: {
        zoomControl: true,
      },
      icon: {
        type: {
          red:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
          gold:
            "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
        },
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      },
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    getFoodInfo(){
      const url = "/data/askme_zh-tw.json";
      axios.get(url).then(response=>{
        this.info = response.data.filter(data=>data.type ==="住宿");
        console.log(this.info);
      }).catch(err=>{
        console.log(err);
      });
    },
  },
  mounted() {
    //等地圖創建後執行
    this.$nextTick(() => {
      //獲得目前位置
      navigator.geolocation.getCurrentPosition(() => {
        //將目前的位置的標記點彈跳視窗打開
        this.$refs.location.mapObjext.ANY_LEAFLET_MAP_METHOD();
      });
    });
    this.getFoodInfo();
  },
};
</script>
