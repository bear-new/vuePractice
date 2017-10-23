import * as types from '../mutation-types'

// initial state
const state = {
	homeTab: ''
}

// getters 
const getters = {
	homeTab: state => state.homeTab
}

// actions
const actions = {
	storeHomeTab ({ commit }, homeTab) {
		commit( types.STORE_HOME_TAB, { homeTab } )
	}
}

// mutations
const mutations = {

	// 获取地址栏传递过来的shopId
	[types.STORE_HOME_TAB] (state, { homeTab }){
		state.homeTab = homeTab;
	},

}

export default {
	state,
	getters,
	actions,
	mutations
}