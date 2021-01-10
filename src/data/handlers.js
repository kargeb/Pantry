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

// prettier-ignore
export const updateProductQuantityInDatabase = (quantity, onShoppingList, id) => {
  db.collection('users')
  .doc(auth.currentUser.uid)
  .collection('products')
  .doc(id)
  .update({
    quantity,
    onShoppingList,
  });
};

export const removeProductFromDatabase = id => {
  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('products')
    .doc(id)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch(error => {
      console.error('Error removing document: ', error);
    });
};

export const addCategoryToDatabase = newCategories => {
  return db
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('categories')
    .doc('category')
    .set(newCategories)
    .then(() => console.log('DODANO'))
    .catch(error => {
      console.error('Sth wrong with new category ', error);
    });
};
