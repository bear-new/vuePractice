<!-- 轮播效果 -->
<template>
	<mt-swipe :auto="3000">
      	<mt-swipe-item v-for="img in images">
	  		<img :src="img" />
	  	</mt-swipe-item>
    </mt-swipe>
</template>

<script>

	import { Swipe, SwipeItem } from 'mint-ui'
	
	export default {
		
		data () {
			return {

			}
		},

		props: ['images'],

		components: {
			'mt-swipe': Swipe,
			'mt-swipe-item': SwipeItem
		},

	}

</script>

<style lang="scss">

	/* 轮播 */
    .mint-swipe {
        height: 6rem;
        .mint-swipe-item {
        	img {
		    	width: 100%;
		    	height: 6rem;
		    }
        }
        .mint-swipe-indicators {
        	left: 70%;
        	bottom: 16px;
        	transform: translateX(0);
        	-webkit-transform: translateX(0);
	        .mint-swipe-indicator {
		  		width: 1rem;
			    height: 0.1rem;
			    border-radius: 5px;
			    opacity: 1;
			    background: #FFF;
			    margin-left: -0.2rem;
		  	}
		  	.is-active {
		  		background: red;
		  	}
        }
    }

    
</style>