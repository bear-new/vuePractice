<template>
	<div class="member-card">
		<!-- 个人信息 -->
		<personal :personal="personal"/>
		<!-- 我的会员卡 -->
		<my-card :cards="cards" />
		<!-- 我的课程 -->
		<header-title title="我的课程" />
		<!-- 日历 -->
		<calendar />
		<!-- 课程表 -->
		<course-schedule :course="course" />
		<!-- 提供支持 -->
		<technical-support is-fill="{true}"/>
	</div>
</template>

<script>

	import Personal from '@/components/personal/Personal'
	import MyCard from '@/components/card/MyCard'
	import HeaderTitle from '@/components/Header'
	import Calendar from '@/components/course/Calendar'
	import CourseSchedule from '@/components/course/CourseSchedule'
	import TechnicalSupport from '@/components/support/TechnicalSupport'

	export default {

		data () {
			return {
				personal: {
					head: require('@/assets/img/fitness1.jpg'),
					name: '黎明',
					phone: '13540066145',
					card: '201707311252',
					qrCode: require('@/assets/img/vip_img_qr@2x.png'),
				},
				cards: [
					require('@/assets/img/common_card_coach@2x.png'),
					require('@/assets/img/common_card_number@2x.png'),
					require('@/assets/img/common_card_time@2x.png'),
					require('@/assets/img/common_card_value@2x.png')
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
			'personal': Personal,
			'my-card': MyCard,
			'header-title': HeaderTitle,
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

	.member-card {
		background: $bottom_bgc;
		.mint-header {
			background: $top_bgc;
		}
		.personal,.my-card,.calendar,.course-schedule {
			background: $top_bgc;
			margin-bottom: 0.2rem;
		}
	}

</style>