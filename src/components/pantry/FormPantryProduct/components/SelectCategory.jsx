import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../../../atoms/formElements/Label';
import Select from '../../../atoms/formElements/Select';
import { AppContext } from '../../../../context';

const InputVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SelectCategory = ({ handleForm, errorMessage, category }) => (
  <AppContext.Consumer>
    {({ allCategories }) => (
      <>
        <InputVerticalWrapper>
          <Label htmlFor="category">Category</Label>
          <Select id="category" onChange={handleForm} value={category}>
            <option aria-label="disable option" value="" disabled hidden />
            {allCategories.map(categoryItem => (
              <option key={categoryItem} value={categoryItem}>
                {categoryItem}
              </option>
            ))}
          </Select>
        </InputVerticalWrapper>
        {errorMessage.length !== 0 && <p>{errorMessage}</p>}
      </>
    )}
  </AppContext.Consumer>
);

SelectCategory.propTypes = {
  handleForm: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default SelectCategory;
