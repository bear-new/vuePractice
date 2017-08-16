<template>
	<div class="home">
		<swipe />
		<!-- 健身房介绍 -->
		<div class="introduction">
			<mt-header :title="shopName">
			  	<mt-button slot="right" class="more">
			  		更多店面
			  		<svg class="icon" aria-hidden="true">
					  	<use xlink:href="#icon-iconfontxiangxia1copy19"></use>
					</svg>
		  		</mt-button>
			</mt-header>
			<div class="segmentation"></div>
			<div class="bref">{{ bref }}</div>
		</div>
		<!-- 在线商城 -->
		<header-title title="在线商城"/>
	</div>
</template>

<script>

	import { Header, Button } from 'mint-ui'
	import Swipe from '@/components/Swipe'
	import HeaderTitle from '@/components/Header'

	export default {

		data () {
			return {
				shopName: 'Push舞蹈室',
				bref: '俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍俱乐部相关介绍',

			}
		},

		components: {
			'mt-header': Header,
			'mt-button': Button,
			'swipe': Swipe,
			'header-title': HeaderTitle
		},

		created () {
			document.title = '健身助手';
		},
	}
</script>

<style lang="scss" scoped>

	@import '../../style/mixin';

	.home {
		background: $black_bgc;
		/* 顶部店面介绍 */
		.introduction {
			margin-bottom: 0.2rem;
			padding-top: 0.2rem;
			background: $gray_bgc;
			.mint-header {
				background: transparent;
				@include sc(0.45rem, $tc);
				height: 1rem;
				.more {
					font-size: 0.35rem;
					color: $cc;
				}
			}
			.segmentation {
				@include wh(1rem, 0.1rem);
				background: $cc;
				border-radius: 5px;
				margin-left: 50%;
				transform: translateX(-50%);
			}
			.bref {
				color: $cc;
				padding: 0.4rem;
			    font-size: 0.4rem;
			    text-align: left;
			}
		}
		/* 标题栏 */
		.mint-header {
			background: $gray_bgc;
		}
	}

</style>