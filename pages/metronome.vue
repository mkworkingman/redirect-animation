<template>
  <div class="main-wrapper">
    <article class="container">
      <header><h1>Metronome</h1></header>
      <h3>Test123</h3>
      <p style="color: #e2e2e2;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facere amet tenetur quasi, quia, qui vel, adipisci eveniet quam suscipit animi doloremque modi maxime odit?</p>
    </article>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
  .main-wrapper {
    background: var(--bg-metronome);
  }

  .container {
    transition: opacity 400ms;
  }

  .page-enter-active {
    .container {
      opacity: 0;
    }
  }
</style>