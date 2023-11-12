<template>
  <div class="test">
   <test-start v-if="isStart" @start="isStart = false" />

    <template
      v-for="question in questions"
      :key="question.id"
    >
      <test-question
        v-if="activeQuestionNum === question.num && !isStart"
        :question="question"
        :total-questions="questions.length"
        @next="goToNextQuestion"
      />
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
</script>

<style lang="sass" scoped></style>
