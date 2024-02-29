<script lang="ts" setup>
import { ref } from 'vue'
import Modal from '@/components/Modal/Index.vue'
import { INFO_TEL, INFO_LINE_ID } from '@/constance/Infomation'
import { PhoneIcon } from '@heroicons/vue/24/solid'

const modalRef: any = ref(null)

function openModal() {
  modalRef.value && modalRef.value.openModal()
}

defineExpose({
  openModal
})
</script>

<template>
  <Modal class="coffee-product-modal" ref="modalRef">
    <div class="product-wrapper p-4">
      <div class="text-wrapper text-lg text-gray-700">
        <h3 class="mb-2 flex items-center">
          <span class="text-xl mr-4">更多商品 歡迎聯繫</span>

          <a
            class="w-8 h-8 rounded-full outline outline-1 text-blue-500 outline-blue-500 flex items-center justify-center mr-5"
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
        </h3>
        <hr class="mb-2" />
        <p class="mb-2">原味奶茶粉</p>
        <p class="mb-2">原味咖啡粉/黑糖奶茶粉</p>
        <p class="mb-2">抹茶拿鐵粉/香濃可可粉</p>
        <p class="mb-2">卡布奇諾牛奶粉</p>
        <p class="mb-2">玫瑰果花果茶/日式仙草蜜汁粉 1:11</p>
        <p class="mb-2">日式和風水果茶粉/烏梅汁粉 1:11</p>
        <p class="mb-2">日式蔓越莓汁粉1:11</p>
        <p class="mb-2">檸檬紅茶/OK鬆餅粉(免加蛋)</p>
        <p class="mb-2">香草霜淇淋粉/巧克力(客製)</p>
        <p class="mb-2">黑糖漿(夏季)/桂圓紅棗/黑糖薑母(冬季)</p>
        <p class="mb-2">烤布蕾粉/進口貝妮奶精</p>
        <p class="mb-2">冷泡茶(台灣)/抹茶粉(鹿耳島)</p>
        <p class="mb-2">世家茶包 綠茶/紅茶/烏龍茶</p>
        <p class="mb-2">精選義式咖啡豆 (餐廳專用)</p>
        <p class="mb-2">顆粒果汁-柳橙,蘋果,紅柚,百香...</p>
        <p class="mb-2">濃縮果汁:冬瓜/葡萄/芒果/百香果/檸檬...</p>
        <p class="mb-2">福樹桂花烏梅汁6入/喜多烏梅汁8入</p>
        <p class="mb-2">麥香紅茶包/咖啡紅茶包/伯爵紅茶包</p>
      </div>
    </div>
  </Modal>
</template>

<style scoped>
.product-wrapper {
  /* min-width: 500px; */
}
</style>
