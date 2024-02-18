<script lang="ts" setup>
import { ref, defineExpose } from 'vue'
import Modal from '@/components/Modal/Index.vue'
import ProductFirst from '@/components/Products/ProductFirst.vue'
import ProductText from '@/components/Products/ProductText.vue'
import * as ProductConst from '@/components/Products/Contance'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

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
    <carousel :autoplay="0">
      <template v-for="value in productTypes" :key="`wraooer-er-${value}`">
        <slide>
          <div class="product-wrapper flex w-full">
            <div class="image-wrapper">
              <ProductFirst class="" :type="value" />
            </div>

            <div class="text-wrapper flex-1 p-4 text-left">
              <div class="body">
                <ProductText :type="value" />
              </div>
            </div>
          </div>

          <div class="label rounded">

          </div>
        </slide>
      </template>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </Modal>
</template>

<style scoped>
.image-wrapper {
  height: 500px;
}
.text-wrapper {
  min-width: 400px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>
