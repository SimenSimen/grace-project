<script lang="ts" setup>
import { ref } from 'vue'
import { PhoneIcon } from '@heroicons/vue/24/solid'
import Modal from '@/components/Modal/Index.vue'
import ProductFirst from '@/components/Products/ProductFirst.vue'
import ProductText from '@/components/Products/ProductText.vue'
import * as ProductConst from '@/components/Products/Contance'
import { INFO_TEL, INFO_LINE_ID } from '@/constance/Infomation'
import { SCREENS } from '@/TailwindConfig'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

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
  autoplaySetting.value = 4000
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
    <ul class="product-modal-tab flex flex-wrap font-medium text-center text-gray-500">
      <template v-for="classValue in productClass" :key="`wraooer-er-class-${classValue}`">
        <li class="tab-element cursor-pointer" @click="() => clickTab(classValue)">
          <a
            href="javascript:void(0);"
            aria-current="page"
            :class="['link', currentClass === classValue && 'font-bold active']"
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
        <!-- :touch-drag="false" -->
        <swiper :modules="[Navigation]" navigation>
          <!-- <carousel :autoplay="autoplaySetting" pause-autoplay-on-hover> -->
          <template
            v-for="value in productClassData[classValue].datas"
            :key="`wraooer-er-${value}`"
          >
            <swiper-slide>
              <!-- <slide style="align-items: start"> -->
              <div class="content-wrapper flex flex-col lg:flex-row h-full">
                <div class="image-wrapper">
                  <ProductFirst class="" cate="coffee" :type="value" />
                </div>

                <div
                  class="product-modal-text-wrapper text-wrapper flex-1 p-2 lg:p-4 pt-3 lg:pt-2 text-left"
                >
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
              <!-- </slide> -->
            </swiper-slide>
          </template>

          <!-- </carousel> -->
        </swiper>
      </div>
    </template>
  </Modal>
</template>

<style scoped>
.coffee-product-modal :deep(.modal-body) {
  overflow: hidden;
}
.navigation-wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
}
:deep(.navigation-wrapper button) {
  background-color: bisque;
  border-radius: 50%;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  background-color: bisque;
  border-radius: 50%;
  height: 25px;
  width: 25px;
}
:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 16px;
  color: black;
}

:deep(.swiper-button-prev::after) {
  transform: translateX(-2px);
}
:deep(.swiper-button-next::after) {
  transform: translateX(2px);
}

.content-wrapper {
  max-height: 600px;
  overflow-y: auto;
}
.text-wrapper {
  position: relative;
}

@media screen(lg) {
  .content-wrapper {
    max-height: unset;
    height: 500px;
  }
  .image-wrapper {
    max-width: 500px;
  }
  .text-wrapper {
    min-height: 100%;
    padding-right: 50px;
    overflow-y: auto;
    overflow-x: hidden;
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
