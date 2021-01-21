import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Select from '../../../../../atoms/formElements/Select';

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

const SelectCategory = ({
  categoryToDelete,
  handleForm,
  namesOfAllCategories,
  categoriesWithProducts,
}) => {
  return (
    <Wrapper>
      <CustomSelect
        id="categoryToDelete"
        onChange={handleForm}
        value={categoryToDelete}
        size="5"
      >
        <option aria-label="disable option" value="" disabled hidden />
        {namesOfAllCategories &&
          namesOfAllCategories.sort().map(category => (
            <Option
              disabled={categoriesWithProducts.includes(category)}
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

SelectCategory.propTypes = {
  categoriesWithProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectCategory;
