<template>
    <tab-container />
</template>

<script>

	// import { Header, Button } from 'mint-ui'
	// import Swipe from '@/components/Swipe'
	// import HeaderTitle from '@/components/Header'
	import TabContainer from '../components/TabContainer'
	// import axios from 'axios'
 //    import qs from 'qs'

	export default {

		data () {
			return {
				selected:'首页',
			}
		},

		components: {
			TabContainer,
		},
        method: {

        },
		created () {
			document.title = '健身助手';
		},
	}
</script>

<style lang="scss" scoped>

</style>