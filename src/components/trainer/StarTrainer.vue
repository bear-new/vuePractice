<template>
	<div class="star-trainer">
		<header-title title="明星私教" />
		<div class="trainer-box">
			<ul class="trainer clearfix" ref="trainer">
				<li v-for="item in trainer">
					<div>
						<img :src="item.poster" />
					</div>
					<div class="trainer-name">
						<span class="name">{{ item.name }}</span>
						<span class="grade" v-html="gradeHtml(item.grade)"></span>
					</div>
					<div class="feature">
						<span v-for="i in item.feature">#{{ i }}</span>
					</div>
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

		props: ['trainer'],

		components: {
			'header-title': HeaderTitle,
		},

		methods: {
			gradeHtml (grade) {
				let html = '';
				for ( let i = 0; i < grade; i++ ) {
					html +=`<svg class="icon" aria-hidden="true">
							  	<use xlink:href="#icon-xing"></use>
							</svg>`
				}
				for ( let i = 0; i < 5-grade; i++ ) {
					html +=`<svg class="icon gray" aria-hidden="true">
							  	<use xlink:href="#icon-xing-copy"></use>
							</svg>`
				}
				return html;
			}
		},

		mounted () {
			let len = this.trainer.length;
			let $trainer = this.$refs.trainer;	// ul
			let $lis = document.getElementsByTagName('li');	// li

			// 设置ul的宽度为li的几倍
			$trainer.style.width = len*3.2 + 'rem';
		}
	}

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin'; 

	/* 明星私教 */
	.star-trainer {
		background: $top_bgc;
		.trainer-box {
			position: relative;
			width: 100%;
			overflow: scroll;
			.trainer {
				display: flex;
				padding: 0.1rem;
				li {
					float: left;
					div {
						width: 3.2rem;
						color: $cc;
						&.trainer-name {
							
						}
						&.feature {
							span {
								background: $bc;
								margin-top: 0.1rem;
							}
						}
						img {
							width: 3rem;
							height: 3rem;
							border-radius: 0.1rem;
						}
					}
				}
			}
		}
	}

</style>