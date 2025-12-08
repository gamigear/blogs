import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::community-post.community-post', ({ strapi }) => ({
  // Override create to set default status
  async create(ctx) {
    const { data } = ctx.request.body;
    
    // Always set status to pending for new posts
    ctx.request.body.data = {
      ...data,
      status: 'pending',
    };

    const response = await super.create(ctx);
    return response;
  },

  // Custom action for moderators to approve/reject
  async moderate(ctx) {
    const { id } = ctx.params;
    const { status, moderatorNotes } = ctx.request.body;

    if (!['approved', 'rejected'].includes(status)) {
      return ctx.badRequest('Invalid status');
    }

    const post = await strapi.entityService.update('api::community-post.community-post', id, {
      data: { 
        status, 
        moderatorNotes 
      } as any,
    });

    return post;
  },
}));
