import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PantryProduct from './PantryProduct';
import ButtonAddProduct from '../../atoms/buttons/ButtonAddProduct';
import ProductPropertiesForm from '../ProductPropertiesForm';

const CategoriesItem = styled.li`
  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    width: 400px;
    margin-bottom: 10px;
    margin: 0 5px 10px 5px;
    border: 1px solid ${({ theme }) => theme.grey20};
  }
`;

const TableHeader = styled.div`
  /* position: relative; */
  /* min-height: 30px; */
  display: flex;
  align-items: center;
  padding: 10px;
  /* line-height: 40px; */
`;

const CategoryLabel = styled.div`
  /* padding: 5px 0 5px 20px; */

  font-style: normal;
  overflow-wrap: anywhere;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.heading2};
  color: ${({ theme }) => theme.primary};

  @media (min-width: ${({ theme }) => theme.smallScreen}) {
    text-align: center;
  }
`;

const ButtonAdd = styled(ButtonAddProduct)`
  /* position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%); */
  margin: 0px 15px 0px 0px;
  width: 23px;
  height: 23px;
  line-height: 23px;
  font-size: 18px;
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
    background-color: ${({ theme }) => theme.primary20};
  }
`;

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
          <ButtonAdd onClick={this.handleClick}>+</ButtonAdd>
          <CategoryLabel>{currentCategory}</CategoryLabel>
        </TableHeader>
        <ul>
          {productsInCurrentCategory.map(currentProduct => (
            <ProductItem key={currentProduct.id}>
              <PantryProduct product={currentProduct} />
            </ProductItem>
          ))}
        </ul>

        {isProductPropertiesForm && (
          <ProductPropertiesForm
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
      min: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PantryCategory;
