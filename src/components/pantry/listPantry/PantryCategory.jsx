import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import PantryProduct from './PantryProduct';
import ButtonAddProduct from '../../atoms/buttons/ButtonAddProduct';
import ProductPropertiesForm from '../ProductPropertiesForm';

const CategoriesItem = styled.li`
  background-color: ${props => props.theme.background};
  @media (min-width: ${({ theme }) => theme.smallScreen}) {
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
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.heading2};
  color: ${({ theme }) => theme.primary};
`;

const ButtonAdd = styled(ButtonAddProduct)`
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
    /* background-color: ${({ theme }) => theme.primary20}; */
  }
`;

const ColumnDescriptionWrapper = styled.div`
  display: flex;
  height: 16px;
`;

const AboveCartIcon = styled.div`
  margin-left: 2px;
  width: 40px;
`;

const AboveName = styled.div`
  flex: 3;
  display: flex;
`;

const Description = styled.div`
  font-size: 13px;
  flex: 1;
  font-style: italic;
  text-align: center;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;

const AboveButtonEditProduct = styled.div`
  width: 45px;
  margin: 0 10px;
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
          <CategoryLabel>{currentCategory}</CategoryLabel>
          <ButtonAdd onClick={this.handleClick}>+</ButtonAdd>
        </TableHeader>
        <ul>
          <li>
            <ColumnDescriptionWrapper>
              <AboveCartIcon />
              <AboveName />
              <Description bold>Stan</Description>
              <Description>Min</Description>
              <AboveButtonEditProduct />
            </ColumnDescriptionWrapper>
          </li>
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
