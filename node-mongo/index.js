const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations')

const url = `mongodb://localhost:27017/`;
const dbname = 'conFusion';

//MongoClient.connect(url, (err, client ) => {
// this line when added in connect() doesnt give deprecation warning {useNewUrlParser: true, useUnifiedTopology: true}
MongoClient.connect(url , {useNewUrlParser: true, useUnifiedTopology: true}).then((client) => {
	//assert.strictEqual(err, null);
	console.log("Connected successfully to the server");
	const db = client.db(dbname);

	dboper.insertDocument(db, { name: "Vadonut", description: "Test"}, 'dishes')
	.then((result) => {

		console.log("Insert Document:\n", result.ops);

		return dboper.findDocuments(db, 'dishes')
	})
	.then((docs) => {
			
		console.log('Found Documents:\n', docs);

		return dboper.updateDocument(db, {name: "Vadonut"}, {description: 'Updated Test'}, 'dishes')
	})
	.then((result) => {
			
		console.log('Updated Document:\n', result.result);

		return dboper.findDocuments(db, 'dishes')
	})
	.then((docs)=>{
					
		console.log("Found Documents:\n", docs);

		return db.dropCollection('dishes')
	})
	.then((result) => {
		
		console.log("Dropped Collection: ", result);

		return client.close();
	})
	.catch((err) => console.log(err));
})
.catch((err) => console.log(err)); // this line of code was added later


/*	THIS WAS THE OLD CODE WITH WHICH I HAD ACTUALLY BEGUN YOU CAN REFER TO IT LATER
	const collection = db.collection('dishes');

	collection.insertOne({"name": "Utthapizza", "description": "Test"}, (err, result) => {
		assert.strictEqual(err, null)
		
		console.log('After Insert : \n');
		console.log(result.ops);

		collection.find({}).toArray((err, docs) => {
			assert.strictEqual(err, null);

			console.log('Found:\n');
			console.log(docs);

			db.dropCollection('dishes', (err, result) => {
				assert.strictEqual(err, null);

				client.close();
			});
		});
	});
});
*/
//});