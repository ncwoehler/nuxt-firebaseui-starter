import { fireAuth } from '@/plugins/firebase.js'

export const strict = false

export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

export const actions = {
  signOut({ commit }) {
    fireAuth
      .signOut()
      .then(() => {
        commit('setUser', null)
      })
      .catch(err => alert(err))
  }
}
