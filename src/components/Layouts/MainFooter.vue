<script lang="ts" setup>
import { computed } from 'vue'

const year = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <footer class="main-footer pt-20">
    <page-container class="pt-8">
      <!-- <h1 class="mb-16 text-6xl text-center font-bold text-primary">鶴岡家生活館</h1> -->

      <div class="grid grid-cols-4">
        <div class="grid grid-cols-2 col-start-2 col-span-3">
          <div class="info-area">
            <h2 class="text-xl text-primary font-bold mb-2">聯絡方式</h2>

            <div class="mb-2">聯絡電話：(04)2532-5467</div>
            <div class="mb-2">E-mail：k0425325467</div>
            <div class="mb-2 underline">聯絡地址：臺中市潭子區大智街15巷2弄9號</div>
            <!-- <div>營業時間：週一至週五，早上10點至下午5點</div> -->
            <!-- <div>電子郵件：l2n9house@gmail.com</div> -->
            <div>統一編號：94082551</div>
          </div>

          <div>
            <h2 class="text-xl text-primary font-bold mb-2">更多連結</h2>
            <div class="mb-2">
              <a class="underline" href="#">購物須知</a>
            </div>
            <div class="mb-2">
              <a class="underline" href="#">常見問題</a>
            </div>
            <div>
              <a class="underline" href="#">異業合作</a>
            </div>
          </div>
        </div>

        <div class="col-start-2 col-span-2 mt-12">
          <div class="social-media-area flex gap-4 justify-center mb-6">
            <a href="#">
              <img class="w-8" src="@/assets/icons/ig-1.svg" alt="instgram" />
            </a>

            <a href="#">
              <img class="w-8" src="@/assets/icons/fb-1.svg" alt="facebook" />
            </a>

            <a href="#">
              <img class="w-8" src="@/assets/icons/line-1.svg" alt="facebook" />
            </a>
          </div>

          <div class="copyright text-center">
            <p class="text-lg">&copy; {{ year }} 鶴岡家有限公司 版權所有</p>
          </div>
        </div>
      </div>
    </page-container>
  </footer>
</template>

<style lang="sass" scoped>
.main-footer
    background-color: #ddd1c4
    height: 400px
</style>
