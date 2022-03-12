<template>
  <header class="container">
    <h1 class="logo mx-auto" txt="MyCoolTuner">MyCoolTuner</h1>
    <nav class="nav">
      <ul class="nav__list">
        <li
          class="nav__item nav__item--tuner"
          :class="{ 'nav__item--loaded': loaded }"
          style="--order: 1"
        >
          <NuxtLink class="nav__link text-center" to="/tuner">Tuner</NuxtLink>
        </li>
        <li
          class="nav__item  nav__item--metronome"
          :class="{ 'nav__item--loaded': loaded }"
          style="--order: 2"
        >
          <NuxtLink class="nav__link text-center" to="/metronome">Metronome</NuxtLink>
        </li>
        <li
          class="nav__item  nav__item--record"
          :class="{ 'nav__item--loaded': loaded }"
          style="--order: 3"
        >
          <NuxtLink class="nav__link text-center" to="/record">Record</NuxtLink>
        </li>
        <li
          class="nav__item  nav__item--about"
          :class="{ 'nav__item--loaded': loaded }"
          style="--order: 4"
        >
          <NuxtLink class="nav__link text-center" to="/about-donate">About And Donate</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return { loaded: false }
  },
  created() {
    this.$nuxt.$on('loaded', () => {
      this.loaded = true
    })
  }
}
</script>

<style lang="postcss">
  @custom-media --tablet (min-width: 48rem);
  @custom-media --desktop (min-width: 64rem);

  /* :root {
    --bg: var(--reflection);
  } */
</style>
<style lang="postcss" scoped>
  .container {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 24rem;
    box-sizing: content-box;

    @media (--desktop) {
      box-sizing: border-box;
    }
  }

  .nav {
    margin-top: 40px;
    user-select: none;

    &__list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &__item {
      opacity: 0;
      transform: translateY(40px);
      border-radius: 0.5rem;
      transition: opacity 500ms, transform 500ms;
      transition-delay: calc(var(--order, 1) * 120ms);
      color: #161616;

      &--loaded {
        opacity: 1;
        transform: translateY(0);
      }

      &--tuner {
        background-color: var(--bg-tuner);
      }

      &--metronome {
        background-color: var(--bg-metronome);
      }

      &--record {
        background-color: var(--bg-record);
      }

      &--about {
        background-color: var(--bg-about);
      }
    }

    &__link {
      display: block;
      width: 100%;
      padding-block: 0.5rem;
      cursor: pointer;
      color: currentColor;
    }
  }
</style>