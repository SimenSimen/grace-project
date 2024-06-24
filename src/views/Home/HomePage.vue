<script setup lang="ts">
import { ref } from 'vue'

import PuddingModal from './components/PuddingModal.vue'
import CoffeeModal from './components/CoffeeModal.vue'
// import ShampooModal from './components/ShampooModal.vue'
import moreProductModal from './components/MoreProduct.vue'
import Modal from '@/components/Modal/Index.vue'
import { INFO_TEL } from '@/constance/Infomation'
import { PhoneIcon } from '@heroicons/vue/24/solid'

const puddingModalRef: any = ref(null)
const coffeeModalRef: any = ref(null)
const shampooModalRef: any = ref(null)
const moreProductModalRef: any = ref(null)
const aboutModalRef: any = ref(null)
const orderInfoModalRef: any = ref(null)
const acrossBusinessModalRef: any = ref(null)

// onMounted(() => {
//   console.log('DOM Box1：', puddingModalRef.value)
// })
function openDailog() {
  puddingModalRef.value && puddingModalRef.value.openModal()
}

function openAboutDailog() {
  aboutModalRef.value && aboutModalRef.value.openModal()
}

function orderInfoDailog() {
  orderInfoModalRef.value && orderInfoModalRef.value.openModal()
}

function acrossBusinessDailog() {
  acrossBusinessModalRef.value && acrossBusinessModalRef.value.openModal()
}

function openCoffeeDailog() {
  coffeeModalRef.value && coffeeModalRef.value.openModal()
}

function openShampooDialog() {
  shampooModalRef.value && shampooModalRef.value.openModal()
}

function openMoreProduct() {
  moreProductModalRef.value && moreProductModalRef.value.openModal()
}
</script>

