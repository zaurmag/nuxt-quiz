<template>
  <div :class="`logo ${isPartner ? 'logo--partner' : 'logo--owner'}`">
    <a class="logo__link" :href="url" :title="name" target="_blank">
      <img
        v-if="imageFileName"
        class="logo__img"
        :src="`./images/logo/${imageFileName}`"
        :alt="name"
      />

      <span class="logo__name" v-else>
        {{ name }}
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    name: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    imageFileName: {
      type: String,
      default: '',
    },
    isPartner: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style scoped lang="sass">
  .logo
    &__link
        color: $dark
        display: block
        text-decoration: none
        transition: opacity .2s ease

        &:hover
            color: $blue
            opacity: 0.9

    &__img
        width: 40px

    &__name
        font-size: 16px
        font-weight: 700
        text-transform: uppercase
</style>
