<template>
  <div class="page" v-cloak>
    <base-header />

    <main class="page__test">
      <div class="container">
        <test />
      </div>
    </main>

    <base-footer />
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'На сколько хорошо ты знаешь таблицу умножения?',
  })
</script>

<style lang="sass" scoped>
  .page
    display: grid
    grid-template-rows: auto 1fr auto
    align-items: center
    height: 100vh

  [v-cloak]
    display: none
</style>
