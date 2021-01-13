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

export const checkForPositiveIntegers = objectToCheck => {
  const nonPositiveIntegers = [];

  Object.entries(objectToCheck).forEach(property => {
    let [key, value] = property;

    value = Number(value);

    console.log('VALUE AKTUALNA:', value);

    if (!Number.isInteger(value) || value < 0) {
      nonPositiveIntegers.push(key);
    }
  });

  return nonPositiveIntegers;
};

export const setErrorMessages = (properties, message) => {
  const errorMessages = {};

  properties.forEach(property => {
    errorMessages[property] = message;
  });

  return errorMessages;
};

export const fun = () => {};
