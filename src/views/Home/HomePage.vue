<script setup lang="ts">
import { ref } from 'vue'

import PuddingModal from './components/PuddingModal.vue'
import CoffeeModal from './components/CoffeeModal.vue'
import ShampooModal from './components/ShampooModal.vue'
import moreProductModal from './components/MoreProduct.vue'

const puddingModalRef: any = ref(null)
const coffeeModalRef: any = ref(null)
const shampooModalRef: any = ref(null)
const moreProductModalRef: any = ref(null)

// onMounted(() => {
//   console.log('DOM Box1：', puddingModalRef.value)
// })
function openDailog() {
  puddingModalRef.value && puddingModalRef.value.openModal()
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
        <img class="w-full" src="@/assets/images/banners/banner-1.png" alt="" />
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

    <!-- <product-cate title="鶴岡洗護 - 洗護用品" /> -->

    <div class="banner-middle cursor-pointer" @click="openShampooDialog">
      <picture>
        <source
          srcset="@/assets/images/banners/mid-banner/asdo_m.webp"
          type="image/webp"
          media="(max-width: 992px)"
        />
        <source srcset="@/assets/images/banners/mid-banner/asdo_m.png" media="(max-width: 992px)" />
        <source srcset="@/assets/images/banners/mid-banner/asdo.webp" type="image/webp" />
        <img src="@/assets/images/banners/mid-banner/asdo.png" alt="布丁類別圖" />
      </picture>
    </div>

    <shampoo-modal ref="shampooModalRef" />

    <!-- <br /><br /><br /><br /> -->

    <!-- <modal class="coffee-modal" />
    <modal class="asdo-modal" /> -->

    <more-product-modal ref="moreProductModalRef" />
  </main>

  <main-footer @on-more-product="openMoreProduct" />
</template>

<style scoped>
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
</style>
