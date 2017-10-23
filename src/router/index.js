import Vue from 'vue'
import Router from 'vue-router'

/* 外层主页面 */
import Index from '@/pages/Index'  //首页
import Course from '@/pages/course/Course'  //课程
import Pt from '@/pages/pt/Pt'  //私教  
import MemberCard from '@/pages/memberCard/MemberCard'  //会员中心
import AboutUs from '@/pages/aboutUs/AboutUs'  //关于我们
/* 内层详情页面 */
import CourseDetails from '@/pages/course/CourseDetails' // 课程详情
/* 测试 */
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {  
      path: '/',
      name: 'Index',
      component: Index
    },
    // 测试
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    // 课程
    {
      path: '/course/Course',
      component: Course,
      children: [
        {
          name: 'course-details',
          path: 'CourseDetails',
          component: CourseDetails,
        }
      ]
    },
    // 私教
    {
      path: '/pt/Pt',
      component: Pt
    },
    // 会员中心
    {
      path: '/memberCard/MemberCard',
      component: MemberCard
    },
    // 关于我们
    {
      path: '/aboutUs/AboutUs',
      component: AboutUs
    },
  ]
})
