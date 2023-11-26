<template>
  <footer class="footer is-hidden">
    <div class="container footer__container">
      <p>2023 Copyright</p>
      <p>Реклама...</p>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
  .footer
      padding-top: 10px
      padding-bottom: 10px
      font-size: 12px
      background-color: $gray

      &__container
          display: grid
          grid-auto-flow: column
          justify-content: space-between
</style>
