var resourcefuljs = require("resourcefuljs");
var HttpAdapter = resourcefuljs.HttpAdapter;

function ExpressAdapter() {

}
ExpressAdapter.prototype = Object.create(HttpAdapter.prototype);
ExpressAdapter.prototype.constructor = ExpressAdapter;

module.exports = ExpressAdapter;

