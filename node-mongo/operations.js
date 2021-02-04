const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
        assert.strictEqual(err, null);
        console.log("Inserted ");
    });
};

exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);    
};