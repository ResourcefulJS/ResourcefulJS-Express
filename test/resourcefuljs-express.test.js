var resourcefuljsExpress = require("../lib/resourcefuljs-express");
var ExpressAdapter = require("../lib/express-adapter");

describe("ResourcefulJS-Express", function() {

    it("should return ExpressAdapter class", function() {
        resourcefuljsExpress.should.equal(ExpressAdapter);
    });

});

