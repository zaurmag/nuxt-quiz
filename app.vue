<template>
  <div class="page">
    <base-header />

    <main class="page__test">
      <div class="container">
        <test-start-screen />
      </div>
    </main>

    <base-footer />
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'Тест - заголовок',
  })
</script>

<style lang="sass" scoped>
  .page
    display: grid
    grid-template-rows: auto 1fr auto
    height: 100vh
</style>
