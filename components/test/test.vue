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
import { questions } from '../../config/questions'
import { ref } from 'vue'

import type { Ref } from 'vue'

const isStart: Ref<boolean> = ref(true)
const isResult: Ref<boolean> = ref(false)
const scoreAmount: Ref<number> = ref(0)
const activeQuestionNum: Ref<number> = ref(1)

const goToNextQuestion = (question: IQuestion): void => {
  const isShowResult = question.num === questions.length

  if (!isShowResult) {
    activeQuestionNum.value++
  } else {
    isResult.value = isShowResult
  }
}

const restartTest = (): void => {
  isStart.value = true
  isResult.value = false
  activeQuestionNum.value = 1
  scoreAmount.value = 0
}

const selectVariant = (currentVariant: IVariant): void => {
  scoreAmount.value += currentVariant.score
}
</script>
