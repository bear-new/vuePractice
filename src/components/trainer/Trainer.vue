<template>
	<div class="trainer">
		<div>
			<ul>
				<li v-for="item in trainer">
					<div class="trainer-poster">
						<img :src="item.poster" />
					</div>
					<div class="trainer-content">
						<div>
							<span class="name">{{ item.name }}</span>
							<span class="grade" v-html="gradeHtml(item.grade)"></span>
						</div>
						<div class="info">{{ item.info }}</div>
						<div class="feature">
							<span v-for="i in item.feature">#{{ i }}</span>
						</div>
					</div>
					<div class="trainer-operate">
						<button v-if="item.isAppoint" class="appoint" @click="appoint">预约</button>
						<span v-else class="booked">已预约</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default {
		
		data () {
			return {
				
			}
		},

		props: ['trainer'],

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

	}

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin'; 

	/* 私人教练 */
	.trainer {
		ul {
			padding: 0.1rem 0;
			li {
				background: $top_bgc;
				margin: 0.2rem;
				border-radius: 10px;
				display:-webkit-box;
				display:flex;
				justify-content: center;
				align-items: center;
				padding: 0.2rem 0;
				border-bottom: 1px $bc solid;
				.trainer-poster {
					flex: 1;
					img {
						width: 1.5rem;
						height: 1.5rem;
						border-radius: 50%;
					}
				}
				.trainer-content {
					flex: 2;
					text-align: left;
					color: $cc;	
					div {
						line-height: 0.6rem;
					}
					.name {
						color: $tc;
					}
					.feature, label {
						span {
							background: $bc;
							margin-top: 0.1rem;
							margin-right: 0.2rem;
						}
					}
				}
				.trainer-operate {
					flex: 1;
					color: $sc;
					.appoint {
						border: 1px $sc solid;
						background: transparent;
						color: $sc;
						border-radius: 5px;
						padding: 0.1rem 0.2rem;
					}
				}	
			}
		}
		
	}

</style>