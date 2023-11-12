<template>
  <div class="test">
    <!-- <test-start v-if="isStart" @start="isStart = false" />-->
    <test-question />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isStart = ref(true)
</script>

<style lang="sass" scoped></style>
