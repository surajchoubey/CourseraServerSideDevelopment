const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.insertOne(document);
    /*
    coll.insert(document, (err, result) => {
        assert.strictEqual(err, null);
        console.log("Inserted " + result.result.n + " documents into the collection."); // n tells us how many documents are going to be printed
        callback(result);
    });
    */
};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
    /*
    coll.find({}).toArray((err, docs) => {
        assert.strictEqual(err, null);
        callback(docs);
    });
    */
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document);
    /*
    coll.deleteOne(document, (err, result) => {
        assert.strictEqual(err, null);
        console.log("Removed the document ", document);
        callback(results);
    });
    */
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);  
    return coll.updateOne(document, { $set: update }, null);
    /* 
    coll.updateOne(document, { $set: update}, null, (err, result) => {
        assert.strictEqual(err, null);
        console.log("Updated the document with ", update);
        callback(result);
    });
    */
};