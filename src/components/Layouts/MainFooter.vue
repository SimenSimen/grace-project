<script lang="ts" setup>
import { computed } from 'vue'
import { INFO_LINE_ID, INFO_FACEBOOK_URL } from '@/constance/Infomation'

const year = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer class="main-footer">
    <page-container class="pl-4 pt-4 lg:pl-0 lg:pt-8">
      <!-- <h1 class="mb-16 text-6xl text-center font-bold text-primary">鶴岡家生活館</h1> -->
      <div class="text-center pb-8 pt-6 lg:pb-12">
        <h1 class="text-3xl font-bold text-yellow-900" style="letter-spacing: 5px">
          鶴岡家有限公司
        </h1>
        <h2 class="text-md text-center text-gray-500">TSURUOKAKYO CO ., LTD.</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:col-start-2 lg:col-span-3">
          <div class="info-area mb-8 lg:mb-0">
            <h2 class="text-2xl text-primary font-bold mb-2">聯絡方式</h2>

            <div class="mb-2">聯絡電話：<a href="tel:04-25325467">(04)2532-5467</a></div>
            <div class="mb-2">E-mail：k0425325467@yahoo.com.tw</div>
            <div class="mb-2 underline">聯絡地址：臺中市潭子區大智街15巷2弄9號</div>
            <!-- <div>營業時間：週一至週五，早上10點至下午5點</div> -->
            <!-- <div>電子郵件：l2n9house@gmail.com</div> -->
            <div>統一編號：94082551</div>
          </div>

          <div>
            <h2 class="text-2xl text-primary font-bold mb-2">更多連結</h2>
            <!-- <div class="mb-2 text-xl">
              <a class="underline" href="javascript:void(0);" @click="$emit('on-more-product')">
                更多商品
              </a>
            </div> -->
            <div class="mb-2 text-xl">
              <a class="underline" href="#">常見問題</a>
            </div>
            <div class="text-xl">
              <a class="underline" href="#">異業合作</a>
            </div>
          </div>
        </div>

        <div class="lg:col-start-2 lg:col-span-2 mt-12">
          <div class="social-media-area flex gap-4 justify-center mb-6">
            <a href="javascript:void(0);">
              <img class="w-8" src="@/assets/icons/ig-1.svg" alt="instgram" />
            </a>

            <a :href="INFO_FACEBOOK_URL" target="_blank">
              <img class="w-8" src="@/assets/icons/fb-1.svg" alt="facebook" />
            </a>

            <a :href="`https://line.me/R/ti/p/${INFO_LINE_ID}`" target="_blank">
              <img class="w-8" src="@/assets/icons/line-1.svg" alt="facebook" />
            </a>
          </div>

          <div class="copyright text-center mb-4">
            <p class="text-sm">&copy; {{ year }} 鶴岡家有限公司 版權所有</p>
          </div>
        </div>
      </div>
    </page-container>
  </footer>
</template>

<style scoped>
@media screen(lg) {
  .main-footer {
    min-height: 400px;
  }
}
</style>
<style lang="scss" scoped>
.main-footer {
  background-color: #ddd1c4;
  // @apply p-2;
}
</style>
