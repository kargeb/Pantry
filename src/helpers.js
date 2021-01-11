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

export const fun = () => {};
