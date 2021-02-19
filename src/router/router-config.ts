const Test = () => import(/* webpackChunkName: "test" */ '../views/test/test')
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
