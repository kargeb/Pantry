import React from 'react';
import './styles.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import data from './data/db.json';
import ProductList from './components/productList/ProductList';
import NewProductForm from './components/newProductForm/NewProductForm';
import AppContext from './context';

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PantryView = () => (
  <AppContext.Consumer>
    {context => (
      <div className="App">
        <h4>Settings {context.czosz}</h4>
        <StyledMenu>
          <h3>Pantry</h3>
          <Link to="/shoppinglist">
            <h3>Shopping List {context.shoppingList.length}</h3>{' '}
          </Link>
        </StyledMenu>
        <button type="button" onClick={context.handleFormVisibility}>
          Dodaj
        </button>
        {context.isFormVisible && (
          <NewProductForm
            defaultProduct={context.defaultProduct}
            handleFormVisibility={context.handleFormVisibility}
            addNewProduct={context.addNewProduct}
            categories={context.categories}
          />
        )}
        <ul>
          {context.categories.map(category => {
            const productsOfCategory = context.products.filter(
              product => product.category === category,
            );
            if (productsOfCategory.length) {
              console.log(`w categorii: ${category} mamy nastepujace produkty`);
              console.log(productsOfCategory);
              return (
                <li>
                  <p>{category}</p>
                  <ProductList
                    products={productsOfCategory}
                    addProductQuantity={context.addProductQuantity}
                    subtractProductQuantity={context.subtractProductQuantity}
                    deleteProduct={context.deleteProduct}
                    editProduct={context.editProduct}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    )}
  </AppContext.Consumer>
);

export default PantryView;
