<template>
  <div class="test">
   <test-start v-if="isStart" @start="isStart = false" />

    <template v-else>
      <template
        v-for="question in questions"
        :key="question.id"
      >
        <test-question
          v-if="activeQuestionNum === question.num && !isStart && !isResult"
          :question="question"
          :total-questions="questions.length"
          @select-variant="selectVariant"
          @next="goToNextQuestion"
        />
      </template>

      <test-result
        v-if="isResult"
        :score-amount="scoreAmount"
        @restart="restartTest"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { questions } from '@/config/questions'
import { ref } from 'vue'

const isStart = ref(true)
const isResult = ref(false)
const scoreAmount = ref(0)
const activeQuestionNum = ref(1)

const goToNextQuestion = (question: Iquestion) => {
  const isShowResult = question.num === questions.length

  if (!isShowResult) {
    activeQuestionNum.value++
  } else {
    isResult.value = isShowResult
  }
}

const restartTest = () => {
  isStart.value = true
  isResult.value = false
  activeQuestionNum.value = 1
  scoreAmount.value = 0
}

const selectVariant = (currentVariant: Ivariant) => {
  scoreAmount.value += currentVariant.score
}
</script>

<style lang="sass" scoped></style>
