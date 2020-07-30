import React from 'react';
import styled from 'styled-components';

import Select from '../../atoms/formElements/Select';
import withProductsAndCategories from '../../../hoc/withProductsAndCategories';

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

const SelectCategory = ({ handleForm, toDelete, categories, pantryCategories }) => {
  return (
    <CustomSelect id="toDelete" onChange={handleForm} value={toDelete} size="5">
      <option aria-label="disable option" value="" disabled hidden />
      {categories.map(category => (
        <Option
          disabled={pantryCategories.includes(category)} // does the category contain products
          key={category}
          value={category}
        >
          {category}
        </Option>
      ))}
    </CustomSelect>
  );
};

export default withProductsAndCategories(SelectCategory);
