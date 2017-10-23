<template>
	<div>
		<!-- 展示页面 -->
		<mt-tab-container class="page-tabbar-container" v-model="selected">
			<mt-tab-container-item id="首页">
	        	<home />
          	</mt-tab-container-item>

          	<mt-tab-container-item id="课程">
	        	<course />
          	</mt-tab-container-item>

	        <mt-tab-container-item id="私教">
	        	<pt />
	        </mt-tab-container-item>

	        <mt-tab-container-item id="会员中心">
	        	<member-card />
	        </mt-tab-container-item>

	        <mt-tab-container-item id="关于我们">
	        	<about-us />
	        </mt-tab-container-item>
		</mt-tab-container>
		
		<!-- tab标签 -->
        <mt-tabbar fixed v-model="selected" class="tab-bar">
          	<template v-for="tab in tabs" >
            	<mt-tab-item :id="tab.name" >
              		<svg class="icon" aria-hidden="true">
                		<use :xlink:href="tab.svg"></use>
              		</svg>
              		<p>{{ tab.name }}</p>
            	</mt-tab-item>
          	</template>
        </mt-tabbar>
	</div>
</template>

<script>

	import '@/assets/js/iconfont.js';
  	import { Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
  	import Home from '@/pages/home/Home.vue';
	import Course from '@/pages/course/Course.vue';
	import Pt from '@/pages/pt/Pt.vue';
	import MemberCard from '@/pages/memberCard/MemberCard.vue';
	import AboutUs from '@/pages/aboutUs/AboutUs.vue';
	
	export default {

		data () {
			let selected = '首页';
	      	let tabs = [
		        {
		          name: '首页',
		          svg: '#icon-index',
		          selected: true
		        },
		        {
		          name: '课程',
		          svg: '#icon-courses',
		          selected: false
		        },
		        {
		          name: '私教',
		          svg: '#icon-pt',
		          selected: false
		        },
		        {
		          name: '会员中心',
		          svg: '#icon-members',
		          selected: false
		        },
		        {
		          name: '关于我们',
		          svg: '#icon-about',
		          selected: false
		        },
	      	];

	      	return {
	        	tabs,
	        	selected
	      	};
	    },

	    components: {
		    'mt-tabbar': Tabbar,
		    'mt-tab-item': TabItem,
		    'mt-tab-container': TabContainer,
		    'mt-tab-container-item': TabContainerItem,
		    'home': Home,
		    'course': Course,
		    'pt': Pt,
		    'member-card': MemberCard,
		    'about-us': AboutUs
	    },

		created () {
			document.title = '健身助手';
		},
	}

</script>

<style lang="scss" scoped>

    @import 'src/style/mixin';

    .mint-tab-container {
    	margin-bottom: 1.3rem;
    }
	.tab-bar {
		@include font(.35rem, 1.5rem);
	    background: $top_bgc;
	    color: $cc;
	    box-shadow: -4px -2px 4px 1px $bc; 
	    .mint-tab-item {
	    	font-size: .24rem;
		    svg {
		        color: #ddd;
		        font-size: 0.5rem;
		        margin-bottom: .15rem;
		    }
	    }
	    .is-selected {
	      	color: $sc;
	      	background: none;
	      	text-decoration: none;
	      	svg {
	        	color: $sc;
	        }
	    }
	}

</style>