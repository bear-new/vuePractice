<!-- 我的会员卡 -->
<template>
	<div>
		<swipe />
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
	.test {
		width:100%;
		height:4rem;
		background:linear-gradient(to right,pink,blue);
	}

</style>