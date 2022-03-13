<template>
  <div class="main-wrapper">
    <header class="container">
      <h1 class="logo mx-auto" txt="MyCoolTuner">MyCoolTuner</h1>
      <nav class="nav">
        <ul
          class="nav__list"
          :class="{ 'nav__list--loaded': $store.state.loaded }"
        >
          <li
            class="nav__item nav__item--tuner"
            :class="{ 'nav__item--selected': linkAnimated === 'tuner' }"
          >
            <NuxtLink
              class="nav__link text-center"
              to="/"
              @click.prevent.native="redirect('tuner')"
            >
              Tuner
            </NuxtLink>
          </li>
          <li
            class="nav__item  nav__item--metronome"
            :class="{ 'nav__item--selected': linkAnimated === 'metronome' }"
          >
            <NuxtLink
              class="nav__link text-center"
              to="/"
              @click.prevent.native="redirect('metronome')"
            >
              Metronome
            </NuxtLink>
          </li>
          <li
            class="nav__item  nav__item--record"
            :class="{ 'nav__item--selected': linkAnimated === 'record' }"
          >
            <NuxtLink
              class="nav__link text-center"
              to="/"
              @click.prevent.native="redirect('record')"
            >
              Record
            </NuxtLink>
          </li>
          <li
            class="nav__item  nav__item--about"
            :class="{ 'nav__item--selected': linkAnimated === 'about' }"
          >
            <NuxtLink
              class="nav__link text-center"
              to="/"
              @click.prevent.native="redirect('about')"
            >
              About
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkAnimated: null
    }
  },
  methods: {
    redirect(name) {
      this.linkAnimated = name
      this.$router.push({
        path: '/' + name
      })
    }
  },
  transition: "page"
}
</script>

<style lang="postcss">
  @custom-media --tablet (min-width: 48rem);
  @custom-media --desktop (min-width: 64rem);
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
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 500ms, transform 500ms;

      &--loaded {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &__item {
      height: 2.5rem;
      border-radius: 0.5rem;
      color: #161616;
      transition: all 800ms;

      &--selected {
        height: calc(100vh + 250px);
        border-radius: 0;
        margin-inline: calc((100% - 100vw) / 2);

        .nav__link {
          opacity: 0;
        }
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
      transition: opacity 400ms;
    }
  }

  .page-leave-active {
    transition: all 650ms;
  }

  .page-enter-from,
  .page-leave-to {
    /* opacity: 0; */
  }
</style>