import React from 'react';
// import './styles.css';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
// import data from './data/db.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import ProductList from '../productList/ProductList';
import NewProductForm from '../newProductForm/NewProductForm';
import AppContext from '../../context';

const StyledHeader = styled.header`
  display: flex;
  height: 50px;
  background-color: #202020;
  color: white;
  /* font-size: 20px; */
`;

const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #6202ee;

  height: 70px;
  color: white;
`;

const StyledSettingsIconWrapper = styled.div`
  height: 100%;
  padding: 5px;
  font-size: 30px;
  line-height: 40px;
  /* background-color: green; */
`;

const StyledMenuItem = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 50%;
  font-size: 20px;
  line-height: 30px;
  padding: 20px 0;
  text-align: center;
  background-color: #6202ee;

  ${({ active }) =>
    active &&
    css`
      color: #333;
      background-color: #fff;
      font-weight: 900 ${'' /* text-transform: uppercase; */};
      letter-spacing: 0.15px;
    `};
`;

const StyledListWrapper = styled.ul`
  /* background-color: #fff; */
`;

const StyledCategoryLabel = styled.div`
  padding: 5px 0 5px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;

const StyledAddButtonWrapper = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 15px 0;
`;

const StyledAddProductButton = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  background: #6202ee;
  border-radius: 200px;
  color: #fff;
  text-transform: uppercase;
`;

const StyledShoppingListCounter = styled.div`
  background-color: #fff;
  color: #6202ee;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-left: 2px;
  font-weight: 900;
`;

const StyledMain = styled.main`
  height: calc(100vh - 120px);
  /* height: 1000px; */
  /* background-color: white; */
`;

const StyledContainer = styled.div`
  position: relative;
`;

const PantryView = () => (
  <AppContext.Consumer>
    {context => (
      <StyledContainer>
        <StyledHeader>
          <Link to="/settings">
            <StyledSettingsIconWrapper>
              <FontAwesomeIcon icon={faCogs} />
            </StyledSettingsIconWrapper>
          </Link>
        </StyledHeader>
        <StyledMenu>
          <StyledMenuItem active>Products</StyledMenuItem>
          <StyledMenuItem>
            <div>
              <Link to="/shoppinglist">Shopping List</Link>
            </div>
            <StyledShoppingListCounter>
              {context.shoppingList.length}
            </StyledShoppingListCounter>
          </StyledMenuItem>
        </StyledMenu>
        <StyledMain>
          <StyledListWrapper>
            {context.categories.map(category => {
              const productsOfCategory = context.products.filter(
                product => product.category === category,
              );
              if (productsOfCategory.length) {
                console.log(
                  `w categorii: ${category} mamy nastepujace produkty`,
                );
                console.log(productsOfCategory);
                return (
                  <li>
                    <StyledCategoryLabel>{category}</StyledCategoryLabel>
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
          </StyledListWrapper>
          <StyledAddButtonWrapper>
            <StyledAddProductButton
              type="button"
              onClick={context.handleFormVisibility}
            >
              Dodaj
            </StyledAddProductButton>
          </StyledAddButtonWrapper>
        </StyledMain>
        {context.isFormVisible && (
          <NewProductForm
            resetDefaultProduct={context.resetDefaultProduct}
            defaultProduct={context.defaultProduct}
            handleFormVisibility={context.handleFormVisibility}
            addNewProduct={context.addNewProduct}
            categories={context.categories}
          />
        )}
      </StyledContainer>
    )}
  </AppContext.Consumer>
);

export default PantryView;
