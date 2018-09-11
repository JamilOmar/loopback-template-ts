'use strict';

export default (CoffeeShop) => {
    CoffeeShop.getName = async (shopId) => {
        const instance = await CoffeeShop.findById(shopId);
        const response = "Name of coffee shop is " + instance.name;
        return response;
    };

    CoffeeShop.status = async ()=>{
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const OPEN_HOUR = 6;
        const CLOSE_HOUR = 20;
        console.log('Current hour is %d', currentHour);
        let response;
        if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
            response = 'We are open for business.';
        } else {
            response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
        }
        return response;
    };

    CoffeeShop.remoteMethod(
        'status', {
          http: {
            path: '/status',
            verb: 'get'
          },
          returns: {
            arg: 'status',
            type: 'string'
          }
        }
      );
    CoffeeShop.remoteMethod (
        'getName',
        {
          http: {path: '/getname', verb: 'get'},
          accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
          returns: {arg: 'name', type: 'string'}
        }
    );
};
