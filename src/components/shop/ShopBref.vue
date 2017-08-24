<template>
	<div class="shop-bref">
		<mt-header :title="shopName">
		  	<mt-button slot="right" class="more">
		  		更多店面
		  		<svg class="icon" aria-hidden="true">
				  	<use xlink:href="#icon-iconfontxiangxia1copy19"></use>
				</svg>
	  		</mt-button>
		</mt-header>
		<div class="segmentation"></div>
		<div class="bref" ref="bref">{{ bref }}</div>
		<div class="unfold" @click="unfold">{{ foldText }}</div>
	</div>
</template>

<script>
	
	import { Header, Button } from 'mint-ui'

	export default {
		
		data () {
			return {
				isUnfold: false,
				foldText: '展开'
			}
		},

		props: ['shopName', 'bref'],

		components: {
			'mt-header': Header,
			'mt-button': Button,
		},

		methods: {
			// 展开（收起）
			unfold () {
				if ( !this.isUnfold ) {
					this.$refs.bref.setAttribute('style', 'display: block');
				} else {
					this.$refs.bref.setAttribute('style', 'display: -webkit-box');
				}
				this.isUnfold = !this.isUnfold;
				this.foldText = this.foldText == '展开' ? '收起' : '展开';
			}
		}
	}

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin'; 

	/* 顶部店面介绍 */
	.shop-bref {
		padding-top: 0.2rem;
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
			@include wh(1rem, 0.05rem);
			background: $cc;
			border-radius: 5px;
			margin-left: 50%;
			transform: translateX(-50%);
		}
		.bref {
			color: $cc;
			margin: 0.3rem;
		    font-size: 0.4rem;
		    text-align: left;
		    letter-spacing: 0.02rem;
		    display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			overflow: hidden;
		}
		.unfold {
			color: $optc;
			text-align: right;
			padding: 0 0.4rem 0.2rem 0;
		}
	}

</style>