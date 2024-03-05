'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('dashbored')
      .service('myService')
      .getWelcomeMessage();
  },
});
