import React from 'react';
import styled from 'styled-components';
import H1 from '../../../../../styled/typography/H1';
import StyledProductLabel from '../../../../../styled/formElements/labels/StyledProductLabel';
import Button from '../../../../../styled/buttons/Button';
import SelectCategory from './selectCategory/SelectCategory';
import ModalConfirmDeletion from './ModalConfirmDeletion';
import { removeCategoryFromDatabase } from '../../../../../../database/controller';
import P from '../../../../../styled/typography/StyledP';

const StyledLabel = styled(StyledProductLabel)`
  width: 155px;
  text-align: center;
`;

const StyledP = styled(P)`
  margin-top: -15px;
  padding: 5px 0 10px 0;
  color: ${props => props.theme.primary};
`;

class DeleteCategoryContainer extends React.Component {
  state = {
    namesOfAllCategories: this.props.allCategories,
    categoriesWithProducts: [],
    categoryToDelete: '',
    isConfirmationModalVisible: false,
    errorMessage: '',
  };

  componentDidMount() {
    const { products } = this.props;
    const categoriesWithProducts = this.pickCategoriesWithProducts(products);

    this.setState({ categoriesWithProducts });
  }

  toggleConfirmationModal = () => {
    this.setState(prevState => ({
      isConfirmationModalVisible: !prevState.isConfirmationModalVisible,
    }));
  };

  pickCategoriesWithProducts = products => {
    const categoriesWithProducts = [];

    products.forEach(product => {
      if (!categoriesWithProducts.includes(product.category)) {
        categoriesWithProducts.push(product.category);
      }
    });

    return categoriesWithProducts;
  };

  handleForm = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = () => {
    if (this.noCategorySelected()) {
      return;
    }

    if (this.categoryContainsProducts()) {
      return;
    }
    if (this.onlyOneCategoryLeft()) {
      return;
    }

    this.toggleConfirmationModal();
  };

  noCategorySelected = () => {
    const { categoryToDelete } = this.state;

    let categoryIsNotSelected = false;

    if (categoryToDelete) {
      categoryIsNotSelected = false;
    } else {
      this.setState({ errorMessage: 'Select category!' });
      categoryIsNotSelected = true;
    }

    return categoryIsNotSelected;
  };

  onlyOneCategoryLeft = () => {
    if (this.props.allCategories.length === 1) {
      this.setState({ errorMessage: 'There must be at least one category' });
      return true;
    }
    return false;
  };

  categoryContainsProducts = () => {
    const { categoryToDelete, categoriesWithProducts } = this.state;

    let categoryHasProducts = false;

    if (categoriesWithProducts.includes(categoryToDelete)) {
      categoryHasProducts = true;
      this.setState({ errorMessage: "You can't remove this category" });
    } else {
      categoryHasProducts = false;
    }

    return categoryHasProducts;
  };

  deleteCategory = () => {
    const { categoryToDelete } = this.state;

    removeCategoryFromDatabase(categoryToDelete);

    this.setState({
      categoryToDelete: '',
      errorMessage: '',
    });
  };

  render() {
    const {
      isConfirmationModalVisible,
      categoryToDelete,
      categoriesWithProducts,
      errorMessage,
    } = this.state;

    return (
      <>
        <H1 marginBottom as="h2">
          Remove category:
        </H1>
        <StyledLabel>
          Only categories without products can be removed
        </StyledLabel>
        <SelectCategory
          categoryToDelete={categoryToDelete}
          handleForm={this.handleForm}
          namesOfAllCategories={this.props.allCategories}
          categoriesWithProducts={categoriesWithProducts}
        />
        {errorMessage && <StyledP>{errorMessage}</StyledP>}
        <Button type="button" onClick={() => this.handleSubmit()}>
          Remove
        </Button>
        {isConfirmationModalVisible && (
          <ModalConfirmDeletion
            heading="Confirm remove"
            name={categoryToDelete}
            toggleConfirmationModal={this.toggleConfirmationModal}
            deleteCategory={this.deleteCategory}
          />
        )}
      </>
    );
  }
}
export default DeleteCategoryContainer;
