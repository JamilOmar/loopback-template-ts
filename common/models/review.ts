'use strict';

export default (Review) => {

    Review.beforeRemote('create', (context, user, next) => {
        context.args.data.date = Date.now();
        context.args.data.publisherId = context.req.accessToken.userId;
        next();
    });

};
