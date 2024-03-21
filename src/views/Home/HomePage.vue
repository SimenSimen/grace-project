<script setup lang="ts">
import { ref } from 'vue'

import PuddingModal from './components/PuddingModal.vue'
import CoffeeModal from './components/CoffeeModal.vue'
import ShampooModal from './components/ShampooModal.vue'
import moreProductModal from './components/MoreProduct.vue'
import Modal from '@/components/Modal/Index.vue'

const puddingModalRef: any = ref(null)
const coffeeModalRef: any = ref(null)
const shampooModalRef: any = ref(null)
const moreProductModalRef: any = ref(null)
const aboutModalRef: any = ref(null)

// onMounted(() => {
//   console.log('DOM Box1：', puddingModalRef.value)
// })
function openDailog() {
  puddingModalRef.value && puddingModalRef.value.openModal()
}

function openAboutDailog() {
  aboutModalRef.value && aboutModalRef.value.openModal()
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
        <div class="about" @click="openAboutDailog"></div>
        <div class="order-info"></div>
        <div class="recommand" @click="openShampooDialog"></div>
        <div class="accross-bussiness"></div>
      </div>
    </div>

    <shampoo-modal ref="shampooModalRef" />
    <modal ref="aboutModalRef">
      <div class="about-modal-content p-6 text-gray-700">
        <h1 class="text-2xl mb-4 text-blue-700">
          <div class="text-bar mr-1" style="height: 1.2rem;"></div>
          <span>關於我們</span>
        </h1>

        <p>
          於2005年創立「鶴岡商行」，擁有18年的食品餐飲經驗，期間做出許多顧客們心中，最幸福的甜點滋味！
        </p>

        <br>
        
        <p>
          在這條路上我們堅持創新，調整腳步，於2023年7月，正式成立「鶴岡家有限公司」，不只有甜品，更提升專業度與多角化經營，開發至咖啡、茶葉等產品，廣受好評。從知名餐廳到在地店家，都有我們的忠實顧客！
        </p>

        <br>

        <p>鶴岡家將繼續乘載著這份支持與熱情，做出更優質的商品與更親切的服務，前往幸福滋味之境。</p>
      </div>
    </modal>
  </main>

  <main-footer @on-more-product="openMoreProduct" />
</template>

<style scoped>
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
