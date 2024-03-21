<script lang="ts" setup>
import { ref } from 'vue'
import { PhoneIcon } from '@heroicons/vue/24/solid'
import Modal from '@/components/Modal/Index.vue'
import { INFO_TEL, INFO_LINE_ID } from '@/constance/Infomation'
import { SCREENS } from '@/TailwindConfig'

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
    image: new URL('../images/CLASS_1.png', import.meta.url).href,
    imageWeb: new URL('../images/CLASS_1.webp', import.meta.url).href,
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
    image: new URL('../images/CLASS_2.png', import.meta.url).href,
    imageWeb: new URL('../images/CLASS_2.webp', import.meta.url).href,
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
    image: new URL('../images/CLASS_3.png', import.meta.url).href,
    imageWeb: new URL('../images/CLASS_3.webp', import.meta.url).href,
    type: 'tea',
    datas: [
      {
        title: '純茶系列',
        tag: '盒裝',
        tagClass: 'bg-yellow-300',
        datas: [
          { displayName: '紅茶' }, //
          { displayName: '綠茶' }, //
          { displayName: '烏龍茶' }
        ]
      },
      {
        title: '純茶系列',
        tag: '袋裝',
        tagClass: 'bg-lime-400',
        datas: [
          { displayName: '台灣綠茶' }, //
          { displayName: '台灣紅茶' } //
        ]
      },
      {
        title: '調味茶系列',
        tag: '袋裝',
        tagClass: 'bg-lime-400',
        datas: [
          { displayName: '麥香紅茶' }, //
          { displayName: '咖啡紅茶' }, //
          { displayName: '伯爵紅茶' }, //
          { displayName: '清新綠茶' } //
        ]
      }
    ]
  },

  ['CLASS_4']: {
    displayName: '糖漿',
    bg: 'rgb(73, 32, 15)',
    tx: 'white',
    image: new URL('../images/CLASS_4.png', import.meta.url).href,
    imageWeb: new URL('../images/CLASS_4.webp', import.meta.url).href,
    type: '1',
    remark: 'snow',
    datas: [
      { displayName: '黑糖漿' }, //
      { displayName: '桂圓紅棗', icon: 'snow' }, //
      { displayName: '黑糖薑母', icon: 'snow' } //
    ]
  },
  ['CLASS_5']: {
    displayName: '濃縮汁',
    bg: 'rgb(73, 32, 15)',
    tx: 'white',
    image: new URL('../images/CLASS_5.png', import.meta.url).href,
    imageWeb: new URL('../images/CLASS_5.webp', import.meta.url).href,
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
    image: new URL('../images/CLASS_6.png', import.meta.url).href,
    imageWeb: new URL('../images/CLASS_6.webp', import.meta.url).href,
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
    image: new URL('../images/CLASS_7.png', import.meta.url).href,
    imageWeb: new URL('../images/CLASS_7.webp', import.meta.url).href,
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
    <div class="product-modal-tab-wrapper overflow-auto">
      <ul class="product-modal-tab flex font-medium text-center text-gray-500">
        <template v-for="classValue in productClass" :key="`wraooer-er-class-${classValue}`">
          <li class="tab-element cursor-pointer" @click="() => clickTab(classValue)">
            <a
              href="javascript:void(0);"
              aria-current="page"
              :class="['link', currentClass === classValue && 'font-bold active']"
              :style="{
                background:
                  currentClass === classValue ? productClassData[classValue].bg : undefined,
                color: currentClass === classValue ? productClassData[classValue].tx : undefined
              }"
            >
              {{ productClassData[classValue].displayName }}
            </a>
          </li>
        </template>
      </ul>
    </div>

    <template v-for="classValue in productClass" :key="`wraooer-er-class-slide-${classValue}`">
      <div v-if="classValue === currentClass">
        <!-- :touch-drag="false" -->

        <!-- <slide style="align-items: start"> -->
        <div class="content-wrapper flex flex-col lg:flex-row h-full">
          <div class="image-wrapper">
            <picture>
              <source :srcset="productClassData[classValue].imageWebp" type="image/webp" />
              <img class="w-full" :src="productClassData[classValue].image" alt="布丁類別圖" />
            </picture>
          </div>

          <div
            class="product-modal-text-wrapper text-wrapper flex-1 p-2 lg:p-4 pt-3 lg:pt-2 text-left"
          >
            <div class="relative min-h-full">
              <template v-if="productClassData[classValue].type === '1'">
                <div>
                  <div class="product-desc-type-1">
                    <h3
                      v-for="(dData, indexData) in productClassData[classValue].datas"
                      class="font-bold text-lg mb-1 text-blue-700 flex items-center"
                      :key="`daadskopdakosd-${indexData}`"
                    >
                      <div class="text-bar mr-1"></div>
                      <span>{{ dData.displayName }}</span>

                      <div v-if="dData.icon === 'snow'" class="w-6 h-6">
                        <img src="../images/snow.svg" alt="" />
                      </div>
                    </h3>
                  </div>
                </div>
              </template>

              <!-- tea -->
              <template v-else-if="productClassData[classValue].type === 'tea'">
                <template
                  v-for="(dData, indexData) in productClassData[classValue].datas"
                  :key="`daadskopdakosasdasdd-${indexData}`"
                >
                  <div>
                    <h1 class="my-4">
                      <span class="font-bold text-2xl lg:text-4xl text-blue-700">
                        {{ dData.title }}
                      </span>
                      <span :class="['tag rounded-full px-2 text-2xl ml-3', dData.tagClass]">
                        {{ dData.tag }}
                      </span>
                    </h1>

                    <h3
                      v-for="(d2Data, indexDDD) in dData.datas"
                      class="font-bold text-lg mb-1 text-blue-700 flex items-center"
                      :key="`daadskopdakosasdadddsdd-${indexDDD}`"
                    >
                      <div class="text-bar mr-1"></div>
                      <span>{{ d2Data.displayName }}</span>
                    </h3>
                  </div>
                </template>
              </template>
              <br /><br />

              <template v-if="productClassData[classValue].remark === 'snow'">
                <br /><br /><br /><br />
              </template>

              <div class="action">
                <template v-if="productClassData[classValue].remark === 'snow'">
                  <div class="remark flex items-center mb-2">
                    <div class="w-6 h-6 inline-block">
                      <img src="../images/snow.svg" alt="" />
                    </div>
                    <span class="text-lg text-gray-700">為冬季限定</span>
                  </div>
                </template>
                <div class="flex">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- tea -->
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
    max-width: 550px;
    width: 100vw;
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

.product-modal-tab-wrapper {
  margin-right: 37px;
}
</style>
