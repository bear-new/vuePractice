<template>
	<div class="technical-support" :class="{'fixedBottom' : isFill}">
	       <span class="line-left"></span>
		<span class="text">由<i>健身助手</i>提供技术支持</span>
		<span class="line-right"></span>
	</div>
</template>

<script type="text/javascript">
    
    export default {

        props: ['isFill']

    }

</script>

<style lang="scss" scoped>

	@import 'src/style/mixin';

	/* 技术支持 */
	.technical-support {
		display: -webkit-box;
		display: flex;
		-webkit-box-pack: center;
        justify-content: center;
		-webkit-box-align: center;
        align-items: center;
        height: 1rem;
        .line-left, .line-right {
        	display: inline-block;
        	*display: inline;
        	*zoom: 1;
        	width: 1.2rem;
        	background: $tc;
        	height: 0.05rem;
        }
        .line-left {
        	background: linear-gradient(to right, transparent, $cc)
        }
        .line-right {
        	background: linear-gradient(to left, transparent, $cc)
        }
        .text {
        	margin: 0 0.2rem;
        	color: $cc;
        	i {
        		color: $tc;
        		font-style: normal;
        	}
        }
	}
    .fixedBottom {
        position: fixed;
        width: 100%;
        bottom: 1.5rem;
    }
</style>