// import Test from '@/views/test/Test'
const Test = () => import('@/views/test/Test')
export default [
  {
    path: '/test',
    name: 'test',
    component: Test,
    meta: {
      title: '通讯录'
    },
  }
]
