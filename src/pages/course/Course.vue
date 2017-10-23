<template>
	<div class="course">
		<!-- 顶部轮播 -->
		<swipe :images="images" />
		<!-- 日历 -->
		<calendar />
		<!-- 课程表 -->
		<course-schedule :course="course" />
		<!-- 提供支持 -->
		<technical-support />
	</div>
</template>

<script>

	import Swipe from '@/components/Swipe'
	import Calendar from '@/components/course/Calendar'
	import CourseSchedule from '@/components/course/CourseSchedule'
	import TechnicalSupport from '@/components/support/TechnicalSupport'

	export default {

		data () {
			return {
				images: [
					require('@/assets/img/fitness1.jpg'),
					require('@/assets/img/fitness2.jpg'),
					require('@/assets/img/fitness3.jpg'),
				],
				course: [
					{	
						poster: require('@/assets/img/fitness4.jpg'),
						name: '流瑜伽',
						feature: '瑜伽、燃脂、力量',
						time: '2017.07.29 11:00-12:00',
						coach: '花花',
						isAppoint: true,
					},
					{	
						poster: require('@/assets/img/fitness4.jpg'),
						name: '流瑜伽',
						feature: '瑜伽、燃脂、力量',
						time: '2017.07.29 11:00-12:00',
						coach: '花花',
						isAppoint: false
					},
				],
			}
		},

		components: {
			'swipe': Swipe,
			'calendar': Calendar,
			'course-schedule': CourseSchedule,
			'technical-support': TechnicalSupport
		},

		created () {
			document.title = '健身助手';
		},
	}
</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	.course {
		background: $bottom_bgc;
		.mint-swipe,.calendar,.course-schedule {
			margin-bottom: 0.2rem;
		}
		.calendar {
			background: $top_bgc;
		}
		.course-schedule {
			background: $top_bgc;
		}
	}

</style>