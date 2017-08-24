<template>
	<div class="about-us">
		<!-- 顶部轮播 -->
		<swipe :images="images" />
		<!-- 健身房介绍 -->
		<shop-bref :shopName="shopName" :bref="bref" />
		<!-- 在线商城 -->
		<online-shop :backgroundUrls="images" />
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
	import OnlineShop from '@/components/shop/OnlineShop'
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
				cards: [
					require('@/assets/img/common_card_coach@2x.png'),
					require('@/assets/img/common_card_number@2x.png'),
					require('@/assets/img/common_card_time@2x.png'),
					require('@/assets/img/common_card_value@2x.png')
				],
				company: {
					name: 'Push舞蹈室',
					address: '成都市天府软件园B6-2',
					tel: '13258308888',
					businessTime: '09:00-22:00'
				}
			}
		},

		components: {
			'swipe': Swipe,
			'shop-bref': ShopBref,
			'online-shop': OnlineShop,
			'online-card': OnlineCard,
			'contact-us': ContactUs,
			'technical-support': TechnicalSupport
		},
		
	}

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	.about-us {
		background: $black_bgc;
		/* 各板块内容 */
		.shop-bref,.online-shop,.online-card,.contact-us {
			margin-bottom: 0.2rem;
			background: $gray_bgc;
		}
	}

</style>