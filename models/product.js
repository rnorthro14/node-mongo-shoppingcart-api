const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);

// const mongodb = require('mongodb');
// const getDb = require('../util/database').getDb;

// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//     this.userId = userId;
//   }

//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       // Update 
//       dbOp = db.collection('products')
//       .updateOne(
//         { _id: this._id }, 
//         { $set: this }
//       );
//     } else {
//       // Add
//       dbOp = db.collection('products').insertOne(this)
//     }
//     return dbOp
//     .then(result => {
//       console.log(result);
//     })
//     .catch(err => {
//       console.log('Problem inserting into collection', err);
//     });

//   }

//   // this must be a static array in order to work
//   static fetchAll() {
//     const db = getDb();
//     return db.collection('products')
//     .find()
//     .toArray() // temporary - would only be suitable for limited number of collections
//     .then(products => {
//       console.log(products);
//       return products;
//     })
//     .catch(err => {
//       console.log('Problem getting all data from producs', err)
//     });
//   }

//   static fetchById(prodId) {
//     const db = getDb();
//     return db.collection('products')
//     .find({ _id: new mongodb.ObjectId(prodId) })
//     .next()
//     .then(product => {
//       console.log(product);
//       return product;
//     })
//     .catch(err => {
//       console.log('Problem getting product by Id', err);
//     })
//   }

//   static deleteById(prodId) {
//     const db = getDb();
//     return db.collection('products')
//     .deleteOne({ _id: new mongodb.ObjectId(prodId) })
//     .then(result => {
//       console.log('Deleted item.');
//     })
//     .catch(err => {
//       console.log('Problem deleting product by Id', err);
//     })
//   }

// }

// module.exports = Product;
