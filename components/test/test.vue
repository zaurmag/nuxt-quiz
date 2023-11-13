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
          @next="goToNextQuestion"
        />
      </template>

      <test-result v-if="isResult" @restart="restartTest" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { questions } from '@/config/questions'
import { ref } from 'vue'

const isStart = ref(true)
const isResult = ref(false)
const activeQuestionNum = ref(1)

const goToNextQuestion = (isShowResult: boolean) => {
  if (!isShowResult) {
    activeQuestionNum.value++
  } else {
    isResult.value = isShowResult
  }
}

const restartTest = () => {
  isStart.value = true
  isResult.value = false
}
</script>

<style lang="sass" scoped></style>
