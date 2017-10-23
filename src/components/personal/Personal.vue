<template>
	<div class="personal">
		<div class="personal-head">
			<img :src="personal.head" />
		</div>
		<div class="personal-info">
			<div class="name">
				{{ personal.name }}
			</div>
			<div>
				<svg class="icon" aria-hidden="true">
				  	<use xlink:href="#icon-shouji"></use>
				</svg>
				{{ personal.phone }}
			</div>
			<div>
				<svg class="icon" aria-hidden="true">
				  	<use xlink:href="#icon-qiahao"></use>
				</svg>
				{{ personal.card }}
			</div>
		</div>
		<div class="personal-qrCode">
			<img :src="personal.qrCode" />
		</div>
	</div>
</template>

<script>
	
	export default {

		data () {
			return {

			}
		},

		props: ['personal'],

	}

</script>

<style lang="scss" scoped>
	
	@import 'src/style/mixin'; 

	.personal {
		display:-webkit-box;
		display:flex;
		justify-content: center;
			align-items: center;
		height: 3rem;
		.personal-head {
			flex: 1;
			img {
				width: 2rem;
				height: 2rem;
				border-radius: 50%;
			}
		}
		.personal-info {
			flex: 2;
			text-align: left;
			color: $cc;
			font-size: 0.4rem;
			line-height: 0.6rem;
			div {
				margin: 0.1rem;
				&.name {
					color: $tc;
					font-size: 0.5rem;
				}
			}
		}
		.personal-qrCode {
			flex: 1;
			img {
				width: 1.5rem;
				height: 1.5rem;
			}
		}
	}

</style>