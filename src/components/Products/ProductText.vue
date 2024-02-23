<script lang="ts" setup>
import { defineProps } from 'vue'
import * as ProductConst from './Contance'
import BlackSugarText from './txt/BlackSugarText.vue'
import CantaloupeText from './txt/CantaloupeText.vue'
import ChocolateText from './txt/ChocolateText.vue'
import CoffeeText from './txt/CoffeeText.vue'
import EggText from './txt/EggText.vue'
import GrapeText from './txt/GrapeText.vue'
import GreenTeaText from './txt/GreenTeaText.vue'
import MongoText from './txt/MongoText.vue'
import PannaCottaText from './txt/PannaCottaText.vue'
import PeachText from './txt/PeachText.vue'
import PineappleText from './txt/PineappleText.vue'
import StrawberryText from './txt/StrawberryText.vue'

//
import BahaText from './coffee-txt/Baha.vue'
import BeethvenText from './coffee-txt/Beethven.vue'
import BrazilText from './coffee-txt/Brazil.vue'
import ChopinText from './coffee-txt/Chopin.vue'
import ClassicManbaDripText from './coffee-txt/ClassicManbaDrip.vue'
import GoldenItalyText from './coffee-txt/GoldenItaly.vue'
import GoldenItaly2Text from './coffee-txt/GoldenItaly2.vue'
import HueHueText from './coffee-txt/HueHue.vue'
import MandhelingText from './coffee-txt/Mandheling.vue'
import MozartText from './coffee-txt/Mozart.vue'
import PrivateDripText from './coffee-txt/PrivateDrip.vue'
import SouthItalyText from './coffee-txt/SouthItaly.vue'
import WineText from './coffee-txt/Wine.vue'
import YirgacheffeG1Text from './coffee-txt/YirgacheffeG1.vue'

//

import ShampooBodyText from './shampoo-txt/Body.vue'
import HairEssenceText from './shampoo-txt/HairEssence.vue'
import HairProtectText from './shampoo-txt/HairProtect.vue'
import HeadRepairText from './shampoo-txt/HeadRepair.vue'
import HeadSakuraText from './shampoo-txt/HeadSakura.vue'
import ShampooText from './shampoo-txt/Shampoo.vue'
import SkinText from './shampoo-txt/Skin.vue'

const props = defineProps({
  type: String,
  cate: String
})

const compopnentDatas: { [key: string]: any } = {
  [ProductConst.PUDDING_BLACK_SUGAR]: BlackSugarText,
  [ProductConst.PUDDING_CANTALOUPE]: CantaloupeText,
  [ProductConst.PUDDING_CHOCOLATE]: ChocolateText,
  [ProductConst.PUDDING_COFFEE]: CoffeeText,
  [ProductConst.PUDDING_EGG]: EggText,
  [ProductConst.PUDDING_GRAPE]: GrapeText,
  [ProductConst.PUDDING_GREEN_TEA]: GreenTeaText,
  [ProductConst.PUDDING_MONGO]: MongoText,
  [ProductConst.PUDDING_PANNA_COTTA]: PannaCottaText,
  [ProductConst.PUDDING_PEACH]: PeachText,
  [ProductConst.PUDDING_PINEAPPLE]: PineappleText,
  [ProductConst.PUDDING_STRAWBERRY]: StrawberryText

  // coffee
}

const compopnentCoffeeDatas: { [key: string]: any } = {
  [ProductConst.COFFEE_BAHA]: BahaText,
  [ProductConst.COFFEE_BEETHOVEN]: BeethvenText,
  [ProductConst.COFFEE_BRAZIL]: BrazilText,
  [ProductConst.COFFEE_CHOPIN]: ChopinText,
  [ProductConst.COFFEE_CLASSICMANBADRIP]: ClassicManbaDripText,
  [ProductConst.COFFEE_GOLDENLTALY]: GoldenItalyText,
  [ProductConst.COFFEE_GOLDENLTALY2]: GoldenItaly2Text,
  [ProductConst.COFFEE_HUEHUE]: HueHueText,
  [ProductConst.COFFEE_MANDHELING]: MandhelingText,
  [ProductConst.COFFEE_MOZART]: MozartText,
  [ProductConst.COFFEE_PRIVATEDRIP]: PrivateDripText,
  [ProductConst.COFFEE_SOUTHLTALY]: SouthItalyText,
  [ProductConst.COFFEE_WINE]: WineText,
  [ProductConst.COFFEE_YIRGACHEFFEG1]: YirgacheffeG1Text
}

// shampoo
const compopnentShampooDatas: { [key: string]: any } = {
  [ProductConst.SHAMPOO_BODY]: ShampooBodyText,
  [ProductConst.SHAMPOO_HAIR_ESSENCE]: HairEssenceText,
  [ProductConst.SHAMPOO_HAIR_PROTECT]: HairProtectText,
  [ProductConst.SHAMPOO_HEAD_REPAIR]: HeadRepairText,
  [ProductConst.SHAMPOO_HEAD_SAKURA]: HeadSakuraText,
  [ProductConst.SHAMPOO_SHAMPOO]: ShampooText,
  [ProductConst.SHAMPOO_SKIN]: SkinText
}

let componentDy: any = null

if (props.cate === 'coffee') {
  componentDy = compopnentCoffeeDatas[props.type || '']
} else if (props.cate === 'shampoo') {
  componentDy = compopnentShampooDatas[props.type || '']
} else {
  componentDy = compopnentDatas[props.type || '']
}
</script>

<template>
  <component v-if="componentDy" :is="componentDy" />
</template>
