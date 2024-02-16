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

const props = defineProps({
  type: String
})

const compopnentDatas = {
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
}

const componentDy = compopnentDatas[props.type || '']
</script>

<template>
  <component v-if="componentDy" :is="componentDy" />
</template>
