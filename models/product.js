const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db.collection('products').insertOne(this)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log('Problem inserting into collection', err);
    });
  }

  // this must be a static array in order to work
  static fetchAll() {
    const db = getDb();
    return db.collection('products')
    .find()
    .toArray() // temporary - would only be suitable for limited number of collections
    .then(products => {
      console.log(products);
      return products;
    })
    .catch(err => {
      console.log('Problem getting all data from producs', err)
    });
  }

  static fetchById(prodId) {
    const db = getDb();
    return db.collection('products')
    .find({ _id: new mongodb.ObjectId(prodId) })
    .next()
    .then(product => {
      console.log(product);
      return product;
    })
    .catch(err => {
      console.log('Problem getting product by Id', err);
    })
  }

}

module.exports = Product;
