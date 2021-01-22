import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../../../atoms/formElements/Label';
import StyledSelect from '../../../atoms/formElements/StyledSelect';
import { AppContext } from '../../../../context';
import P from '../../../styledComponents/atoms/typography/P';

const InputVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledP = styled(P)`
  margin-top: -15px;
  padding: 0 0 5px 0;
  color: ${props => props.theme.primary};
`;

const SelectCategory = ({ handleForm, errorMessage, category }) => (
  <AppContext.Consumer>
    {({ allCategories }) => (
      <>
        <InputVerticalWrapper>
          <Label htmlFor="category">Category</Label>
          <StyledSelect id="category" onChange={handleForm} value={category}>
            <option aria-label="disable option" value="" disabled hidden />
            {allCategories.map(categoryItem => (
              <option key={categoryItem} value={categoryItem}>
                {categoryItem}
              </option>
            ))}
          </StyledSelect>
        </InputVerticalWrapper>
        {errorMessage && <StyledP>{errorMessage}</StyledP>}
      </>
    )}
  </AppContext.Consumer>
);

SelectCategory.defaultProps = {
  errorMessage: '',
};

SelectCategory.propTypes = {
  handleForm: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default SelectCategory;
