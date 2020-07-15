import React from 'react';
import AppContext from '../context';

const withProductsAndCategories = WrappedComponent => {
  return props => (
    <AppContext.Consumer>
      {context => {
        const allProducts = context.products;
        const productsOnShoppingList = allProducts.filter(product => product.onShoppingList);

        const selectCategoriesContainProducts = products => {
          const categoriesWithProducts = [];
          products.forEach(product => {
            if (!categoriesWithProducts.includes(product.category)) {
              categoriesWithProducts.push(product.category);
            }
          });

          return categoriesWithProducts;
        };

        const pantryCategories = selectCategoriesContainProducts(allProducts);
        const shoppingCategories = selectCategoriesContainProducts(productsOnShoppingList);

        return (
          <WrappedComponent
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            products={allProducts}
            shoppingProducts={productsOnShoppingList}
            pantryCategories={pantryCategories}
            shoppingCategories={shoppingCategories}
          />
        );
      }}
    </AppContext.Consumer>
  );
};

export default withProductsAndCategories;
