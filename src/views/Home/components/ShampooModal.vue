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

const productData = {
  [ProductConst.SHAMPOO_BODY]: '',
  [ProductConst.SHAMPOO_SKIN]: '',
  [ProductConst.SHAMPOO_SHAMPOO]: '',
  [ProductConst.SHAMPOO_HAIR_PROTECT]: '',
  [ProductConst.SHAMPOO_HAIR_ESSENCE]: '',
  [ProductConst.SHAMPOO_HEAD_SAKURA]: '',
  [ProductConst.SHAMPOO_HEAD_REPAIR]: ''
}

const modalRef: any = ref(null)
const autoplaySetting = ref(0)

if (window.innerWidth > parseInt(SCREENS.lg)) {
  autoplaySetting.value = 4000
}

function openModal() {
  modalRef.value && modalRef.value.openModal()
}

defineExpose({
  openModal
})
</script>

<template>
  <Modal class="coffee-product-modal" ref="modalRef">
    <div class="slide-wrapper">
      <swiper :modules="[Navigation]" navigation>
        <template v-for="(value, key) in productData" :key="`wraooer-er-${key}`">
          <swiper-slide>
            <div class="content-wrapper">
              <div class="product-wrapper flex flex-col lg:flex-row h-full">
                <div class="image-wrapper">
                  <ProductFirst class="" cate="shampoo" :type="key" />
                </div>

                <div class="product-modal-text-wrapper text-wrapper flex-1 p-2 lg:p-4 pt-3 lg:pt-2 text-left">
                  <div class="relative min-h-full">
                    <ProductText cate="shampoo" :type="key" />

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

            <!-- <div class="label rounded"></div> -->
          </swiper-slide>
        </template>

        <!-- </carousel> -->
      </swiper>
    </div>
  </Modal>
</template>

<style scoped>
.navigation-wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
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
