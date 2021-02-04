const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations')

const url = `mongodb://localhost:27017/`;
const dbname = 'conFusion';

MongoClient.connect(url, (err, client ) => {

	assert.strictEqual(err, null);
	console.log("Connected successfully to the server");
	const db = client.db(dbname);

	dboper.insertDocument(db, { name: "Vadonut", description: "Test"}, 'dishes', (result) => {
		console.log("Insert Document:\n", result.ops);

		dboper.findDocuments(db, 'dishes', (docs) => {
			console.log('Found Documents:\n', docs);

			dboper.updateDocument(db, {name: "Vadonut"}, {description: 'Updated Test'}, 'dishes', (result) => {
				console.log('Updated Document:\n', result.result);

				dboper.findDocuments(db, 'dishes', (docs)=>{
					console.log("Found Documents:\n", docs);

					db.dropCollection('dishes', (result) => {
						console.log("Dropped Collection: ", result);

						client.close();
					});
				});
			});
		});
	});


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
});