import React from 'react';
import styled from 'styled-components';

import Select from '../../atoms/formElements/Select';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';

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
  &:hover {
    font-weight: 600;
  }

  &:disabled {
    background-color: #f1f1f1;
    cursor: not-allowed;

    &:hover {
      font-weight: 500;
    }
  }
`;

const SelectCategory = ({ handleForm, categoryToDelete, categories, pantryCategories }) => {
  return (
    <Wrapper>
      <CustomSelect id="categoryToDelete" onChange={handleForm} value={categoryToDelete} size="5">
        <option aria-label="disable option" value="" disabled hidden />
        {categories &&
          categories.map(category => (
            <Option
              disabled={pantryCategories.includes(category)} // does the category contain products
              key={category}
              value={category}
            >
              {category}
            </Option>
          ))}
      </CustomSelect>
    </Wrapper>
  );
};

export default withProductsAndCategories(SelectCategory);
