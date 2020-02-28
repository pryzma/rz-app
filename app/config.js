/*
* app/config.js
*/
'use strict';
const rzConfig = require('../config/rz.json');
module.exports = ()=>{
  rzConfig.ref_adr = process.env.REF_ADR;
  rzConfig.version = require('../package.json').version;
  rzConfig.npm_lifecycle_event = process.env.npm_lifecycle_event;
  rzConfig.ref_ws_port = process.env.REF_WS_PORT;
  const models = require('../models');
  rzConfig.models = new Object({});
  for(let model of Object.getOwnPropertyNames(models.sequelize.models)){
    rzConfig.models[model] = models[model].rawAttributes;
  }
  return rzConfig;
}

