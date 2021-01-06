<template>
  <v-card color="basil">
    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab id="0" @mouseover="changetab(0)"> 價格說明 </v-tab>
      <v-tab id="1" @mouseover="changetab(1)"> 基本介紹 </v-tab>
      <v-tab id="2" @mouseover="changetab(2)"> 注意事項 </v-tab>
      <v-tab id="3" @mouseover="changetab(3)"> 改期退訂 </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" >
      <v-tab-item >
        <v-card color="basil" flat>
          <v-card-text>
            <v-simple-table dark>
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td>平日</td>
                    <td>{{ commonday }}/房</td>
                  </tr>
                  <tr>
                    <td>假日</td>
                    <td>{{ holiday }}/房</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card color="basil" flat>
          <v-card-text>
            <h2><I>容納人數</I></h2>
            <h4>{{ person }}</h4>
            <br />
            <h2><I>客房面積</I></h2>
            <h4>{{ roomsize }}</h4>
            <br />
            <h2><I>床鋪尺寸</I></h2>
            <h4>{{ bedsize }}</h4>
            <br />
            <h2><I>房價說明</I></h2>
            <span style="background-color: yellow"
              >加LINE訂房有優惠折扣喔^.*~</span
            >
            <br />
            <span style="background-color: yellow"
              >請留意，優惠活動不併行(如.政府補助...等)</span
            >
            <h4 v-html="intro"></h4>
            <br />
            <h2><I>客房設施</I></h2>
            <h4>
              液晶電視、有線電視頻道、無線網路、空調、盥洗用品、潤髮乳、浴巾、毛巾、浴帽、梳子、刮鬍刀、洗面乳、棉花棒、潤膚乳、吹風機、浴缸、室內拖鞋、電熱水壺、檯燈
            </h4>
            <br />
            <h2><I>客房簡介</I></h2>
            <ul>
              <li>
                旅行 標準{{ person }}套房位於{{ floor }}，空間約{{
                  roomsize
                }}，格局方正，有1張雙人床，及寬敞舒適的泡湯空間享受慢漫溫泉的時光。房間內的設備有沙發、42吋液晶電視、第四台、冷暖空調、快煮壺、茶杯、提供牙刷、梳子、刮鬍刀、刮鬍泡沫、棉花棒、化妝棉、更提供卸妝油、沐浴用品採用天然有機沐浴乳、洗髮精、潤髮乳、風力強的吹風機..等貼心無極限的齊全備品，如在家般方便舒適，床墊嚴選德國床墊，尺寸為150X180cm讓您出外旅遊也能享受慢舒眠。
              </li>
              <li>
                除了住宿的空間外，二樓森鄰綠交誼廳也是提供宿友們使用的(開放時間09:00~21:00)。
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card color="basil" flat>
          <v-card-text>
            <h2><I>平假日定義</I></h2>
            <ul>
              <li>
                定價：<span style="background-color: yellow"
                  >加LINE訂房有優惠折扣喔^.*~請留意，優惠活動不併行(如.政府補助...等)</span
                >
              </li>
              <li>其他特殊節目：農曆春節、跨年(12/31)</li>
            </ul>
            <br />
            <h2><I>入退時間</I></h2>
            <ul>
              <li>入住時間：15:00以後</li>
              <li>退房時間：11:00以前</li>
            </ul>
            <br />
            <h2><I>住宿須知</I></h2>
            <h4>
              加人加床說明：(顧及住宿品質建議不加床)<br />
              請依照訂房約定人數前來，超過約定人數入住 慢漫湯
              有權利拒絕入住並沒收訂金，敬請見諒。<br />
              1.三歲以下小朋友不加床不加收費用(特定房型限一位)。<br />
              2.四~六歲小朋友不加床每人收費 $300。(提供盥洗用品、毛巾及早餐)<br />
              3.<span style="background-color: yellow">
                六歲以上視為成人皆需加床</span
              >，每人收費$800。(提供單人床墊、寢具、盥洗用品、毛巾及早餐)<br />
              4.加被子一床200元 / 加枕頭一個50元 / 加浴巾一條50元。
            </h4>
            <br />
            <h4>日出之美溫泉旅宿住房須知：</h4>
            <ul>
              <li>
                入住時間為15:00以後。退房時間為11:00以前，若超過退房時間得酌收費用(每小時500元)。
              </li>
              <li>
                請依照訂房約定人數前來，超過約定人數入住 慢漫湯
                有權利拒絕入住並沒收訂金，敬請見諒。
              </li>
              <li>
                日出之美嚴禁貴賓們從事吸毒、嗑藥、打架、轟趴及酗酒等，如有不法必報警處理，如貴賓無法配合請勿入住！
              </li>
              <li>請勿攜帶任何寵物入住。</li>
              <li>
                住宿時，請記得出示您的國民身份證及付清房價尾款，以便我們辦理登記。
              </li>
              <li>
                接待大廳服務時間為08:00~21:00，服務時間之外進出旅宿請確實關好一樓大門。
              </li>
              <li>
                為了安全與健康，日出之美室內禁菸(包含浴室及二樓露台)
                、禁檳榔，如有需要請移駕一樓戶外，並請勿亂丟煙蒂、勿亂彈煙灰。
              </li>
              <li>為享受夜晚的寧靜，在21:00過後，請降低音量。</li>
              <li>停車須自行路邊停車或附近付費停車場。</li>
              <li>二樓森鄰綠交誼廳開放時間為08:00~11:00及16:00~21:00。</li>
              <li>室內拖鞋請勿穿到戶外。</li>
              <li>請確實遵守泡湯禮儀及注意事項。</li>
            </ul>
            <br />
            <h4>泡湯禮儀及注意事項：</h4>
            <ul>
              <li>入浴前應先徹底洗淨身體。</li>
              <li>患有傳染性疾病者禁止入浴。</li>
              <li>
                患有心臟病、肺病、高血壓、糖尿病及其他循環系統障礙等慢性疾病者，應依照醫師指示入浴。
              </li>
              <li>乾性及過敏性皮膚，應避免泡溫泉。</li>
              <li>女性生理期間禁止入浴。</li>
              <li>酒醉、空腹及飽餐後，不宜入浴。</li>
              <li>禁止攜帶寵物入浴。</li>
              <li>浸泡溫泉時間一次不宜超過15分鐘。</li>
              <li>溫泉浸泡高度不宜超過心臟。</li>
              <li>泡完溫泉後不宜直接進入烤箱，以免造成眼角膜傷害。</li>
              <li>孕婦、行動不便老人及未滿三歲之幼兒，不宜入浴。</li>
              <li>年歲較高、健康欠佳者，應避免單獨一人入浴，以免發生意外。</li>
              <li>
                長途跋涉、疲勞過度或劇烈運動後，宜稍作休息再入浴，以免引起腦部缺血或休克現象。
              </li>
              <li>泡浴中若有任何不適，請立即離池並通知服務人員或隨行親友。</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card color="basil" flat>
          <v-card-text>
            <ul>
              <li>
                住宿當日逢颱風或地震等不可抗拒之因素(以當地縣市政府頒布狀況為準則)時，無條件退回全額訂金或保留訂金。
              </li>
              <li>
                颱風改期或取消以宜蘭當地或住客居住地的陸上颱風警報宣布停班停課為主，以中央氣象局宣布為主。
              </li>
              <li>
                變更住宿日期請於14日前通知，慢漫湯將為您保留訂金六個月，<span
                  style="background-color: yellow"
                  >未於14日前通知者則無法變更住宿日期，依照消保會規定退還部分訂金處理。</span
                >
              </li>
            </ul>
            <br />
            <h2><I>取消訂房訂金退還標準：(依據消保會規定)</I></h2>
            <ul>
              <li>預定住宿日前14日取消訂房，可退回全部訂金</li>
              <li>預定住宿日前10日至13日取消訂房者，可退回 70% 的訂金</li>
              <li>預定住宿日前7日至九日取消訂房者，可退回 50% 的訂金</li>
              <li>預定住宿日前4日至6日取消訂房者，可退回 40% 的訂金</li>
              <li>預定住宿日前2日至3日取消訂房者，可退回 30% 的訂金</li>
              <li>預定住宿日前1日取消訂房者，可退回 20% 的訂金</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  name: "Itemtab",
  props: [
    "commonday",
    "holiday",
    "roomsize",
    "bedsize",
    "intro",
    "floor",
    "person",
  ],
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    changetab(id) {
      let tag = document.getElementById(id);
      tag.click();
    },
  },
};
</script>
<style scoped>
/* Helper classes */
.basil {
  background-color: #ddd9c8 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>