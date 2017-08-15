import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'  //首页
import Home from '@/pages/home/Home.vue'
import AboutUs from '@/pages/aboutUs/AboutUs'  //关于我们
import Appointment from '@/pages/courses/Appointment'  //立即预约
import Calender from '@/pages/courses/Calender'  //日历弹窗
import Cancel from '@/pages/courses/Cancel'   //取消预约
import Courses from '@/pages/courses/Courses'  //课程
import Details from '@/pages/courses/Details'  //课程详情
import Members from '@/pages/members/Members'  //会员中心
import Team from '@/pages/courses/Team'  //已成团
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
      path: '/courses/Courses',
      component: Courses
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
      path: '/courses/Calender',
      component: Calender
    },
    // 立即预约
    {
      path: '/courses/Appointment',
      component: Appointment
    },
    // 课程详情
    {
      path: '/courses/Appointment',
      component: Appointment
    },
    // 取消预约
    {
      path: '/courses/Cancel',
      component: Cancel
    },
    // 会员卡
    {
      path: '/members/Vip',
      component: Vip
    },
    // 已成团
    {
      path: '/courses/Team',
      component: Team
    },
  ]
})
