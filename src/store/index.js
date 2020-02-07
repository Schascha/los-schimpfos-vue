import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		allWortos: [],
		rememberIndex: 0,
		rememberWortos: [],
		wortos: ''
	},
	mutations: {
		setAllWortos(state, allWortos) {
			state.allWortos = allWortos;
		},
		setRandomWortos(state) {
			const
				{allWortos} = state,
				wortos = allWortos[parseInt(Math.random() * allWortos.length)]
			;

			state.rememberWortos.push(wortos);
			state.rememberIndex = state.rememberWortos.length - 1;
			state.wortos = wortos;
		},
		setWortos(state, wortos) {
			state.wortos = wortos;
		}
	},
	actions: {
		getAllWortos({commit}) {
			commit('setAllWortos', require('../data/wortos.json'));
		},
		getRandomWortos({commit}) {
			commit('setRandomWortos');
		},
		getNextWortos({commit, state}) {
			const
				{rememberWortos} = state,
				size = rememberWortos.length
			;

			if (size && ++state.rememberIndex < size) {
				commit('setWortos', rememberWortos[state.rememberIndex]);
			} else {
				commit('setRandomWortos');
			}
		},
		getPrevWortos({commit, state}) {
			if (state.rememberIndex) {
				commit('setWortos', state.rememberWortos[--state.rememberIndex]);
			}
		}
	}
})
