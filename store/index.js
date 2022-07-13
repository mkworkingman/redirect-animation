export const state = () => ({
  loaded: false
})

export const mutations = {
  LOAD_PAGE(state, loaded) {
    state.loaded = loaded
  }
}
