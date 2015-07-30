var nk = require('../../index.js');
var util = require('util');


// exports.testAddrFlush = function(test) {
// 	// // flush everything on eth2
// 	// test.doesNotThrow(function() {
// 	// 	nk.ipAddress("flush","inet","eth2",null,null,function(err,bufs){
// 	// 	 	if(err) throw new Error("testAddrFlush() Error: " + util.inspect(err));
// 	// 		nk.ipAddress("flush","inet6","eth2",null,null,function(err,bufs){
// 	// 		 	if(err) throw new Error("testAddrFlush() Error: " + util.inspect(err));
// 			 	test.done();
// 	// 		});
// 	// 	});
// 	// });
// };

exports.group = {

	testLinkNullOptionsForSet: function(test){
		test.doesNotThrow(function() {
			nk.link("set", "eth2", null, function(err,bufs){
				if(err !== null)
					throw new Error("testLinkNullOptionsForSet() Error: " + util.inspect(err));
			    test.done();
			} );
		});
	},
};

