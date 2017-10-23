import * as types from '../mutation-types'

// initial state
const state = {
	purchase: '',
	purchaseType: '',
}

// getters 
const getters = {

	purchase: state => {
		return window.sessionStorage.getItem('purchase')
	},

	purchaseType: state => {
		return window.sessionStorage.getItem('purchaseType')
	},
}

// actions
const actions = {
	
	addPurchase ({ commit }, goodsList) {
		commit( types.ADD_PURCHASE, { goodsList } )
	},

	storePurchaseType ({ commit }, type) {
		commit( types.STORE_PURCHASE_TYPE, { type } )
	},
}

// mutations
const mutations = {

	// 获取地址栏传递过来的shopId
	[types.ADD_PURCHASE] (state, { goodsList }){
		state.purchase = goodsList;
		window.sessionStorage.setItem('purchase', JSON.stringify(goodsList));
	},

	// 存储购买的方式，是从购物车购买还是商品页直接购买
	[types.STORE_PURCHASE_TYPE] (state, { type }){
		state.purchaseType = type;
		window.sessionStorage.setItem('purchaseType', type);
	},

}

export default {
	state,
	getters,
	actions,
	mutations
}