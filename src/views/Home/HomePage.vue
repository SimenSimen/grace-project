<script setup lang="ts">
import { ref } from 'vue'
import ProductCate from './ProductCate.vue'

import PuddingModal from './components/PuddingModal.vue'
// import productsForPudding from '@/data/pudding.js'

const puddingModalRef: any = ref(null)

// onMounted(() => {
//   console.log('DOM Box1：', puddingModalRef.value)
// })
function openDailog() {
  puddingModalRef.value && puddingModalRef.value.openModal()
}
</script>

<template>
  <main>
    <div class="banner">
      <img class="w-full" src="@/assets/images/banners/banner-1.png" alt="" />
    </div>

    <!-- <product-cate title="鶴岡食品日式系列 - 布丁粉 / 果凍粉 / 奶酪" /> -->

    <div class="banner-middle cursor-pointer" @click="openDailog">
      <img src="@/assets/images/banners/mid-banner/pudding.png" alt="布丁類別圖" />
    </div>

    <pudding-modal ref="puddingModalRef" />

    <!-- <product-cate title="鶴岡食品咖啡 - 綜合豆" /> -->

    <div class="banner-middle">
      <img src="@/assets/images/banners/mid-banner/coffee.png" alt="咖啡類別圖" />
    </div>

    <!-- <product-cate title="鶴岡洗護 - 洗護用品" /> -->

    <div class="banner-middle">
      <img src="@/assets/images/banners/mid-banner/asdo.png" alt="洗護用品類別圖" />
    </div>
    <br /><br /><br /><br />

    <!-- <modal class="coffee-modal" />
    <modal class="asdo-modal" /> -->
  </main>

  <main-footer />
</template>
