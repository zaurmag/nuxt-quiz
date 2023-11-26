<template>
  <header class="header is-hidden">
    <div class="container header__container">
      <!-- Owner logo -->
      <base-logo name="тест" url="#" />

      <!-- Partner logo -->
      <base-logo
        name="Логотип партера Vue"
        url="#"
        imageFileName="logo.png"
        is-partner
      />
    </div>
  </header>
</template>

<style lang="sass" scoped>
  .header
    position: relative
    z-index: 2
    padding-top: 10px
    padding-bottom: 10px

    &__container
      display: grid
      grid-auto-flow: column
      justify-content: space-between
      align-items: center
</style>
