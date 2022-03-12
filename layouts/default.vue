<template>
  <div>
    <Nuxt />
    <div class="loading" :class="{ 'loading--loaded': $store.state.loaded }"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('load', () => {
      this.$store.commit('LOAD_PAGE', true)
    })
  }
}
</script>