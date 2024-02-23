<script lang="ts" setup>
import { ref } from 'vue'
import { PhoneIcon } from '@heroicons/vue/24/solid'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import Modal from '@/components/Modal/Index.vue'
import ProductFirst from '@/components/Products/ProductFirst.vue'
import ProductText from '@/components/Products/ProductText.vue'
import * as ProductConst from '@/components/Products/Contance'
import { INFO_TEL, INFO_LINE_ID } from '@/constance/Infomation'
import { SCREENS } from '@/TailwindConfig'

const productClass = ref([
  ProductConst.COFFEE_CLASS_FORMULA,
  ProductConst.COFFEE_CLASS_SINGLE,
  ProductConst.COFFEE_CLASS_VILLA,
  ProductConst.COFFEE_CLASS_DRIP
])

const productClassData = ref<any>({
  [ProductConst.COFFEE_CLASS_FORMULA]: {
    displayName: '配方豆',
    bg: 'rgb(73, 32, 15)',
    tx: 'white',
    datas: [
      ProductConst.COFFEE_GOLDENLTALY,
      ProductConst.COFFEE_GOLDENLTALY2,
      ProductConst.COFFEE_SOUTHLTALY
    ]
  },
  [ProductConst.COFFEE_CLASS_SINGLE]: {
    displayName: '單品豆',
    bg: '#8B523A',
    tx: 'white',
    datas: [ProductConst.COFFEE_BRAZIL, ProductConst.COFFEE_MANDHELING, ProductConst.COFFEE_HUEHUE]
  },
  [ProductConst.COFFEE_CLASS_VILLA]: {
    displayName: '莊園豆',
    bg: '#E05012',
    tx: 'white',
    datas: [
      ProductConst.COFFEE_YIRGACHEFFEG1,
      ProductConst.COFFEE_WINE,
      ProductConst.COFFEE_BAHA,
      ProductConst.COFFEE_BEETHOVEN,
      ProductConst.COFFEE_CHOPIN,
      ProductConst.COFFEE_MOZART
    ]
  },
  [ProductConst.COFFEE_CLASS_DRIP]: {
    displayName: '濾掛',
    bg: '#362D29',
    tx: 'white',
    datas: [
      ProductConst.COFFEE_CLASSICMANBADRIP, //
      ProductConst.COFFEE_PRIVATEDRIP
    ]
  }
})

const currentClass = ref(productClass.value[0])
const modalRef: any = ref(null)
const autoplaySetting = ref(0)

if (window.innerWidth > parseInt(SCREENS.lg)) {
  autoplaySetting.value = 0
}

function openModal() {
  modalRef.value && modalRef.value.openModal()
}

function clickTab(key: string) {
  currentClass.value = key
}

defineExpose({
  openModal
})
</script>

<template>
  <Modal class="coffee-product-modal" ref="modalRef">
    <ul class="flex flex-wrap  font-medium text-center text-gray-500">
      <template v-for="classValue in productClass" :key="`wraooer-er-class-${classValue}`">
        <li class="cursor-pointer" @click="() => clickTab(classValue)">
          <a
            href="javascript:void(0);"
            aria-current="page"
            :class="[
              'inline-block text-lg lg:text-sm py-1 px-3 lg:p-4 lg:px-8',
              currentClass === classValue && 'font-bold active'
            ]"
            :style="{
              background: currentClass === classValue ? productClassData[classValue].bg : undefined,
              color: currentClass === classValue ? productClassData[classValue].tx : undefined
            }"
          >
            {{ productClassData[classValue].displayName }}
          </a>
        </li>
      </template>
    </ul>

    <template v-for="classValue in productClass" :key="`wraooer-er-class-slide-${classValue}`">
      <div v-if="classValue === currentClass" class="slide-wrapper">
        <carousel :autoplay="autoplaySetting" pause-autoplay-on-hover>
          <template
            v-for="value in productClassData[classValue].datas"
            :key="`wraooer-er-${value}`"
          >
            <slide style="align-items: start">
              <div class="product-wrapper flex flex-col lg:flex-row h-full">
                <div class="image-wrapper">
                  <ProductFirst class="" cate="coffee" :type="value" />
                </div>

                <div class="text-wrapper flex-1 p-2 lg:p-4 pt-3 lg:pt-2 text-left">
                  <div class="relative min-h-full">
                    <ProductText cate="coffee" :type="value" />

                    <br /><br />

                    <div class="action flex">
                      <a
                        class="w-8 h-8 rounded-full outline outline-1 text-blue-500 outline-blue-500 flex items-center justify-center mr-3"
                        :href="`tel:${INFO_TEL}`"
                      >
                        <PhoneIcon class="h-4 w-4 text-blue-500" />
                      </a>

                      <a
                        class="w-8 h-8 text-green-500 outline-green-500 flex items-center justify-center"
                        :href="`https://line.me/R/ti/p/${INFO_LINE_ID}`"
                      >
                        <img class="w-8" src="@/assets/icons/line-1.svg" alt="line" />
                      </a>
                      <!-- <button class="w-full rounded text-white" style="background: #06c755">
                  LINE @
                </button> -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="label rounded"></div> -->
            </slide>
          </template>

          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </template>
  </Modal>
</template>

<style scoped>
.product-wrapper {
  /* max-height: 500px; */
}

.image-wrapper {
  /* width: 100%;
  min-width: 500px */
}

.text-wrapper {
  position: relative;
}

@media screen(lg) {
  .image-wrapper {
    max-width: 500px;
  }
  .text-wrapper {
    min-height: 100%;
    padding-right: 50px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .product-wrapper {
    max-height: 500px;
  }
}

/* for pc */
/* .text-wrapper {
  min-height: 100%;
  padding-right: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
} */

.text-wrapper .action {
  position: absolute;
  left: 0px;
  bottom: 5px;
}

.slide-wrapper {
  max-width: 1050px;
}
</style>