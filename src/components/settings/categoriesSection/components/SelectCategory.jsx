import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CategoriesContext } from '../../../../context';

import Select from '../../../atoms/formElements/Select';
import withProductsAndCategories from '../../../../hoc/withProductsAndCategories';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 15px;
  height: 100px;
  padding: 2px;
  margin-top: 5px;
`;

const CustomSelect = styled(Select)`
  font-size: 15px;
  height: 100px;
  padding: 2px;
`;

const Option = styled.option`
  background-color: ${({ theme }) => theme.textSecondary};
  color: ${({ theme }) => theme.textPrimary};

  &:hover {
    font-weight: 600;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.grey20};
    color: ${({ theme }) => theme.textPrimary};
    cursor: not-allowed;

    &:hover {
      font-weight: 500;
    }
  }
`;

// pantryCategories is from HOC, these are categories that currently contain products
const SelectCategory = ({ pantryCategories }) => {
  return (
    <CategoriesContext.Consumer>
      {context => (
        <Wrapper>
          <CustomSelect
            id="categoryToDelete"
            onChange={context.handleForm}
            value={context.categoryToDelete}
            size="5"
          >
            <option aria-label="disable option" value="" disabled hidden />
            {context.categories &&
              context.categories.sort().map(category => (
                <Option
                  disabled={pantryCategories.includes(category)}
                  key={category}
                  value={category}
                >
                  {category}
                </Option>
              ))}
          </CustomSelect>
        </Wrapper>
      )}
    </CategoriesContext.Consumer>
  );
};

SelectCategory.propTypes = {
  pantryCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withProductsAndCategories(SelectCategory);
