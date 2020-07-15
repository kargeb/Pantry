import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PantryProduct from './PantryProduct';
import loadingGif from '../../../images/loading_dots.gif';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';

const StyledCategoryLabel = styled.div`
  padding: 5px 0 5px 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.primary};

  @media (min-width: ${({ theme }) => theme.small}) {
    text-align: center;
  }
`;

const CategoriesList = styled.ul`
  @media (min-width: ${({ theme }) => theme.small}) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 3%;
  }
`;

const CategoriesItem = styled.li`
  @media (min-width: ${({ theme }) => theme.small}) {
    margin-bottom: 10px;
    margin: 0 5px 10px 5px;
    border: 1px solid ${({ theme }) => theme.grey20};
  }
`;

const ProductItem = styled.li`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.primary20};
  }
`;

const ProductsList = styled.ul``;

const ListPantryProducts = ({ products, pantryCategories }) => {
  pantryCategories.sort();

  return (
    <div>
      {products.length ? (
        <CategoriesList>
          {pantryCategories.map(currentCategory => {
            const productsInCurrentCategory = products.filter(
              product => product.category === currentCategory,
            );
            return (
              <CategoriesItem key={currentCategory}>
                <StyledCategoryLabel>{currentCategory}</StyledCategoryLabel>
                <ProductsList>
                  {productsInCurrentCategory.map(currentProduct => (
                    <ProductItem key={currentProduct.id}>
                      <PantryProduct product={currentProduct} />
                    </ProductItem>
                  ))}
                </ProductsList>
              </CategoriesItem>
            );
          })}
        </CategoriesList>
      ) : (
        <img src={loadingGif} alt="Loading gif" />
      )}
    </div>
  );
};

ListPantryProducts.defaultProps = {
  products: [],
  pantryCategories: [],
};

ListPantryProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      min: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ),
  pantryCategories: PropTypes.arrayOf(PropTypes.string),
};

export default withProductsAndCategories(ListPantryProducts);
