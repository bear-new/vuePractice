<template>
	<div class="pt">
		<!-- 私人教练 -->
		<trainer :trainer="trainer" />
		<!-- 提供支持 -->
		<technical-support is-fill="{true}"/>
	</div>
</template>

<script>

	import Trainer from '@/components/trainer/Trainer'
	import TechnicalSupport from '@/components/support/TechnicalSupport'

	export default {

		data () {
			return {
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