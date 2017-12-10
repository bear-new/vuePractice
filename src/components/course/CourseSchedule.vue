<template>
	<div class="course-schedule">
		<header-title v-show="isShowHeader" title="课程表" />
		<ul class="course-box">
			<li v-for="item in course" @click="load_course_details(item)">
				<div class="course-poster">
					<img :src="item.poster" />
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

		props: ['isShowHeader', 'course'],
		
		components: {
			'header-title': HeaderTitle
		},

		methods: {

			// 预约
			appoint () {
				console.log('预约')
			},

			// 课程详情
			load_course_details (course) {
				this.$router.push({ path: 'CourseDetails' })
			}
		}

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
			padding: 0.2rem 0;
			border-bottom: 1px $bc solid;
			.course-poster {
				flex: 1;
				img {
					width: 1.5rem;
					height: 1.5rem;
					border-radius: 50%;
				}
			}
			.course-content {
				flex: 2;
				text-align: left;
				color: $tc;
				div {
					line-height: 0.6rem;
				}
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