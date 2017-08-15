<template>
	<div>
		<swipe />
		课程模块快进入啊
	</div>
</template>

<script>

	import Swipe from '@/components/Swipe'

	export default {

		data () {
			return {

			}
		},

		components: {
			'swipe': Swipe
		},

		created () {
			document.title = '健身助手';
		},
	}
</script>

<style lang="scss" scoped>


</style>