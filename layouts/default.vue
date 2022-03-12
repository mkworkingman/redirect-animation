<template>
  <div class="main-wrapper">
    <Nuxt />
    <div id="test" class="loading" :class="{ 'loading--loaded': loaded }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return { loaded: false }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.loaded = true
      this.$nuxt.$emit('loaded', true);
    })
  }
}
</script>