<template>
	<div class="home">
		<!-- 顶部轮播 -->
		<swipe :images="images" />
		<!-- 健身房介绍 -->
		<shop-bref :shopName="shopName" :bref="bref" />
		<!-- 课程表 -->
		<course-schedule :course="course" :is-show-header="true"/>
		<!-- 明星私教 -->
		<star-trainer :trainer="trainer" />
		<!-- 在线售卡 -->
		<online-card :cards="cards" />
		<!-- 联系我们 -->
		<contact-us :company="company" />
		<!-- 提供支持 -->
		<technical-support />
	</div>
</template>

<script>

	import Swipe from '@/components/Swipe'
	import ShopBref from '@/components/shop/ShopBref'
	import CourseSchedule from '@/components/course/CourseSchedule'
	import StarTrainer from '@/components/trainer/StarTrainer'
	import OnlineCard from '@/components/card/OnlineCard'
	import ContactUs from '@/components/contact/ContactUs'
	import TechnicalSupport from '@/components/support/TechnicalSupport'

	export default {

		data () {
			return {
				selected:'首页',
				shopName: 'Push舞蹈室',
				bref: '俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍',
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
				trainer: [
					{
						poster: require('@/assets/img/fitness4.jpg'),
						name: '顾泉锋',
						grade: 3,
						feature: ['国家一级运动员', '最高私教', '10年舞蹈生涯'],
					},
					{
						poster: require('@/assets/img/fitness4.jpg'),
						name: '顾泉锋',
						grade: 3,
						feature: ['国家一级运动员', '最高私教', '10年舞蹈生涯'],
					},
					{
						poster: require('@/assets/img/fitness4.jpg'),
						name: '顾泉锋',
						grade: 3,
						feature: ['国家一级运动员', '最高私教', '10年舞蹈生涯'],
					},
				],
				cards: [
					require('@/assets/img/common_card_coach@2x.png'),
					require('@/assets/img/common_card_number@2x.png'),
					require('@/assets/img/common_card_time@2x.png'),
					require('@/assets/img/common_card_value@2x.png')
				],
				company: {
					name: 'Push舞蹈室',
					address: '上海市浦东新区',
					tel: '13212345678',
					businessTime: '09:00-22:00'
				}
			}
		},

		components: {
			'swipe': Swipe,
			'shop-bref': ShopBref,
			'course-schedule': CourseSchedule,
			'star-trainer': StarTrainer,
			'online-card': OnlineCard,
			'contact-us': ContactUs,
			'technical-support': TechnicalSupport
		},
		
	}

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	.home {
		background: $bottom_bgc;
		/* 各板块内容 */
		.shop-bref,.course-schedule,.star-trainer,.online-card,.contact-us {
			margin-bottom: 0.2rem;
			background: $top_bgc;
		}
	}

</style>