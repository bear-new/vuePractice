<template>
	<div class="course-schedule">
		<header-title title="课程表" />
		<ul class="course-box">
			<li v-for="item in course">
				<div class="course-poster">
					<img :src="item.poster" onload="resizeimg(this,600,600);" />
				</div>
				<div class="course-content">
					<div>{{ item.name }}</div>
					<div class="feature">{{ item.feature }}</div>
					<div><label>上课时间：</label>{{ item.time }}</div>
					<div><label>上课教练：</label>{{ item.coach }}</div>
				</div>
				<div class="course-operate">
					<button v-if="item.isAppoint" class="appoint" @click="appoint">预约</button>
					<span v-else class="booked">已预约</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	
	import HeaderTitle from '@/components/Header'

	export default {

		data () {
			return {

			}
		},

		props: ['course'],
		
		components: {
			'header-title': HeaderTitle
		},

	}

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	.course-box {
		li {
			display:-webkit-box;
			display:flex;
			justify-content: center;
			align-items: center;
			.course-poster {
				flex: 1;
				img {
					width: 100%;
					height: auto;
					border-radius: 50%;
				}
			}
			.course-content {
				flex: 2;
				text-align: left;
				color: $tc;
				.feature, label {
					color: $cc;
				}
			}
			.course-operate {
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

</style>