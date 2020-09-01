import React from 'react';
import { CategoriesContext } from '../../../../context';
import H1 from '../../../atoms/texts/H1';
import Input from '../../../atoms/formElements/Input';
import Button from '../../../atoms/buttons/Button';

const AddCategory = () => (
  <CategoriesContext.Consumer>
    {context => (
      <>
        <H1 marginBottom as="h2">
          Add category:
        </H1>
        <Input
          id="newCategory"
          type="text"
          onChange={context.handleForm}
          value={context.newCategory}
          placeholder="Name"
        />
        <Button type="button" onClick={context.handleAddCategory}>
          Add
        </Button>
      </>
    )}
  </CategoriesContext.Consumer>
);

export default AddCategory;
