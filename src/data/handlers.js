import db, { auth } from '../fbase';

export const addNewProductToDatabase = product => {
  console.log('auth current user from handler:', auth.currentUser);
  console.log('NEW PRODUCT z handlera:', product);

  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('products')
    .doc(product.id)
    .set(product);
};

export const databaseListener = callback => {
  return (
    db
      .collection('users')
      // .doc('FyMcgt8sSqg4AquNvQAHOak062T2')
      .doc(auth.currentUser.uid)
      .collection('products')
      .onSnapshot(querySnapshot => {
        const downloadedProducts = [];

        querySnapshot.forEach(doc => {
          const newProduct = { ...doc.data() };
          downloadedProducts.push(newProduct);
        });

        callback(downloadedProducts);
      })
  );
};
