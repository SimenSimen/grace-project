<script lang="ts" setup>
import ProductCard from '@/components/ProductCard/ProductCard.vue'

defineProps({
  title: String,
  products: Array
})
</script>

<template>
  <div class="product-cate-area">
    <h1 class="pl-4 product-cate-title text-2xl text-primary font-bold flex items-center">
      <span class="bar"></span>
      <span>{{ title }}</span>
    </h1>

    <div class="mt-8 grid grid-cols-4 gap-4"></div>
  </div>
</template>

<style lang="sass" scoped>

.product-cate-title
    .bar
        width: 4px
        background-color: theme('colors.primary')
        height: 18px
        margin-right: 7px
        display: inline-block
</style>
