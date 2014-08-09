var resourcefuljs = require("resourcefuljs");
var HttpAdapter = resourcefuljs.HttpAdapter;

function ExpressAdapter() {

}


//ExpressAdapter.prototype = HttpAdapter;
//ExpressAdapter.prototype.constructor = ExpressAdapter;
ExpressAdapter.prototype = _.create(HttpAdapter.prototype, { 'constructor': ExpressAdapter });
//ExpressAdapter.prototype = Object.crate(HttpAdapter);

module.exports = ExpressAdapter;

