<script lang="ts" setup>
import { defineProps } from 'vue'
import * as ProductConst from './Contance'

const props = defineProps({
  type: String
})

const imageDatas = {
  [ProductConst.PUDDING_BLACK_SUGAR]: 'BlackSugar.png',
  [ProductConst.PUDDING_CANTALOUPE]: 'Cantaloupe.png',
  [ProductConst.PUDDING_CHOCOLATE]: 'Chocolate.png',
  [ProductConst.PUDDING_COFFEE]: 'Coffee.png',
  [ProductConst.PUDDING_EGG]: 'Egg.png',
  [ProductConst.PUDDING_GRAPE]: 'Grape.png',
  [ProductConst.PUDDING_GREEN_TEA]: 'GreenTea.png',
  [ProductConst.PUDDING_MONGO]: 'Mongo.png',
  [ProductConst.PUDDING_PANNA_COTTA]: 'PannaCotta.png',
  [ProductConst.PUDDING_PEACH]: 'Peach.png',
  [ProductConst.PUDDING_STRAWBERRY]: 'Strawberry.png',
  [ProductConst.PUDDING_PINEAPPLE]: 'Pineapple.png'
}

const url = new URL('./images/' + (imageDatas[props.type] || ''), import.meta.url).href
</script>

<template>
  <img :src="url" alt="產品圖" />
</template>
