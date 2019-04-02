

module.exports = [
  {
    name: "index",
    path: "/",
    component: require('@/vue/views/Index.vue').default,
  },

  {
    name: "story",
    path: "/story/:id",
    component: require('@/vue/views/Story.vue').default,
  },
];
