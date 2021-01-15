export const SelectNamesOfCategoriesContainingProducts = products => {
  const NamesOfCategoriesContainingProducts = [];

  console.log('JESTEM W funkcji, products:', products);
  products.forEach(product => {
    if (!NamesOfCategoriesContainingProducts.includes(product.category)) {
      console.log('JESTEM W PETLI');
      NamesOfCategoriesContainingProducts.push(product.category);
    }
  });

  console.log('koniec petli: categories:', NamesOfCategoriesContainingProducts);

  return NamesOfCategoriesContainingProducts;
};

export const checkForEmptyValues = objectToCheck => {
  const emptyProperties = [];

  Object.entries(objectToCheck).forEach(property => {
    let [key, value] = property;
    value = String(value).trim();

    if (value.length === 0) {
      emptyProperties.push(key);
    }
  });

  return emptyProperties;
};

export const checkForNonPositiveIntegers = objectToCheck => {
  const nonPositiveIntegers = [];

  Object.entries(objectToCheck).forEach(property => {
    let [key, value] = property;
    value = Number(value);

    if (!Number.isInteger(value) || value < 0) {
      nonPositiveIntegers.push(key);
    }
  });

  return nonPositiveIntegers;
};

export const setErrorMessages = (message, ...properties) => {
  const errorMessages = {};
  properties.forEach(property => {
    errorMessages[property] = message;
  });

  return errorMessages;
};

export const isEmailValid = email => {
  const pattern = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i,
  );

  if (pattern.test(email)) {
    console.log('Email:', email, ' is valid');
    return true;
  }
  console.log('Email:', email, ' JEST INVALID');
  return false;
};

export const isPasswordStrong = password => {
  if (password.length >= 7) {
    console.log('password is OK');
    return true;
  }

  console.log('Password is too weak');
  return false;
};
