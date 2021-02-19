const Test = () => import(/* webpackChunkName: "home" */ '../views/home/test')
const Login = () => import(/* webpackChunkName: "login" */ '../views/login/index')

const routerConfig = {
  router: [
    {
      path: '/',
      exact: true,
      component: Test,
    },
    {
      path: '/login',
      exact: true,
      component: Login,
    },
  ],
}

export default routerConfig
