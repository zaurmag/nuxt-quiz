<template>
  <div class="page" v-cloak>
    <base-header ref="header" />

    <main class="page__test">
      <div class="container">
        <test />
      </div>
    </main>

    <base-footer ref="footer" />
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { gsapClearProps } from '@/helpers/animation'
import { onMounted } from 'vue'

  useSeoMeta({
    title: 'На сколько хорошо ты знаешь таблицу умножения?',
  })

  const header = ref(null)
  const footer = ref(null)

  onMounted(() => {
    const animationElements = [header.value.$el, footer.value.$el]

    gsap.from(animationElements, {
      autoAlpha: 0,
      ease: 'Power3.easeOut',
      transition: 'none',
      duration: 1.4,
      onStart() {
        animationElements.forEach($item => {
          $item.classList.remove('is-hidden');
        })
      },
      onComplete() {
        gsapClearProps(animationElements)
      }
    })
  })
</script>

<style lang="sass" scoped>
  .page
    display: grid
    grid-template-rows: auto 1fr auto
    align-items: center
    height: 100vh

  [v-cloak]
    display: none
</style>
