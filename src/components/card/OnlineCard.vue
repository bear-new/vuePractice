<template>
	<div class="online-card">
		<header-title title="在线售卡" />
		<div class="card-box">
			<ul class="clearfix" ref="cards">
				<li class="card" v-for="item in cards" @click="loadCard">
					<img :src="item" />
				</li>
			</ul>
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

		methods: {
			// 跳转到售卡页面
			loadCard () {

			}
		},

		mounted () {
			let len = 4;
			let $cards = this.$refs.cards;	// ul
			let $lis = document.getElementsByClassName('card');	// li

			// 设置ul的宽度为li的几倍
			$cards.style.width = len/2 + '00%';
			for ( let $li of $lis ) {
				$li.style.width = (100/len-2) + '%'; 
			}
		}
	}

</script>

<style lang="scss" scoped>
	
	@import 'src/style/mixin'; 

	.card-box {
		position: relative;
		width: 100%;
		overflow: scroll;
		ul {
			li {
				position: relative;
				display: inline-block;
				vertical-align: top;
				margin: 0.2rem 1%;
				img {
					width: 100%;
					height: auto;
				}
			}
		}
	}
</style>