<template>
	<div class="course-details">
		<!-- 顶部轮播 -->
		<swipe :images="images" />
		
	</div>
</template>

<script>

	import Swipe from '@/components/Swipe'
	
	import TechnicalSupport from '@/components/support/TechnicalSupport'

	export default {

		data () {
			return {
				images: [
					require('@/assets/img/fitness1.jpg'),
					require('@/assets/img/fitness2.jpg'),
					require('@/assets/img/fitness3.jpg'),
				],
				
			}
		},

		components: {
			'swipe': Swipe,
			'technical-support': TechnicalSupport
		},

		created () {
			document.title = '健身助手';
		},
	}
</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	.course-details {
		
	}

</style>