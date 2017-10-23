import * as types from '../mutation-types'

// initial state
const state = {
	addressInfo: '',
	address: '',
	selectedAddress: '',
}

// getters 
const getters = {
	selectedAddress: state => state.selectedAddress
}

// actions
const actions = {
	
	// vuex存储地址栏基本信息（姓名、手机号码、详细地址、邮政编码）
	storeAddressInfo ({ commit }, addressInfo) {
		commit( types.STORE_ADDRESS_INFO, { addressInfo } )
	},

	// vuex存储地址栏地址信息（省、市、区县）
	storeAddress ({ commit }, address) {
		commit( types.STORE_ADDRESS, { address } )
	},

	// vuex存储确认订单时选择的地址
	storeSelectedAddress ({ commit }, address) {
		commit( types.STORE_SELECTED_ADDRESS, { address } )
	}
}

// mutations
const mutations = {

	// 存储新建地址时保存的地址信息
	[types.STORE_ADDRESS_INFO] (state, { addressInfo }){
		state.addressInfo = addressInfo;
		window.sessionStorage.setItem("addressInfo", JSON.stringify(addressInfo));
	},

	// 存储新建地址时保存的省市区
	[types.STORE_ADDRESS] (state, { address }){
		state.address = address;
		window.sessionStorage.setItem("address", JSON.stringify(address));
	},

	// 存储确认订单时选中的地址
	[types.STORE_SELECTED_ADDRESS] (state, { address }) {
		state.selectedAddress = address;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}