<template>
	<div>
		<transition  name="fade">
			<div v-show="isShow" class="test-box">123</div>
		</transition>
		<button @click="test">test</button>
		<div v-html="html"></div>
	</div>
</template>

<script type="text/javascript">
	
	import { Cell } from 'mint-ui';

	export default {

		data () {

			return {
				isShow: true,
				html: ''
			}
		},

		components: {
			'mt-cell': Cell
		},

		methods: {
			test () {
				this.isShow = !this.isShow
			}
		},

		created () {
			this.html = `<mt-cell title="标题文字"></mt-cell>`
		}
	}

</script>

<style lang="scss" scoped>
	
	.test-box {
		width: 100%;
		height: 100px;
		background: red;
	}

	.fade-enter-active, .fade-leave-active {
		-webkit-transition: all .5s ease;
		  	-o-transition: all .5s ease;
		  	transition: all .5s ease;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
	  	opacity: 0;
	  	margin-top: 50px;
	  	height: 0px;
	}

</style>