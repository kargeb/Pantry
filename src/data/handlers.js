import db, { auth } from '../fbase';

export const addNewProductToDatabase = product => {
  console.log('auth current user from handler:', auth.currentUser);
  console.log('NEW PRODUCT z handlera:', product);

  //   db.collection('products').doc(newProduct.id).set(newProduct);
  db.collection('users')
    .doc('u1sYNdEoRknGeHEIzGgY')
    .collection('products')
    .doc(product.id)
    .set(product);
};

export const shutUpLinter = () => {};
