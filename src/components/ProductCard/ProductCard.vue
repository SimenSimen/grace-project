<script lang="ts" setup>
defineProps({
  title: { type: String, default: '布丁粉' },
  pic: { type: String, default: new URL('./test/test.jpg', import.meta.url).href }
})

const imageSize = 'w-60 h-60'
</script>

<template>
  <div class="product-card">
    <div :class="['image-wrapper mb-2', imageSize]">
      <img :class="[imageSize]" :src="pic" alt="product-image" />
    </div>

    <div class="caption-wrapper text-base text-primary">{{ title }}</div>
  </div>
</template>

<style lang="sass" scoped>
.image-wrapper
  background: #dfdfdf
  border-radius: 5px

</style>
