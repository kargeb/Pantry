import React from 'react';
import H1 from '../../../../atoms/texts/H1';
import Input from '../../../../atoms/formElements/Input';
import Button from '../../../../atoms/buttons/Button';
import Alert from '../../../../molecules/Alert';

const AddCategory = ({ handleAddCategory, alertMessage, newCategory, handleForm }) => (
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
    <Button type="button" onClick={handleAddCategory}>
      Add
    </Button>
    {alertMessage && <Alert>{alertMessage}</Alert>}
  </>
);

export default AddCategory;
