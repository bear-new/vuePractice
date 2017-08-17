<template>
	<div class="online-shop">
		<header-title title="在线商城" />
		<div class="store-box">
			<ul class="clearfix" ref="stores">
				<li v-for="item in infos" :style="item.style">
					<span>{{ item.name }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	import HeaderTitle from '@/components/Header'

	export default {

		data () {
			// 每个商城的信息(商城图片，商城名字)
			let infos = [];
			this.backgroundUrls.map((item, index) => {
				infos.push({
					style: {
						backgroundImage: `url( ${item} )`,
					},
					name: '哑铃器械'
				})
			})

			return {
				infos,
			}
		},

		props: ['backgroundUrls'],

		components: {
			'header-title': HeaderTitle
		},

		mounted () {
			let len = this.infos.length;
			let $lis = document.getElementsByTagName('li');

			// 设置ul的宽度为li的几倍
			this.$refs.stores.style.width = len + '00%';
			for ( let $li of $lis ) {
				$li.style.width = (100/len-2) + '00%'; 
			}
		}
	}

</script>

<style lang="scss" scoped>
	
	@import 'src/style/mixin'; 

	.online-shop {
		overflow: hidden;
		background: $gray_bgc;
		.store-box {
			position: relative;
			width: 100%;
			ul {
				li {
					position: relative;
					box-sizing: border-box;
					float: left;
					height: 4.5rem;
					margin: 0.2rem 1%;
					border-radius: 20px;
					background-repeat: no-repeat;
					background-size: 100% 100%;
					span {
						position: absolute;
						left: 0.2rem;
						bottom: 0.2rem;
						color: $tc;
					}
				}
			}
		}
	}

</style>