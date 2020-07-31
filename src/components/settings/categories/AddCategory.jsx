import React from 'react';
import { CategoriesContext } from '../../../context';
import H1 from '../../atoms/texts/H1';
import Input from '../../atoms/formElements/Input';
import Alert from '../../molecules/Alert';
import Button from '../../atoms/buttons/Button';

const AddCategory = () => (
  <CategoriesContext.Consumer>
    {context => (
      <>
        <H1 marginBottom as="h2">
          Dodaj Kategorię
        </H1>
        <Input
          id="newCategory"
          type="text"
          onChange={context.handleForm}
          value={context.newCategory}
          placeholder="Nazwa"
        />
        <Button type="button" onClick={context.handleAddCategory}>
          Dodaj
        </Button>

        {context.alertMessage && <Alert>{context.alertMessage}</Alert>}
      </>
    )}
  </CategoriesContext.Consumer>
);

export default AddCategory;
