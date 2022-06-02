// You still need to register Vuetify itself
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ExampleComponent from '../js/components/ExampleComponent'

Vue.use(Vuetify)

const opts = {data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },}

export default new Vuetify(opts);