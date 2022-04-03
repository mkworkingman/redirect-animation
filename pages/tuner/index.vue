<template>
  <div>
    <div class="main-wrapper">
      <article class="container">
        <header><h1 class="testcolor">Tuner</h1></header>
        <h3>Test123</h3>
        <p style="color: #e2e2e2;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facere amet tenetur quasi, quia, qui vel, adipisci eveniet quam suscipit animi doloremque modi maxime odit?</p>
        <NuxtLink
          class="nav__link text-center"
          to="/tuner/post/1"
        >
          Some Tuner Post 1
        </NuxtLink>
        <NuxtLink
          class="nav__link text-center"
          to="/tuner/post/2"
        >
          Some Tuner Post 2
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
      from: null,
      goTo: null,
    }
  },
  mounted () {
    document.body.classList.add('bg-tuner')
  },
  destroyed () {
    document.body.classList.remove('bg-tuner')
  },
  // beforeRouteLeave(to, from, next) {
  //   if (to.path === '/') this.goTo = 'home'
  //   if (to.path.includes('/tuner/post/')) this.goTo = 'tunerPost'
  //   next()
  // }
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

  .toPost .container {
    transform: translateX(-100vw);
  }

  .container {
    transition: all 400ms;
    border: 2px solid rgba(255, 255, 255, 0.2);
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .page-enter-active {
    .container {
      opacity: 0;
    }
  }

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

  .tuner-leave-active {
    transition: all 400ms;
    transform: translateX(-100%);
  }

  .tuner-leave {
    transform: translateX(0);
  }

  /* Infinite scroll */
  /* .tuner-enter-active {
    transition: all 400ms;
    transform: translateX(0);
  }

  .tuner-enter {
    transform: translateX(100vw);
  } */
  
  .tuner-enter-active {
    transition: all 400ms;
    transform: translateX(0);
  }

  .tuner-enter {
    transform: translateX(-100%);
  }

  .bg {
    background: var(--bg-tuner);
  }
</style>