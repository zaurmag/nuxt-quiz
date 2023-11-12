<template>
  <div class="test__start">
    <div class="test__start-content is-hide" ref="content">
      <h1 class="test__start-title">Заголовок</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nobis,
        obcaecati. Atque, doloremque iure iusto libero molestiae officiis quia
        voluptas.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi at
        consequatur, culpa cumque dolore dolores dolorum eveniet nulla numquam
        officia officiis optio praesentium quisquam quo, quos, vero voluptate?
        Perferendis.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        cupiditate deserunt fuga recusandae sed ut.</p>

      <button class="test__start-start-btn" @click="$emit('start')">Start test</button>
    </div>

    <div class="test__start-image">
      <nuxt-img src="/images/test/start-screen-image.webp" width="400" />
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

defineEmits(['start'])

const content = ref(null)

const gsapClearProps = ($item) => {
  gsap.killTweensOf($item);
  gsap.set($item, {clearProps: 'all'});
  $item.removeAttribute('style');
}

onMounted(() => {
  const animationOptions = {
    ease: 'Power3.easeOut',
    transition: 'none',
    yPercent: -10,
    alpha: 0,
    duration: 0.6,
    onStart() {
      content.value.classList.remove('is-hide')
    },
    onComplete() {
      gsapClearProps(content.value)
    }
  }

  gsap.from(content.value, animationOptions)
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
    grid-gap: 15px
    //opacity: 0
    //transform: translateY(-25%)

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