<template>
  <main>
    <div class="banner">
      <picture>
        <source
          srcset="@/assets/images/banners/banner-1-m.webp"
          type="image/webp"
          media="(max-width: 992px)"
        />
        <source srcset="@/assets/images/banners/banner-1-m.png" media="(max-width: 992px)" />
        <source srcset="@/assets/images/banners/banner-1.webp" type="image/webp" />
        <img class="w-full" src="@/assets/images/banners/banner-1.png" alt="logo圖" />
      </picture>
    </div>

    <!-- <product-cate title="鶴岡食品日式系列 - 布丁粉 / 果凍粉 / 奶酪" /> -->

    <div class="banner-middle cursor-pointer" @click="openDailog">
      <picture>
        <source
          srcset="@/assets/images/banners/mid-banner/pudding_m.webp"
          type="image/webp"
          media="(max-width: 992px)"
        />
        <source
          srcset="@/assets/images/banners/mid-banner/pudding_m.png"
          media="(max-width: 992px)"
        />
        <source srcset="@/assets/images/banners/mid-banner/pudding.webp" type="image/webp" />
        <img src="@/assets/images/banners/mid-banner/pudding.png" alt="布丁類別圖" />
      </picture>
    </div>

    <pudding-modal ref="puddingModalRef" />

    <!-- <product-cate title="鶴岡食品咖啡 - 綜合豆" /> -->

    <div class="banner-middle cursor-pointer" @click="openCoffeeDailog">
      <picture>
        <source
          srcset="@/assets/images/banners/mid-banner/coffee_m.webp"
          type="image/webp"
          media="(max-width: 992px)"
        />
        <source
          srcset="@/assets/images/banners/mid-banner/coffee_m.png"
          media="(max-width: 992px)"
        />
        <source srcset="@/assets/images/banners/mid-banner/coffee.webp" type="image/webp" />
        <img src="@/assets/images/banners/mid-banner/coffee.png" alt="布丁類別圖" />
      </picture>
    </div>

    <coffee-modal ref="coffeeModalRef" />

    <div class="banner-middle cursor-pointer" @click="openMoreProduct">
      <picture>
        <source
          srcset="@/assets/images/banners/mid-banner/more-m.webp"
          type="image/webp"
          media="(max-width: 992px)"
        />
        <source srcset="@/assets/images/banners/mid-banner/more-m.png" media="(max-width: 992px)" />
        <source srcset="@/assets/images/banners/mid-banner/more.webp" type="image/webp" />
        <img src="@/assets/images/banners/mid-banner/more.png" alt="更多商品" />
      </picture>
    </div>

    <more-product-modal ref="moreProductModalRef" />

    <!-- <product-cate title="鶴岡洗護 - 洗護用品" /> -->

    <!-- @click="openShampooDialog" -->
    <div class="banner-middle cursor-pointer">
      <picture>
        <source
          srcset="@/assets/images/banners/mid-banner/classfiy_m.webp"
          type="image/webp"
          media="(max-width: 992px)"
        />
        <source
          srcset="@/assets/images/banners/mid-banner/classfiy_m.png"
          media="(max-width: 992px)"
        />
        <source srcset="@/assets/images/banners/mid-banner/classfiy.webp" type="image/webp" />
        <img src="@/assets/images/banners/mid-banner/classfiy.png" alt="classfiy" />
      </picture>

      <div class="click-hover">
        <div class="about" @click="openAboutDailog" />
        <div class="order-info" @click="orderInfoDailog" />
        <div class="recommand" @click="openShampooDialog" />
        <div class="accross-bussiness" @click="acrossBusinessDailog" />
      </div>
    </div>

    <!-- <shampoo-modal ref="shampooModalRef" /> -->
    <modal ref="shampooModalRef">
      <div class="shampoo-modal-content p-6 text-gray-700">
        <h1 class="text-2xl mb-4 text-blue-700">
          <div class="text-bar mr-1" style="height: 1.2rem"></div>
          <span>艾絲朵_甦活系列</span>
        </h1>

        <br>

        <p class="mb-2">「艾絲朵甦活系列」源自專業沙龍洗護品牌。</p>
        <p class="mb-2">
          從「頭皮」清潔與調理到「髮絲」滋潤與修復，給予全面性最貼心的沙龍等級養護，讓您即便在家，也能輕鬆維持美麗秀髮與健康頭皮。
        </p>

        <br>
        
        <p class="my-2">產品網站：</p>
        <p class="my-2">ASDO 頭髮養護系列：</p>
        <p class="mb-6">
          <a
            class="text-blue-500"
            href="https://asukahair.com.tw/zh/product_cg17855.php"
            target="_blank"
            >https://asukahair.com.tw/zh/product_cg17855.php
          </a>
        </p>
        <p class="my-2">ASDO 身體呵護系列：</p>
        <p class="mb-6">
          <a
            class="text-blue-500"
            href="https://asukahair.com.tw/zh/product_cg17857.php"
            target="_blank"
            >https://asukahair.com.tw/zh/product_cg17857.php
          </a>
        </p>

        <a
          class="w-8 h-8 rounded-full outline outline-1 text-blue-500 outline-blue-500 flex items-center justify-center mr-3"
          :href="`tel:${INFO_TEL}`"
        >
          <PhoneIcon class="h-4 w-4 text-blue-500" />
        </a>
      </div>
    </modal>
    <modal ref="aboutModalRef">
      <div class="about-modal-content p-6 text-gray-700">
        <h1 class="text-2xl mb-4 text-blue-700">
          <div class="text-bar mr-1" style="height: 1.2rem"></div>
          <span>關於我們</span>
        </h1>

        <p>
          於2005年創立「鶴岡商行」，擁有多年的食品餐飲經驗，期間做出許多顧客們心中，最幸福的甜點滋味！
        </p>

        <br />

        <p>
          在這條路上我們堅持創新，調整腳步，於2023年7月，正式成立「鶴岡家有限公司」，不只有甜品，更提升專業度與多角化經營，開發至咖啡、茶葉等產品，廣受好評。從知名餐廳到在地店家，都有我們的忠實顧客！
        </p>

        <br />

        <p>鶴岡家將繼續乘載著這份支持與熱情，做出更優質的商品與更親切的服務，前往幸福滋味之境。</p>
      </div>
    </modal>

    <modal ref="orderInfoModalRef">
      <div class="order-info-content p-6 text-gray-700">
        <h1 class="text-2xl mb-4 text-blue-700">
          <div class="text-bar mr-1" style="height: 1.2rem"></div>
          <span>訂購須知</span>
        </h1>

        <p class="mb-2">1. 布丁、果凍粉出貨皆以20包/箱為單位，可綜合混搭訂購。</p>
        <p class="mb-2">2. 本公司粉類系列產品皆已投保產品人責任險1000萬元。</p>
        <p class="mb-2">3. 本公司粉類系列皆通過HACCP、ISO 9001:22000國際品質認證。</p>
        <p class="mb-2">4. 如需少量包裝可至蝦皮賣場搜尋</p>
        <p class="mb-2">5. 由新竹物流全台配送，貨款代收(如需轉帳請先告知)。</p>
        <p class="mb-2">
          6. 收到商品請第一時間確認檢查，如有問題請當下拍照留存並連繫我們幫您處理。
        </p>
        <p>7. 其餘問題可透過電話、LINE@詢問</p>
      </div>
    </modal>

    <modal ref="acrossBusinessModalRef">
      <div class="across-business-content p-6 text-gray-700">
        <h1 class="text-2xl mb-4 text-blue-700">
          <div class="text-bar mr-1" style="height: 1.2rem"></div>
          <span>異業合作</span>
        </h1>

        <p class="mb-2">在地溫馨溫暖的咖啡品牌「貳弄九號館」！</p>
        <p class="mb-2">主要販售「調和咖啡豆」、「頂級莊園豆」等商品</p>
        <br />

        <p class="mb-2">
          <img class="w-6 h-6 inline-block" src="./images/earth.svg" alt="earth" />
          <span class="text-lg font-bold mr-4">官網連結:</span>
          <a class="text-blue-500" href="https://www.9house.com.tw" target="_blank"
            >https://www.9house.com.tw</a
          >
        </p>

        <br />

        <p class="mb-4">
          <img class="w-6 h-6 inline-block" src="./images/people-fill.svg" alt="earth" />
          <span class="text-lg font-bold">社群網站:</span>
        </p>
        <p class="mb-2">
          <img class="w-4 h-4 inline-block" src="@/assets/icons/ig-1.svg" alt="earth" />
          IG:
          <a
            class="ml-2 text-blue-500"
            href="https://www.instagram.com/l2n9_coffee"
            target="_blank"
          >
            https://www.instagram.com/l2n9_coffee
          </a>
        </p>
        <p>
          <img class="w-4 h-4 inline-block" src="@/assets/icons/fb-1.svg" alt="earth" />
          FB:
          <a class="ml-2 text-blue-500" href="https://www.facebook.com/cafe9house" target="_blank">
            https://www.facebook.com/cafe9house
          </a>
        </p>
      </div>
    </modal>
  </main>

  <main-footer @on-more-product="openMoreProduct" />
</template>

<style scoped>
.shampoo-modal-content {
  max-width: 520px;
}

.across-business-content {
  max-width: 520px;
}

.order-info-content {
  max-width: 520px;
}

.about-modal-content {
  max-width: 500px;
}

.banner-middle {
  position: relative;
}
.banner-middle .info-button {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.banner-middle .info-button .icon {
  display: block;
  margin-left: 3px;
  animation-name: click-flick;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}

@keyframes click-flick {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}

.click-hover {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.click-hover > div {
  width: 50%;
  height: 50%;
}
</style>
