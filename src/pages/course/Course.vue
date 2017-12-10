<template>
	<div class="course">
		<!-- 日历 -->
		<calendar />
		<!-- 课程表 -->
		<course-schedule :course="course" />
		<!-- 提供支持 -->
		<technical-support is-fill="{true}"/>
	</div>
</template>

<script>

	import Calendar from '@/components/course/Calendar'
	import CourseSchedule from '@/components/course/CourseSchedule'
	import TechnicalSupport from '@/components/support/TechnicalSupport'

	export default {

		data () {
			return {
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
			'calendar': Calendar,
			'course-schedule': CourseSchedule,
			'technical-support': TechnicalSupport
		},

		created () {
			document.title = '课程';
		},
	}
</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	.course {
		background: $bottom_bgc;
		height: 100%;	
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