<template>
  <div class="test__start">
    <div class="test__start-content">
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

      <button class="test__start-start-btn">Start test</button>
    </div>

    <div class="test__start-image">
      <nuxt-img src="/images/test/start-screen-image.webp" width="400" />
    </div>
  </div>
</template>

<script setup></script>

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
    grid-row: 1 / 3

    &:hover
      background-color: darken($blue, 10%)
</style>
