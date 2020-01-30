// initial state
// shape: [{ id, quantity }]
const state = {
    messageList: []
}
  
// getters
const getters = {
    messageList: (state) => {
      return state.messageList
    }
}
  
// actions
const actions = {
    addMessage ({ commit }, message) {
        commit('pushMessageToList', { message })
    }
}
  
// mutations
const mutations = {
    pushMessageToList (state, { message }) {
      state.messageList.push(message)
    }
}
  
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}