<script lang="ts" setup>
import { ref, defineExpose } from 'vue'
import { PhoneIcon } from '@heroicons/vue/24/solid'
import Modal from '@/components/Modal/Index.vue'
import ProductFirst from '@/components/Products/ProductFirst.vue'
import ProductText from '@/components/Products/ProductText.vue'
import * as ProductConst from '@/components/Products/Contance'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { INFO_TEL, INFO_LINE_ID } from '@/constance/Infomation'

const productTypes = ref([
  ProductConst.PUDDING_BLACK_SUGAR,
  ProductConst.PUDDING_CANTALOUPE,
  ProductConst.PUDDING_CHOCOLATE,
  ProductConst.PUDDING_COFFEE,
  ProductConst.PUDDING_EGG,
  ProductConst.PUDDING_GRAPE,
  ProductConst.PUDDING_GREEN_TEA,
  ProductConst.PUDDING_MONGO,
  ProductConst.PUDDING_PANNA_COTTA,
  ProductConst.PUDDING_PEACH,
  ProductConst.PUDDING_PINEAPPLE,
  ProductConst.PUDDING_STRAWBERRY
])

const modalRef: any = ref(null)

function openModal() {
  modalRef.value && modalRef.value.openModal()
}

defineExpose({
  openModal
})
</script>

<template>
  <Modal ref="modalRef">
    <div class="slide-wrapper">
      <carousel :autoplay="4000">
        <template v-for="value in productTypes" :key="`wraooer-er-${value}`">
          <slide>
            <div class="product-wrapper lg:flex">
              <div class="image-wrapper">
                <ProductFirst class="" :type="value" />
              </div>

              <div class="text-wrapper flex-1 p-4 pt-3 text-left">
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
  </Modal>
</template>

<style scoped>
.product-wrapper {
  max-height: 500px;
  overflow-y: auto;
}
.image-wrapper {
  /* height: 500px; */
}
.text-wrapper {
  min-height: 100%;
  padding-right: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}

.text-wrapper .action {
  position: absolute;
  left: 15px;
  bottom: 15px;
}

.slide-wrapper {
  max-width: 1050px;
}
</style>
