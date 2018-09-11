'use strict';

import {LoopBackApplication} from 'loopback';
module.exports = function enableAuthentication(app: LoopBackApplication) {
  // enable authentication
  app.enableAuth();
}
