import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'  //首页
import Home from '@/pages/home/Home.vue'
import AboutUs from '@/pages/aboutUs/AboutUs'  //关于我们
import Appointment from '@/pages/coursers/Appointment'  //立即预约
import Calender from '@/pages/coursers/Calender'  //日历弹窗
import Cancel from '@/pages/coursers/Cancel'   //取消预约
import Cousers from '@/pages/coursers/Cousers'  //课程
import Details from '@/pages/coursers/Details'  //课程详情
import Members from '@/pages/members/Members'  //会员中心
import Team from '@/pages/coursers/Team'  //已成团
import Vip from '@/pages/members/Vip'  //会员卡
import Pt from '@/pages/pt/Pt'  //私教	

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {  
      path: '/',
      name: 'Index',
      component: Index
    },
    // 课程
    {
      path: '/cousers/Cousers',
      component: Cousers
    },
    // 私教
    {
      path: '/pt/Pt',
      component: Pt
    },
    // 会员中心
    {
      path: '/members/Members',
      component: Members
    },
    // 关于我们
    {
      path: '/aboutUs/AboutUs',
      component: AboutUs
    },
    // 日历弹窗
    {
      path: '/coursers/Calender',
      component: Calender
    },
    // 立即预约
    {
      path: '/coursers/Appointment',
      component: Appointment
    },
    // 课程详情
    {
      path: '/coursers/Appointment',
      component: Appointment
    },
    // 取消预约
    {
      path: '/coursers/Cancel',
      component: Cancel
    },
    // 会员卡
    {
      path: '/members/Vip',
      component: Vip
    },
    // 已成团
    {
      path: '/coursers/Team',
      component: Team
    },
  ]
})
