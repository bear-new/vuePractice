<template>
	<div class="calendar">
		<template v-if="date">
			<span class="date" @click="open()">{{date}}</span>
		</template>
		<template v-else>
			<img :src="require('@/assets/img/icon/common_ic_calendar@2x.png')" @click="open()"/>
		</template>
		<mt-datetime-picker
			ref="picker"
		    type="date"
		    year-format="{value} 年"
  			month-format="{value} 月"
			date-format="{value} 日"
		    @confirm="handleChange">
	    </mt-datetime-picker>
	</div>
</template>

<script>
	
	import { DatetimePicker } from 'mint-ui';

	export default {

		data () {
			return {
				value: '',
				date: ''
			}
		},

		components: {
			'mt-datetime-picker': DatetimePicker
		},

		methods: {
			
			open() {
				this.$refs.picker.open();
			},

			handleChange(date) {
				let y = date.getFullYear();
				let m = date.getMonth() + 1;
				let d = date.getDate();
				m = m < 10 ? ('0' + m) : m;
				d = d < 10 ? ('0' + d) : d;
				this.date = y + '-' + m + '-' + d;
				this.value = date.toString();
				console.log(this.date)
				console.log(this.value)
			} 
		},

	}

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	.calendar {
		height: 1.2rem;
		line-height: 1.2rem;
		.date {
			@include sc(0.5rem, #26a2ff);
		}
	}
</style>
