const VueRouter = require('vue-router').default;

const router = new VueRouter({
  base: __dirname,
  routes: require('@/vue/routes'),
  mode: 'hash',
});

router.beforeEach((from, to, next) => {
  document.querySelectorAll('*').forEach(e=>e.scrollTo(0,0));
  next();
});

module.exports = router;
