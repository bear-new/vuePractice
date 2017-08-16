<template>
    <div>
      <!-- 展示页面 -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="首页">
            <home />
          </mt-tab-container-item>

          <mt-tab-container-item id="课程">
           <courses />
          </mt-tab-container-item>

          <mt-tab-container-item id="私教">
            <pt />
          </mt-tab-container-item>

          <mt-tab-container-item id="会员中心">
            <members />
          </mt-tab-container-item>

          <mt-tab-container-item id="联系我们">
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

<script type="text/javascript">

  import '../assets/js/iconfont.js';
  import { Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
  
  import Home from '../pages/home/Home.vue';
  import Courses from '../pages/courses/Courses.vue';
  import Pt from '../pages/pt/Pt.vue';
  import Members from '../pages/members/Members.vue';
  import AboutUs from '../pages/aboutUs/AboutUs.vue';

  export default {
        
    data () {
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
          svg: '#icon-menmbers',
          selected: false
        },
        {
          name: '联系我们',
          svg: '#icon-about',
          selected: false
        },
      ];
      let selected = '首页';

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
      'courses': Courses,
      'pt': Pt,
      'members': Members,
      'about-us': AboutUs
    },
    
    methods: {
      
    }
    
  }

</script>

<style lang="scss" scoped>
    @import '../style/mixin';
  .tab-bar {
    @include font(0.35rem, 1.5rem);
    .mint-tab-item {
      svg {
        color: red;
        font-size: 0.6rem;
        margin-bottom: 0.2rem;
      }
      .selected {
        color: $gray_bgc;
      }
    }
    .is-selected {
      background: $black_bgc;
      color: $sc;
      text-decoration: none;
    }
  }
</style>

  