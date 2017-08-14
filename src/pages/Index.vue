<template>
	<div>
		<swipe />
		<header-title title="在线商城"/>
	</div>
</template>

<script>

	import Swipe from '@/components/Swipe'
	import Header from '@/components/Header'

	export default {

		data () {
			return {

			}
		},

		components: {
			'swipe': Swipe,
			'header-title': Header
		},

		created () {
			document.title = '健身助手';
		},
	}
</script>

<style lang="scss" scoped>

	@import '../style/mixin';

	.test {
		color: $sc;
	}

</style>