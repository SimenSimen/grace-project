<script lang="ts" setup>
import { Transition, ref, defineExpose, watch } from 'vue'
const props = defineProps({
  value: {
    type: Boolean,
    default: false
  }
})

const show = ref(props.value)

function closeModal() {
  show.value = false
}

function openModal() {
  show.value = true
}

watch(show, (newValue) => {
  // handle the body scrolling
  if (newValue) {
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = 'fixed'
  } else {
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
})

defineExpose({
  closeModal,
  openModal
})
</script>

<template>
  <Transition name="modal-fade">
    <div class="app-modal modal-wrapper" v-if="show">
      <div class="modal-body rounded bg-white">
        <div class="modal-head nopadding">
          <img src="./close.svg" alt="close-button" class="close-button" @click="closeModal" />
        </div>

        <div class="modal-content">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="sass" scoped>
.modal-fade-enter-active,
.modal-fade-leave-active
  transition: opacity 0.5s ease


.modal-fade-enter-from,
.modal-fade-leave-to
  opacity: 0


.app-modal
  position: fixed
  width: 100vw
  height: 100vh
  top: 0
  left: 0
  z-index: 200
  display: flex
  align-items: center
  justify-content: center

  &.modal-wrapper
    background: rgba(0, 0, 0, 0.2)

  .modal-body
    position: relative
    width: fit-content
    max-height: 90%
    max-width: 90%
    overflow-y: auto
    overscroll-behavior: container
    transform: translate3d(0, 0, 0)
    // margin: auto

    // width: fit-content
    // height: fit-content
    // max-width: 80%
    // // max-height: 80%
    // overflow: scroll
    // scroll-behavior: container
    // margin: auto

  .modal-head
    position: relative
    z-index: 10
    display: flex
    align-items: center
    width: fit-content
    position: absolute
    top: 10px
    right: 0
    padding-right: 10px

    &.nopadding
      height: 20px
    .close-button
      margin-left: auto
      width: 20px
      height: 20px
      cursor: pointer
</style>
