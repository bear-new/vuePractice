import * as types from '../mutation-types'

// initial state
const state = {
	storeId: ''
}

// getters 
const getters = {
	storeId: state => {
		return window.sessionStorage.getItem('storeId');		
	},

	storePhone: state => {
		return window.sessionStorage.getItem('storePhone');
	}
}

// actions
const actions = {
	getStoreId ({ commit }, storeId) {
		commit( types.RECEIVE_SHOPID, { storeId } )
	},

	getStorePhone ({ commit }, storePhone) {
		commit( types.RECEIVE_STORE_PHONE, { storePhone } )
	},
}

// mutations
const mutations = {

	// 获取地址栏传递过来的shopId
	[types.RECEIVE_SHOPID] (state, { storeId }){
		console.log(storeId)
		window.sessionStorage.setItem("storeId", storeId);
	},

	// 获取地址栏传递过来的storePhone
	[types.RECEIVE_STORE_PHONE] (state, { storePhone }){
		window.sessionStorage.setItem("storePhone", storePhone);
	},
}

export default {
	state,
	getters,
	actions,
	mutations
}