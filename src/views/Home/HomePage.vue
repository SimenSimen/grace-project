<script setup lang="ts">
import ProductCate from './ProductCate.vue'
</script>

<template>
  <main>
    <div class="banner">
      <img class="w-full" src="@/assets/images/banners/banner-1.png" alt="" />
    </div>

    <page-container class="">
      <br /><br /><br /><br />
      <product-cate class="mb-12" title="鶴岡食品日式系列 - 布丁粉 / 果凍粉 / 奶酪" />
      <product-cate class="mb-12" title="鶴岡食品咖啡 - 綜合豆" />
      <product-cate title="鶴岡洗護 - 洗護用品" />
      <br /><br /><br /><br />
    </page-container>
  </main>

  <main-footer />
</template>
