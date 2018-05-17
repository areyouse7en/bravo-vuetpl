const state = {
  info: {}
};

const getters = {
  isAdmin(state) {
    return state.info.admin == 'y'
  }
};

const mutations = {
  setUser(state, payload = {}) {
    state.info = payload
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};