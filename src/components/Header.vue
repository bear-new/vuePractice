<template>
	<mt-header>
	    <mt-button slot="left">
	    	<span class="twig"></span>
			<span class="title">{{ title }}</span>
	    </mt-button>
	  	<mt-button slot="right">
	  		<svg class="icon" aria-hidden="true">
			  	<use xlink:href="#icon-iconfontxiangxia1copy19"></use>
			</svg>
	  	</mt-button>
	</mt-header>
</template>

<script>

	import { Header, Button } from 'mint-ui' 

	export default {
		
		data () {
			return {

			}
		},

		components: {
			'mt-header': Header,
			'mt-button': Button
		},

		props: ['title']

	}

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	.mint-header {
		background: transparent;
		@include font(0.45rem, 1rem);
		height: 1rem;
		color: $cc;
		.twig {
			position: relative;
			display: inline-block;
			@include wh(0.08rem, 0.5rem);
			top: 0.1rem;
			background: $sc;
		}
		.title {
			color: $tc;
		}
	}
	
</style>