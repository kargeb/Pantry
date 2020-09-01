import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import db from '../../../../fbase';
import Label from '../../../atoms/formElements/Label';
import Select from '../../../atoms/formElements/Select';

const InputVerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

class SelectCategory extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    db.collection('categories')
      .doc('all')
      .get()
      .then(doc => this.setState({ categories: [...doc.data().categories] }));
  }

  render() {
    const { categories } = this.state;
    const { handleForm, category } = this.props;

    return (
      <InputVerticalWrapper>
        <Label htmlFor="category">Category</Label>
        <Select id="category" onChange={handleForm} value={category}>
          <option aria-label="disable option" value="" disabled hidden />
          {categories.map(categoryItem => (
            <option key={categoryItem} value={categoryItem}>
              {categoryItem}
            </option>
          ))}
        </Select>
      </InputVerticalWrapper>
    );
  }
}

SelectCategory.propTypes = {
  handleForm: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default SelectCategory;
