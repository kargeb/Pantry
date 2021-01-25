import db, { auth, arrayUnion, arrayRemove } from './firebaseConfig';
import { sampleCategories, sampleProducts } from './sampleData';

// ***************************************************
// USER AUTHENTICATION
// ***************************************************

export const logIn = (userName, userPassword) => {
  return auth.signInWithEmailAndPassword(userName, userPassword).then(user => {
    return user.user.email;
  });
};

export const registerUserInUsersDatabase = (userName, userPassword) => {
  return auth
    .createUserWithEmailAndPassword(userName, userPassword)
    .then(cred => {
      return cred.user.uid;
    });
};

export const registerUserInProductDatabase = id => {
  return db
    .collection('users')
    .doc(id)
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

export const logOut = () => {
  auth
    .signOut()
    .then(() => {})
    .catch(error => {
      console.log(error);
    });
};

//* ***************************************************
// PRODUCTS AND CATEGORIES
//* ***************************************************

export const addNewProductToDatabase = product => {
  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('products')
    .doc(product.id)
    .set(product);
};

export const setCategoriesDatabaseListener = callback => {
  return db
    .collection('users')
    .doc(auth.currentUser.uid)
    .collection('categories')
    .onSnapshot(querySnapshot => {
      let categoriesFromDatabase = null;

      querySnapshot.forEach(doc => {
        categoriesFromDatabase = [...doc.data().categories];
      });

      if (categoriesFromDatabase) {
        callback(categoriesFromDatabase);
      }
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
        downloadedProducts.push(newProduct);
      });

      if (downloadedProducts) {
        callback(downloadedProducts);
      }
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
    .catch(error => {
      console.error(error);
    });
};

export const addCategoryToDatabase = newCategory => {
  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('categories')
    .doc('category')
    .update({
      categories: arrayUnion(newCategory),
    })
    .catch(error => {
      console.error(error);
    });
};

export const uploadSampleProductsAndCategories = () => {
  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('categories')
    .doc('category')
    .update({
      categories: arrayUnion(...sampleCategories),
    })
    .catch(error => {
      console.error(error);
    });

  const batch = db.batch();

  sampleProducts.forEach(doc => {
    batch.set(
      db
        .collection('users')
        .doc(auth.currentUser.uid)
        .collection('products')
        .doc(doc.id),
      doc,
    );
  });

  batch.commit();
};

export const addInitialProductToDatabase = userId => {
  const initialProduct = {
    id: '9bb55edg-23d2-228f-bb04-f71dr231e57c',
    name: 'Your first product',
    quantity: 2,
    unit: 'kg',
    category: 'others',
    min: 2,
    onShoppingList: false,
  };

  return db
    .collection('users')
    .doc(userId)
    .collection('products')
    .doc(initialProduct.id)
    .set(initialProduct)
    .then(data => {
      return data;
    });
};

export const addInitialCategoryToDatabase = userId => {
  const initialCategory = { categories: ['others'] };

  return db
    .collection('users')
    .doc(userId)
    .collection('categories')
    .doc('category')
    .set(initialCategory)
    .then(res => {
      return res;
    });
};

export const removeCategoryfromDatabase = categoryToRemove => {
  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('categories')
    .doc('category')
    .update({
      categories: arrayRemove(categoryToRemove),
    })
    .catch(error => {
      console.error(error);
    });
};
