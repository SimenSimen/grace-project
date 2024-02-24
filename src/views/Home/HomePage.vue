<script setup lang="ts">
import { ref } from 'vue'

import PuddingModal from './components/PuddingModal.vue'
import CoffeeModal from './components/CoffeeModal.vue'
import ShampooModal from './components/ShampooModal.vue'
import { CursorArrowRaysIcon } from '@heroicons/vue/24/solid'

const puddingModalRef: any = ref(null)
const coffeeModalRef: any = ref(null)
const shampooModalRef: any = ref(null)

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
</script>

<template>
  <main>
    <div class="banner">
      <img class="w-full" src="@/assets/images/banners/banner-1.png" alt="" />
    </div>

    <!-- <product-cate title="鶴岡食品日式系列 - 布丁粉 / 果凍粉 / 奶酪" /> -->

    <div class="banner-middle cursor-pointer" @click="openDailog">
      <img src="@/assets/images/banners/mid-banner/pudding.png" alt="布丁類別圖" />

      <button
        type="button"
        class="info-button rounded-lg py-1 px-2 text-sm lg:text-xl lg:px-4 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-black"
      >
        <span>瞭解更多</span>
        <CursorArrowRaysIcon class="icon w-4 h-4 lg:w-6 lg:h-6" />
      </button>
    </div>

    <pudding-modal ref="puddingModalRef" />

    <!-- <product-cate title="鶴岡食品咖啡 - 綜合豆" /> -->

    <div class="banner-middle cursor-pointer" @click="openCoffeeDailog">
      <img src="@/assets/images/banners/mid-banner/coffee.png" alt="咖啡類別圖" />

      <button
        type="button"
        class="info-button rounded-lg py-1 px-2 text-sm lg:text-xl lg:px-4 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-black"
      >
        <span>瞭解更多</span>
        <CursorArrowRaysIcon class="icon w-4 h-4 lg:w-6 lg:h-6" />
      </button>
    </div>

    <coffee-modal ref="coffeeModalRef" />

    <!-- <product-cate title="鶴岡洗護 - 洗護用品" /> -->

    <div class="banner-middle cursor-pointer" @click="openShampooDialog">
      <img src="@/assets/images/banners/mid-banner/asdo.png" alt="洗護用品類別圖" />

      <button
        type="button"
        class="info-button rounded-lg py-1 px-2 text-sm lg:text-xl lg:px-4 bg-gray-200 text-gray-700 hover:bg-gray-400 hover:text-black"
      >
        <span>瞭解更多</span>
        <CursorArrowRaysIcon class="icon w-4 h-4 lg:w-6 lg:h-6" />
      </button>
    </div>

    <shampoo-modal ref="shampooModalRef" />

    <!-- <br /><br /><br /><br /> -->

    <!-- <modal class="coffee-modal" />
    <modal class="asdo-modal" /> -->
  </main>

  <main-footer />
</template>

<style scoped>
.banner-middle {
  position: relative;
}
.banner-middle .info-button {
  position: absolute;
  bottom: 15px;
  left: 15px;
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
