<template>
  <div class="test__question">
    <div class="test__question-image">
      <nuxt-img src="/images/test/start-screen-image.webp" width="400" />
    </div>

    <div class="test__question-content">
      <div class="test__question-step">1 / 3</div>

      <h2 class="test__question-title">Заголовок вопроса</h2>

      <div class="test__question-answers">
        <div class="test__question-variant">
          <button class="btn test__question-variant-btn">Вариант ответа 1</button>
          <p class="test__question-variant-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum expedita laboriosam nesciunt repellendus voluptatum!</p>
        </div>

        <div class="test__question-variant">
          <button class="btn test__question-variant-btn">Вариант ответа 2</button>
          <p class="test__question-variant-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum expedita laboriosam nesciunt repellendus voluptatum!</p>
        </div>

        <div class="test__question-variant">
          <button class="btn test__question-variant-btn">Вариант ответа 3</button>
          <p class="test__question-variant-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum expedita laboriosam nesciunt repellendus voluptatum!</p>
        </div>
      </div>

      <button class="btn test__question-next-btn">Далее</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang="sass">
.test__question
  display: grid
  grid-gap: 2rem
  grid-auto-flow: column

  &-content
    display: flex
    flex-direction: column
    gap: 1rem

  &-next-btn
    margin-top: auto
    background-color: $blue
    padding: 10px 30px
    font-size: 16px
    color: $white
    border-radius: 25px
    height: 50px
    width: 200px

    &:hover
      background-color: darken($blue, 10%)

  &-answers
    display: grid
    grid-gap: 1rem

  &-variant
    display: grid
    grid-gap: 0.5rem
    justify-items: start

    &-btn
      padding-left: 1rem
      padding-right: 1rem
      height: 2rem

      &:hover
        background-color: darken($gray, 10%)
</style>
