import db, { auth, arrayUnion, arrayRemove } from '../fbase';

/* *************************************************** */
// PRODUCTS AND CATEGORIES

export const addNewProductToDatabase = product => {
  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('products')
    .doc(product.id)
    .set(product);
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

  console.log('w addinitialProducts To database MAMU USERA O ID:', userId);

  return db
    .collection('users')
    .doc(userId)
    .collection('products')
    .doc(initialProduct.id)
    .set(initialProduct)
    .then(data => {
      console.log('Zarejestrowalismy: ', data);
      return data;
    })
    .catch(err => {
      console.log('BŁONT!: ', err);
      return err;
    });
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

      callback(categoriesFromDatabase);
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

export const addCategoryToDatabase = newCategory => {
  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('categories')
    .doc('category')
    .update({
      categories: arrayUnion(newCategory),
    })
    .catch(error => {
      console.error('Sth wrong with new category ', error);
    });
};

export const uploadSampleProductsAndCategories = () => {
  const sampleCategories = [
    'sweets',
    'fruits',
    'vegetables',
    'cosmetics',
    'sweets',
    'food',
    'beverages/spirits',
  ];

  db.collection('users')
    .doc(auth.currentUser.uid)
    .collection('categories')
    .doc('category')
    .update({
      categories: arrayUnion(...sampleCategories),
    })
    .then(() => console.log('DDOANO SAMPLE CATEGORIES'))
    .catch(error => {
      console.error('Sth wrong with SAMPLE new category ', error);
    })
    .then(() => {});
};

export const addInitialCategoryToDatabase = userId => {
  const initialCategory = { categories: ['others'] };

  console.log('DDOAJEMY KATEGORIES JAKO: ', userId);
  return db
    .collection('users')
    .doc(userId)
    .collection('categories')
    .doc('category')
    .set(initialCategory)
    .then(res => {
      console.log('DODALISMY KATEGORIE :', res);
      return res;
    })
    .catch(error => {
      console.error('Sth wrong with new category ', error);
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
      console.error('Sth wrong with new category ', error);
    });
};

/* *************************************************** */
// USER AUTHENTICATION

export const logIn = (userName, userPassword) => {
  return auth
    .signInWithEmailAndPassword(userName, userPassword)
    .then(user => {
      console.log('JESTEM ZALOGOWANY! ', user);
      console.log('USER EMAIL: ', user.user.email);
      return user.user.email;
    })
    .catch(error => {
      console.log('BLAD LOGOWANIA:');
      console.log(error.code, error.message);
      return error.message;
    });
};

export const registerUserInUsersDatabase = (userName, userPassword) => {
  return auth
    .createUserWithEmailAndPassword(userName, userPassword)
    .then(cred => {
      console.log('STWORZYLEM UZYTKONIWKA', cred);
      console.log('I MA ON UID: ', cred.user.uid);
      // console.log(cred);
      return cred.user.uid;
    })
    .catch(err => {
      console.log('BŁONT!: ', err);
      return err;
    });
};

export const registerUserInProductDatabase = id => {
  return db
    .collection('users')
    .doc(id)
    .then(data => {
      console.log('Zarejestrowalismy: ', data);
      return data;
    })
    .catch(err => {
      console.log('BŁONT!: ', err);
      return err;
    });
};

export const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log('WYLOGOWANO');
    })
    .catch(error => {
      console.log('Jakis blad');
      console.log(error);
    });
};
