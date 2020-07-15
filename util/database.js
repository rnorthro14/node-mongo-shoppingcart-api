const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = (callback) => {
    MongoClient
    .connect('mongodb+srv://robert2:GUpNkycrfbryF8tj@cluster0-dsc7f.mongodb.net/shoppingmarket?retryWrites=true&w=majority',
    { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected succesfully to db');
        _db = client.db()
        callback();
    })
    .catch(err => {
        console.log('DB connection failed', err)
        throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
