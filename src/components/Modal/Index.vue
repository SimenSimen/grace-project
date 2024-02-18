<script lang="ts" setup>
import { Transition, ref, defineExpose } from 'vue'
const show = ref(true)

function closeModal() {
  show.value = false
}

function openModal() {
  show.value = true
}

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

  &.modal-wrapper
    background: rgba(0, 0, 0, 0.2)

  .modal-body
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    width: 80%
    height: fit-content
    max-height: 80%
    overflow: scroll
    margin: auto

  .modal-head
    position: relative
    z-index: 10
    display: flex
    align-items: center
    width:100%
    position: absolute
    top: 10px
    left: 0
    padding-right: 10px

    &.nopadding
      height: 20px
    .close-button
      margin-left: auto
      width: 20px
      height: 20px
      cursor: pointer
</style>
