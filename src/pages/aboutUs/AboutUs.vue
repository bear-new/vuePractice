<template>
	<div class="about-us">
		<swipe :images="images" />
		<!-- 健身房介绍 -->
		<shop-bref :shopName="shopName" :bref="bref" />
		<!-- 在线商城 -->
		<online-shop :backgroundUrls="images"/>

	</div>

</template>

<script>

	import Swipe from '@/components/Swipe'
	import ShopBref from '@/components/shop/ShopBref'
	import OnlineShop from '@/components/shop/OnlineShop'

	export default {

		data () {
			return {
				selected:'首页',
				images: [
					require('@/assets/img/fitness1.jpg'),
					require('@/assets/img/fitness2.jpg'),
					require('@/assets/img/fitness3.jpg'),
				],
				shopName: 'Push舞蹈室',
				bref: '俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍',
			}
		},

		components: {
			'swipe': Swipe,
			'shop-bref': ShopBref,
			'online-shop': OnlineShop
		},
        method: {

        },
		created () {
			document.title = '健身助手';
		},
	}

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	.home {
		background: $black_bgc;
	}
</style>