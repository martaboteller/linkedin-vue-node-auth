import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    token: localStorage.getItem('token') || '',
  },

  mutations: {
    //To update messages array
    updateMessages(state, messages) {
      state.messages = messages;
    },
    //To create a new message
    newMessage(state, message) {
      state.messages.push(message);
    },
    //To authenticate
    auth(state, token) {
      state.token = token;
    },
    //To logout
    logout(state) {
      state.token = '';
      localStorage.clear('token');
    },
  },
  //To perform async actions like API calls
  actions: {
    async getMessages({ commit }) {
      let messages = (await axios.get('http://localhost:3000/messages')).data;
      commit('updateMessages', messages);
    },
    async newMessage({ commit }, messageBody) {
      let msg = (
        await axios.post('http://localhost:3000/messages', {
          msg: messageBody,
        })
      ).data;

      commit('newMessage', msg.text);
    },
    //Get specific message
    async getMessage({ commit }, id) {
      return axios.get(`http://localhost:3000/messages/${id}`);
    },
    //Register new user
    async register({ commit }, registerData) {
      let token = (
        await axios.post('http://localhost:3000/register', registerData)
      ).data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = token;
      commit('auth', token);
    },
    //Login existing user
    async login({ commit }, registerData) {
      let token = (
        await axios.post('http://localhost:3000/login', registerData)
      ).data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = token;
      commit('auth', token);
    },
  },
});
