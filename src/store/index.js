import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import storeId from './modules/storeId'
import purchase from './modules/purchase'
import address from './modules/address'
import homeTab from './modules/homeTab'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	getters,
	modules: {
		storeId,
		purchase,
		address,
		homeTab
	}
})