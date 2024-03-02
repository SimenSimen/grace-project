<script lang="ts" setup>
import { ref, onMounted } from 'vue'
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
  'CLASS_1',
  'CLASS_2',
  'CLASS_3',
  'CLASS_4',
  'CLASS_5',
  'CLASS_6',
  'CLASS_7'
])

const productClassData = ref<any>({
  ['CLASS_1']: {
    displayName: '風味茶粉',
    bg: 'rgb(73, 32, 15)',
    tx: 'white',
    type: '1',
    datas: [
      { displayName: '原味奶茶' }, //
      { displayName: '原味咖啡' }, //
      { displayName: '黑糖奶茶' }, //
      { displayName: '香濃可可亞' }, //
      { displayName: '抹茶拿鐵' } //
    ]
  },
  ['CLASS_2']: {
    displayName: '果汁粉',
    bg: 'rgb(73, 32, 15)',
    tx: 'white',
    type: '1',
    datas: [
      { displayName: '玫瑰果茶' }, //
      { displayName: '仙草蜜' }, //
      { displayName: '水果茶' }, //
      { displayName: '烏梅汁' }, //
      { displayName: '檸檬紅茶' }, //
      { displayName: '蔓越莓果汁' } //
    ]
  },
  ['CLASS_3']: {
    displayName: '茶包',
    bg: 'rgb(73, 32, 15)',
    tx: 'white',
    datas: []
  },

  ['CLASS_4']: {
    displayName: '糖漿',
    bg: 'rgb(73, 32, 15)',
    tx: 'white',
    datas: []
  },
  ['CLASS_5']: {
    displayName: '濃縮汁',
    bg: 'rgb(73, 32, 15)',
    tx: 'white',
    type: '1',
    datas: [
      { displayName: '冬瓜' }, //
      { displayName: '葡萄' }, //
      { displayName: '芒果' }, //
      { displayName: '百香果' }, //
      { displayName: '檸檬' } //
    ]
  },
  ['CLASS_6']: {
    displayName: '果粒濃縮汁',
    bg: 'rgb(73, 32, 15)',
    tx: 'white',
    type: '1',
    datas: [
      { displayName: '柳橙' }, //
      { displayName: '蘋果' }, //
      { displayName: '桑葚' } //
    ]
  },
  ['CLASS_7']: {
    displayName: '其他粉類',
    bg: 'rgb(73, 32, 15)',
    tx: 'white',
    type: '1',
    datas: [
      { displayName: 'OK鬆餅粉' }, //
      { displayName: '香草霜淇淋' }, //
      { displayName: '卡布奇諾牛奶' }, //
      { displayName: '烤布蕾粉' }, //
      { displayName: '奶精' } //
    ]
  }
})

const currentClass = ref(productClass.value[0])
const modalRef: any = ref(null)
const autoplaySetting = ref(0)

if (window.innerWidth > parseInt(SCREENS.lg)) {
  autoplaySetting.value = 4000
}

// onMounted(() => {
//   openModal()
// })

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
    <ul class="flex flex-wrap font-medium text-center text-gray-500">
      <template v-for="classValue in productClass" :key="`wraooer-er-class-${classValue}`">
        <li class="cursor-pointer" @click="() => clickTab(classValue)">
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

        <!-- <slide style="align-items: start"> -->
        <div
          v-if="productClassData[classValue].type === '1'"
          class="content-wrapper flex flex-col lg:flex-row h-full"
        >
          <div
            class="product-modal-text-wrapper text-wrapper flex-1 p-2 lg:p-4 pt-3 lg:pt-2 text-left"
          >
            <div class="relative min-h-full">
              <div>
                <div class="product-desc-type-1">
                  <h3
                    v-for="(dData, indexData) in productClassData[classValue].datas"
                    class="font-bold text-lg mb-1 text-blue-700 flex items-center"
                    :key="`daadskopdakosd-${indexData}`"
                  >
                    <div class="text-bar mr-1"></div>
                    <span>{{ dData.displayName }}</span>
                  </h3>
                </div>
              </div>

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
