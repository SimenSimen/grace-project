<script lang="ts" setup>
import { ref } from 'vue'
import { PhoneIcon } from '@heroicons/vue/24/solid'
import Modal from '@/components/Modal/Index.vue'
import ProductFirst from '@/components/Products/ProductFirst.vue'
import ProductText from '@/components/Products/ProductText.vue'
import * as ProductConst from '@/components/Products/Contance'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { INFO_TEL, INFO_LINE_ID } from '@/constance/Infomation'
import { SCREENS } from '@/TailwindConfig'

const productTypes = ref([])

const productClass = ref([
  ProductConst.PUDDING_CLASS_PUDDING,
  ProductConst.PUDDING_CLASS_JELLY,
  ProductConst.PUDDING_CLASS_PANNA_COTTA
])

const productClassData = ref<any>({
  [ProductConst.PUDDING_CLASS_PUDDING]: {
    displayName: '布丁',
    bg: '#f2f2f2',
    tx: '#000000',
    datas: [
      ProductConst.PUDDING_CANTALOUPE,
      ProductConst.PUDDING_CHOCOLATE,
      ProductConst.PUDDING_EGG,
      ProductConst.PUDDING_MONGO,
      ProductConst.PUDDING_STRAWBERRY,
      ProductConst.PUDDING_PEACH
    ]
  },
  [ProductConst.PUDDING_CLASS_JELLY]: {
    displayName: '果凍',
    bg: '#f2f2f2',
    tx: '#000000',
    datas: [
      ProductConst.PUDDING_BLACK_SUGAR,
      ProductConst.PUDDING_COFFEE,
      ProductConst.PUDDING_GRAPE,
      ProductConst.PUDDING_GREEN_TEA,
      ProductConst.PUDDING_PINEAPPLE
    ]
  },
  [ProductConst.PUDDING_CLASS_PANNA_COTTA]: {
    displayName: '奶酪',
    bg: '#f2f2f2',
    tx: '#000000',
    datas: [ProductConst.PUDDING_PANNA_COTTA]
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
  <Modal ref="modalRef">
    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500">
      <template v-for="classValue in productClass" :key="`wraooer-er-class-${classValue}`">
        <li class="cursor-pointer" @click="() => clickTab(classValue)">
          <a
            href="javascript:void(0);"
            aria-current="page"
            :class="[
              'inline-block p-2 px-4 lg:p-4 lg:px-8',
              currentClass === classValue && 'text-black bg-gray-100 font-bold active'
            ]"
            :style="{
              // background: currentClass === classValue && productClassData[classValue].bg,
              // color: currentClass === classValue && productClassData[classValue].tx
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
                  <ProductFirst class="" :type="value" />
                </div>

                <div class="text-wrapper flex-1 p-2 lg:p-4 pt-3 text-left">
                  <ProductText :type="value" />

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
  /* height: 500px; */
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
  left: 15px;
  bottom: 15px;
}

.slide-wrapper {
  max-width: 1050px;
}
</style>
