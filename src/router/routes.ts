const VotePage = () => import('../views/VotePage.vue')
const StatsPage = () => import('../views/StatsPage.vue')

export default [
    { path: '/', component: VotePage },
    { path: '/stats', component: StatsPage },
  ]