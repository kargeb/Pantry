import db, { auth, arrayUnion } from '../fbase';
// import db, { auth } from '../fbase';

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

export const setCategoriesDatabaseListener = callback => {
  return db
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('categories')
    .onSnapshot(querySnapshot => {
      let categoriesFromDatabes = null;

      querySnapshot.forEach(doc => {
        // console.log('DOC DATA: KATEGORIES', doc.data().categories);
        categoriesFromDatabes = [...doc.data().categories];
      });

      console.log('CATEGORIES FROM DATABASE:', categoriesFromDatabes);
      callback(categoriesFromDatabes);
    });
};

export const setProductsDatabaseListener = callback => {
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
  console.log('DOSTALEM neqw category:', newCategories);

  return db
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('categories')
    .doc('category')
    .update({
      categories: arrayUnion(newCategories),
    })
    .then(() => console.log('DODANO'))
    .catch(error => {
      console.error('Sth wrong with new category ', error);
    });

  // return db
  //   .collection('users')
  //   .doc(auth.currentUser.uid)
  //   .collection('categories')
  //   .doc('category')
  //   .set(newCategories)
  //   .then(() => console.log('DODANO'))
  //   .catch(error => {
  //     console.error('Sth wrong with new category ', error);
  //   });
};
