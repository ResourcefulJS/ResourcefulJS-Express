var resourcefuljs = require("resourcefuljs");
var HttpAdapter = resourcefuljs.HttpAdapter;

var ExpressAdapter = require("../lib/express-adapter");

describe("ExpressAdapter", function() {

    it("should be a class", function() {
        ExpressAdapter.should.be.a("function");
        ExpressAdapter.prototype.constructor.should.equal(ExpressAdapter);
    });

    describe("instance", function() {

        it("should be instance of ExpressAdapter", function() {
            var adapter = new ExpressAdapter();

            adapter.should.be.instanceof(ExpressAdapter);
        });

        it("should be instance of HttpAdapter", function() {
            var adapter = new ExpressAdapter();

            adapter.should.be.instanceof(HttpAdapter);
        });

    });

});

