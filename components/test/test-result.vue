<template>
<section class="test__result">
  <div class="test__result-content">
    <header class="test__result-header">
      <nuxt-img class="test__result-header-img" src="/images/test/start-screen-image.webp" width="80" />

      <h2 class="test__result-title">Результат теста - заголовок</h2>
    </header>

    <div class="test__result-text">
      <p>
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </strong>
      </p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dicta
        doloribus error officiis quam qui!</p>
    </div>

    <button
      class="btn test__result-btn"
      @click="$emit('restart')"
    >
      Пройти еще раз
    </button>
  </div>

  <div class="test__result-image">
    <nuxt-img src="/images/test/start-screen-image.webp" width="400" />
  </div>
</section>
</template>

<script setup lang="ts">
defineEmits(['restart'])
</script>

<style scoped lang="sass">
.test__result
  display: grid
  grid-gap: 2rem
  grid-template-columns: 50% 50%

  &-content
    display: grid
    grid-gap: 1.5rem
    align-content: start
    justify-items: start

  &-text
    display: grid
    grid-gap: 0.5rem

  &-header
    display: grid
    grid-gap: 1rem
    grid-auto-flow: column
    grid-template-columns: auto 1fr
    align-items: start

  &-title
    font-size: 1.8rem

  &-btn
    background-color: $blue
    color: $white
    padding: 0.5rem 1rem

    &:hover
      background-color: darken($blue, 10%)
</style>
