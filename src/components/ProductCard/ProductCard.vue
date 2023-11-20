<script lang="ts" setup>
const imageSize = 'w-60 h-60'
</script>

<template>
  <div class="product-card">
    <div :class="['image-wrapper mb-2', imageSize]">
      <img :class="[imageSize]" src="./test/test.jpg" alt="product-image" />
    </div>

    <div class="caption-wrapper text-base text-primary">布丁粉</div>
  </div>
</template>

<style lang="sass" scoped></style>
