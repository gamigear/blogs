export default {
  routes: [
    {
      method: 'PUT',
      path: '/community-posts/:id/moderate',
      handler: 'community-post.moderate',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
  ],
};
