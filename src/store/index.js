import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    voiture: [{
      id: 1,
      nom: "Renault",
      marque: "Renault",
      couleur: "Jaune",
      couleurhex: "#3E92CC",
      carburant: "Essence",
      img: ''
    },
    {
      id: 2,
      nom: "Peugeot",
      marque: "Peugeot",
      couleur: "Bleu",
      couleurhex: "#3E92CC",
      carburant: "Essence",
      img: ''
    },
    {
      id: 3,
      nom: "Citroën",
      marque: "Citroën",
      couleur: "Rouge",
      couleurhex: "#3E92CC",
      carburant: "Electrique",
      img: ''
    },
    {
      id: 4,
      nom: "Mercedes",
      marque: "Mercedes",
      couleur: "Noir",
      couleurhex: "#3E92CC",
      carburant: "Diesel",
      img: ''
    },
    {
      id: 5,
      nom: "Audi",
      marque: "Audi",
      couleur: "Gris",
      couleurhex: "#3E92CC",
      carburant: "Electrique",
      img: ''
    },
    {
      id: 6,
      nom: "Jack",
      marque: "Audi",
      couleur: "Gris",
      couleurhex: "#3E92CC",
      carburant: "Diesel",
      img: ''
    }]
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get('https://back.ruben-lecomte.fr/wp-json/wp/v2/posts')
        .then(r => r.data)
        .then(posts => {
          commit('SET_POSTS', posts)
        })
    }
  },
  getters: {

  },
  modules: {
  }
})
