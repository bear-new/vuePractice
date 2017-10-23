<template>
	<div class="my-card">
		<header-title title="我的会员卡" />
		<div class="card-box">
			<div class="clearfix" ref="cards">
				<img :src="item" v-for="item in cards" class="card-img" />
			</div>
		</div>
	</div>
</template>

<script>
	
	import HeaderTitle from '@/components/Header'

	export default {

		data () {
			return {

			}
		},

		props: ['cards'],

		components: {
			'header-title': HeaderTitle
		},

		mounted () {
			let len = this.cards.length;
			let $cards = this.$refs.cards;	// ul
			let $imgs = $cards.getElementsByTagName('img');	// li

			// 设置ul的宽度为li的几倍
			$cards.style.width = len/4 + '00%';
			for ( let $img of $imgs ) {
				$img.style.width = (100/len-2) + '%'; 
			}
		}
	}

</script>

<style lang="scss" scoped>
	
	@import 'src/style/mixin'; 

	.my-card {
		overflow: hidden;
		.card-box {
			position: relative;
			width: 100%;
			overflow: scroll;
			img {
				border-radius: 5px;
				height: auto;
				margin: 0.2rem 1%;						
			}
		}
	}

</style>