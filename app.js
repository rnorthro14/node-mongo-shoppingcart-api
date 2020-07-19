const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.fetchUserById('5f109fb57cc8a45f39be82ee')
//   .then(user => {
//     req.user = new User(user.name, user.email, user.cart, user._id);
//     next();
//   })
//   .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
.connect('mongodb+srv://robert2:GUpNkycrfbryF8tj@cluster0-dsc7f.mongodb.net/shoppingcart?retryWrites=true',
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {
  console.log('Connect to port 3000 through mongoose');
  app.listen(3000);
})
.catch(err => {
  console.log('Problem connecting to the server', err)
});

