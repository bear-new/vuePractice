<template>
	<div class="pt">
		<!-- 顶部轮播 -->
		<swipe :images="images" />
		<!-- 私人教练 -->
		<trainer :trainer="trainer" />
		<!-- 提供支持 -->
		<technical-support />
	</div>
</template>

<script>

	import Swipe from '@/components/Swipe'
	import Trainer from '@/components/trainer/Trainer'
	import TechnicalSupport from '@/components/support/TechnicalSupport'

	export default {

		data () {
			return {
				images: [
					require('@/assets/img/fitness1.jpg'),
					require('@/assets/img/fitness2.jpg'),
					require('@/assets/img/fitness3.jpg'),
				],
				trainer: [
					{
						poster: require('@/assets/img/fitness4.jpg'),
						name: '顾泉锋',
						grade: 3,
						info: '擅长矫正训练、有氧搏击',
						feature: ['国家一级运动员', '最高私教', '10年舞蹈生涯'],
					},
					{
						poster: require('@/assets/img/fitness4.jpg'),
						name: '顾泉锋',
						grade: 3,
						info: '擅长矫正训练、有氧搏击',
						feature: ['国家一级运动员', '最高私教', '10年舞蹈生涯'],
					},
					{
						poster: require('@/assets/img/fitness4.jpg'),
						name: '顾泉锋',
						grade: 3,
						info: '擅长矫正训练、有氧搏击',
						feature: ['国家一级运动员', '最高私教', '10年舞蹈生涯'],
					},
				],
			}
		},

		components: {
			'swipe': Swipe,
			'trainer': Trainer,
			'technical-support': TechnicalSupport
		},

		created () {
			document.title = '健身助手';
		},
	}
</script>

<style lang="scss" scoped>

	@import 'src/style/mixin'; 

	/* 私教 */
	.pt {
		background: $bottom_bgc;
	}

</style>