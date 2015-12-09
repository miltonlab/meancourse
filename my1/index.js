var _=require('underscore');
_.each([1,2,3,4], function(v){
	console.log(v);
});
var mongodb = require("mongodb");
console.log("mongodb driver loaded !!!");

uri = "mongodb://<user>:<pass>@ds027345.mongolab.com:27345/meancourse";
mongodb.MongoClient.connect(uri, function(error, db){
		if (error) {
			console.log("error al conectar" + error);
			process.exit(1);
		}
	});
console.log("mongodb database connected !!!");