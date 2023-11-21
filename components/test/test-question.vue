<template>
  <div class="test__question">
    <div class="test__question-image">
      <nuxt-img src="/images/test/start-screen-image.webp" width="500" />
    </div>

    <div class="test__question-content">
      <div class="test__question-step">{{ question.num }} / {{ totalQuestions }}</div>

      <h2 class="test__question-title">{{ question.title }}</h2>

      <div class="test__question-answers">
        <template
          v-for="variant in question.variants"
          :key="variant.id"
        >
          <div
            v-if="!activeVariantId || activeVariantId === variant.id"
            class="test__question-variant"
          >
            <button
              class="btn test__question-variant-btn"
              @click="selectVariant(variant.id)"
            >
              {{ variant.title }}
            </button>

            <p
              v-if="activeVariantId === variant.id"
              class="test__question-variant-caption"
            >
              {{ variant.desc }}
            </p>
          </div>
        </template>
      </div>

      <button
        v-if="activeVariantId"
        class="btn test__question-next-btn"
        @click="nextStep"
      >
        Далее
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface TestQuestionProps {
  question: IQuestion,
  totalQuestions: number
}

const props = defineProps<TestQuestionProps>()

const $emit = defineEmits<{
  (e: 'next', question: IQuestion): void
  (e: 'select-variant', variant: IQuestion): void
}>()

const activeVariantId = ref()

const selectVariant = (id: number) => {
  activeVariantId.value = id

  const currentVariant = props.question.variants.find((q: IQuestion) => q.id === id)

  $emit('select-variant', currentVariant)
}

const nextStep = () => {
  $emit('next', props.question)
  activeVariantId.value = null
}
</script>

<style scoped lang="sass">
.test__question
  display: grid
  grid-gap: 2rem
  grid-auto-flow: column
  grid-template-columns: 50% 50%

  &-image
    height: 100%
    width: 100%
    position: relative

    img
      object-fit: cover
      width: 100%
      height: 100%

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
