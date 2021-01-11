import React from 'react';
import H1 from '../../../../atoms/texts/H1';
import Input from '../../../../atoms/formElements/Input';
import Button from '../../../../atoms/buttons/Button';

const AddCategory = ({ handleAddCategory, errorMessage, newCategory, handleForm }) => (
  <>
    <H1 marginBottom as="h2">
      Add category:
    </H1>
    <Input
      id="newCategory"
      type="text"
      onChange={handleForm}
      value={newCategory}
      placeholder="Name"
    />
    {errorMessage && <p>{errorMessage}</p>}
    <Button type="button" onClick={handleAddCategory}>
      Add
    </Button>
  </>
);

export default AddCategory;
