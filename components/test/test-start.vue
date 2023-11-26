<template>
  <div class="test__start" ref="rootContainer">
    <div class="test__start-content">
      <h1 class="test__start-title js-animation is-hidden">
        На сколько хорошо ты знаешь таблицу умножения?
      </h1>

      <div class="js-animation is-hidden">
        <p>В данном тесте определим насколько хорошо ты учил таблицу умножения в начальных классах. </p>

        <p>А может ты прогуливал школу и не делал уроки? Сейчас узнаем, о твоих способностях...</p>
      </div>

      <button class="test__start-start-btn js-animation is-hidden" @click="$emit('start')">Начать тест</button>
    </div>

    <div class="test__start-image is-hidden" ref="animationImg">
      <img src="/images/test/start-screen-image.webp" width="400" alt="" />
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { gsapClearProps } from '../../helpers/animation'
import { onMounted, ref } from 'vue'

defineEmits(['start'])

const rootContainer = ref(null)
const animationImg = ref(null)

onMounted(() => {
  const $animations = Array.from(rootContainer.value.querySelectorAll('.js-animation'))

  gsap.from($animations, {
    autoAlpha: 0,
    y: '50px',
    ease: 'Power3.easeOut',
    transition: 'none',
    duration: 1.4,
    stagger: 0.1,
    delay: 0.5,
    onStart() {
      $animations.forEach($el => {
        $el.classList.remove('is-hidden');
      })
    },
    onComplete() {
      gsapClearProps($animations)
    }
  })

  gsap.from(animationImg.value, {
    autoAlpha: 0,
    ease: 'Power3.easeOut',
    transition: 'none',
    duration: 1.4,
    delay: 0.8,
    onStart() {
      if (animationImg.value) {
        animationImg.value.classList.remove('is-hidden')
      }
    },
    onComplete() {
      gsapClearProps(animationImg.value)
    }
  })
})

</script>

<style lang="sass" scoped>
.test__start
  display: grid
  grid-auto-flow: column
  grid-gap: 20px

  &-content
    display: grid
    align-content: start
    justify-items: start
    grid-gap: 2rem

  &-start-btn
    background-color: $blue
    padding: 10px 30px
    font-size: 16px
    color: $white
    cursor: pointer
    border: none
    border-radius: 25px
    height: 50px
    min-width: 200px
    transition: background-color .2s ease

    &:hover
      background-color: darken($blue, 10%)
</style>
