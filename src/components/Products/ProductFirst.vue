<script lang="ts" setup>
import { defineProps } from 'vue'
import * as ProductConst from './Contance'

const props = defineProps({
  type: String
})

const imageDatas: { [key: string]: string } = {
  [ProductConst.PUDDING_BLACK_SUGAR]: 'BlackSugar',
  [ProductConst.PUDDING_CANTALOUPE]: 'Cantaloupe',
  [ProductConst.PUDDING_CHOCOLATE]: 'Chocolate',
  [ProductConst.PUDDING_COFFEE]: 'Coffee',
  [ProductConst.PUDDING_EGG]: 'Egg',
  [ProductConst.PUDDING_GRAPE]: 'Grape',
  [ProductConst.PUDDING_GREEN_TEA]: 'GreenTea',
  [ProductConst.PUDDING_MONGO]: 'Mongo',
  [ProductConst.PUDDING_PANNA_COTTA]: 'PannaCotta',
  [ProductConst.PUDDING_PEACH]: 'Peach',
  [ProductConst.PUDDING_STRAWBERRY]: 'Strawberry',
  [ProductConst.PUDDING_PINEAPPLE]: 'Pineapple'
}

const imagepath = imageDatas[props.type || '']
const url = new URL(`./images/${imagepath}.png`, import.meta.url).href
// const phoneUrl = new URL(`./images/mobiles/${imagepath}.png`, import.meta.url).href
</script>

<template>
  <picture class="product-picture">
    <!-- <source :srcset="phoneUrl" media="(max-width: 992px)" /> -->
    <img :src="url" alt="產品圖" />
  </picture>
</template>
