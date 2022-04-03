<template>
  <div>
    <div
      class="main-wrapper"
      :class="{ 'fade-out': goTo === 'home' }"
    >
      <article class="container">
        <header><h1>Tuner</h1></header>
        <h3>Post "{{ $route.params.id }}"</h3>
        <p class="testcolor">Lorem ipsum.</p>
        <NuxtLink
          class="nav__link text-center"
          to="/tuner"
        >
          Back to Tuner
        </NuxtLink>
        <NuxtLink
          class="nav__link text-center"
          to="/"
        >
          Go home
        </NuxtLink>
      </article>
    </div>
    <div class="main-wrapper main-wrapper-menu">
      <div class="container-menu">
        <p class="logo logo--static mx-auto" txt="MyCoolTuner">MyCoolTuner</p>
        <div class="nav">
          <ul class="nav__list">
            <li class="nav__item nav__item--tuner">
              <div class="nav__link text-center">Tuner</div>
            </li>
            <li class="nav__item  nav__item--metronome">
              <div class="nav__link text-center">Metronome</div>
            </li>
            <li class="nav__item  nav__item--record">
              <div class="nav__link text-center">Record</div>
            </li>
            <li class="nav__item  nav__item--about">
              <div class="nav__link text-center">About</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goTo: null
    }
  },
  mounted () {
    document.body.classList.add('bg-tuner')
  },
  destroyed () {
    document.body.classList.remove('bg-tuner')
  },
  transition: {
    name: "tuner",
    mode: "",
  }
}
</script>

<style lang="postcss" scoped>
  body {
    background: var(--bg-tuner);
  }

  .main-wrapper {
    background: var(--bg-tuner);
    transition: opacity 450ms;
    perspective: 1000px;
    padding: 20px;
    position: absolute;
    inset: 0;
  }

  .testcolor {
    color: darkmagenta;
  }

  .fade-out {
    opacity: 0;
    pointer-events: none;
  }

  .toPost .container {
    /* transform: rotateY(-90deg); */
  }

  .container {
    transition: all 400ms;
    border: 2px solid rgba(255, 255, 255, 0.2);
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #6d858b;
  }

  /* .page-enter-active {
    .container {
      opacity: 0;
    }
  } */

   .container-menu {
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 20rem;
    box-sizing: content-box;
    padding-left: clamp(1.25rem, 5.25vw, 2.5rem);
    padding-right: clamp(1.25rem, 5.25vw, 2.5rem);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    z-index: 0;
  }

  .main-wrapper-menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: var(--bg-main);
    width: 100%;
    pointer-events: none;
  }

  .nav {
    margin-top: 40px;
    user-select: none;

    &__list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
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
    transition: all 450ms linear;

    .main-wrapper:not(.main-wrapper-menu) {
      opacity: 0;
      pointer-events: none;
      z-index: 10;
    }
  }

  .tuner-enter-active {
    transition: all 400ms;
    transform: translateX(0);
  }

  .tuner-enter {
    transform: translateX(100%);
  }

  /* Infinite scroll */
  /* .tuner-leave-active {
    transition: all 400ms;
    transform: translateX(-100vw);
  }

  .tuner-leave {
    transform: translateX(0);
  } */

  .tuner-leave-active {
    transition: all 400ms;
    transform: translateX(100%);
  }

  .tuner-leave {
    transform: translateX(0);
  }
</style>