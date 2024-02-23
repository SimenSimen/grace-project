<script lang="ts" setup>
import { defineProps } from 'vue'
import * as ProductConst from './Contance'

const props = defineProps({
  type: String,
  cate: String
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
  [ProductConst.PUDDING_PINEAPPLE]: 'Pineapple',

  // coffee
  [ProductConst.COFFEE_BAHA]: 'Baha',
  [ProductConst.COFFEE_BEETHOVEN]: 'Beethoven',
  [ProductConst.COFFEE_BRAZIL]: 'Brazil',
  [ProductConst.COFFEE_CHOPIN]: 'Chopin',
  [ProductConst.COFFEE_CLASSICMANBADRIP]: 'ClassicManbaDrip',
  [ProductConst.COFFEE_GOLDENLTALY]: 'GoldenItaly',
  [ProductConst.COFFEE_GOLDENLTALY2]: 'GoldenItaly2',
  [ProductConst.COFFEE_HUEHUE]: 'HueHue',
  [ProductConst.COFFEE_MANDHELING]: 'Mandheling',
  [ProductConst.COFFEE_MOZART]: 'Mozart',
  [ProductConst.COFFEE_PRIVATEDRIP]: 'PrivateDrip',
  [ProductConst.COFFEE_SOUTHLTALY]: 'SouthItaly',
  [ProductConst.COFFEE_WINE]: 'Wine',
  [ProductConst.COFFEE_YIRGACHEFFEG1]: 'YirgacheffeG1',

  [ProductConst.SHAMPOO_BODY]: 'Body',
  [ProductConst.SHAMPOO_HAIR_ESSENCE]: 'HairEssence',
  [ProductConst.SHAMPOO_HAIR_PROTECT]: 'HairProtect',
  [ProductConst.SHAMPOO_HEAD_REPAIR]: 'HeadRepair',
  [ProductConst.SHAMPOO_HEAD_SAKURA]: 'HeadSakura',
  [ProductConst.SHAMPOO_SHAMPOO]: 'Shampoo',
  [ProductConst.SHAMPOO_SKIN]: 'Skin'
}

const imagepath = imageDatas[props.type || '']
let url = ''

if (props.cate === 'coffee') {
  url = new URL(`./coffee-images/${imagepath}.png`, import.meta.url).href
} else if (props.cate === 'shampoo') {
  url = new URL(`./shampoo-images/${imagepath}.jpg`, import.meta.url).href
} else {
  url = new URL(`./images/${imagepath}.png`, import.meta.url).href
}
// too 模糊
// const webpUrl = new URL(`./images/webp/${imagepath}.webp`, import.meta.url).href
// const phoneUrl = new URL(`./images/mobiles/${imagepath}.png`, import.meta.url).href
// console.log(phoneUrl,`./images/webp/${imagepath}.png`)
</script>

<template>
  <picture class="product-picture">
    <!-- <source :srcset="webpUrl" type="image/webp" /> -->
    <!-- <source :srcset="phoneUrl" media="(max-width: 992px)" /> -->
    <img class="w-full" :src="url" alt="產品圖" />
  </picture>
</template>
