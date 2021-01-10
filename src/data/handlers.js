import db, { auth } from '../fbase';

export const addNewProductToDatabase = product => {
  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('products')
    .doc(product.id)
    .set(product);
};

export const getAllCategories = () => {
  return db
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('categories')
    .doc('category')
    .get()
    .then(doc => doc.data().categories);
};

export const setDatabaseListener = callback => {
  return db
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('products')
    .onSnapshot(querySnapshot => {
      const downloadedProducts = [];

      querySnapshot.forEach(doc => {
        const newProduct = { ...doc.data() };
        console.log('DOC DATA:', doc.data());
        downloadedProducts.push(newProduct);
      });

      callback(downloadedProducts);
    });
};

export const updateProductQuantityInDatabase = (quantity, onShoppingList, id) => {
  db.collection('users').doc(auth.currentUser.uid).collection('products').doc(id).update({
    quantity,
    onShoppingList,
  });
};
