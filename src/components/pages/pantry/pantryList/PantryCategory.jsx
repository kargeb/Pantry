import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PantryProduct from './PantryProduct';
import ButtonAddProduct from '../../../styledComponents/buttons/ButtonAddProduct';
import HeaderPantryCategory from './HeaderPantryCategory';
import NewProductForm from '../../../forms/newProductForm/NewProductForm';

const CategoriesItem = styled.li`
  background-color: ${props => props.theme.background};
  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    width: 400px;
    margin-bottom: 10px;
    margin: 0 5px 10px 5px;
    border: 1px solid ${({ theme }) => theme.grey20};
  }
`;

const TableHeader = styled.div`
  display: flex;
  padding: 10px;
`;

const CategoryLabel = styled.div`
  flex: 1;
  font-style: normal;
  text-align: left;
  overflow-wrap: anywhere;
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.heading2};
  color: ${({ theme }) => theme.primary};
`;

const ButtonAdd = styled(ButtonAddProduct)`
  margin: 0px 10px 0px 0px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  &:hover {
    font-size: 20px;
    transform: scale(1.2);
    cursor: pointer;
    font-weight: bold;
  }
`;

const ProductItem = styled.li`
  &:nth-child(odd) {
    /* background-color: ${({ theme }) => theme.primary20}; */
  }
`;

const sortByIsOnShoppingList = (a, b) => {
  if (a.onShoppingList < b.onShoppingList) {
    return 1;
  }
  if (a.onShoppingList > b.onShoppingList) {
    return -1;
  }
  return 0;
};

class PantryCategory extends React.Component {
  state = {
    isProductPropertiesForm: false,
  };

  handleClick = () => {
    const { isProductPropertiesForm } = this.state;
    this.setState({ isProductPropertiesForm: !isProductPropertiesForm });
  };

  render() {
    const { currentCategory, productsInCurrentCategory } = this.props;
    const { isProductPropertiesForm } = this.state;

    return (
      <CategoriesItem key={currentCategory}>
        <TableHeader>
          <CategoryLabel>{currentCategory}</CategoryLabel>
          <ButtonAdd onClick={this.handleClick}>+</ButtonAdd>
        </TableHeader>
        <ul>
          <HeaderPantryCategory />
          {productsInCurrentCategory
            .sort(sortByIsOnShoppingList)
            .map(currentProduct => (
              <ProductItem key={currentProduct.id}>
                <PantryProduct product={currentProduct} />
              </ProductItem>
            ))}
        </ul>

        {isProductPropertiesForm && (
          <NewProductForm
            category={currentCategory}
            toggleFormVisibility={this.handleClick}
          />
        )}
      </CategoriesItem>
    );
  }
}

PantryCategory.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  productsInCurrentCategory: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PantryCategory;
