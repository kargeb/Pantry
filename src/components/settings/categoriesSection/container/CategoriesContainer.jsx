import React from 'react';
import PropTypes from 'prop-types';
import db from '../../../../fbase';
import Modal from '../../../templates/Modal';
import ButtonIconCancel from '../../../atoms/buttons/ButtonIconCancel';
import Divider from '../../../atoms/divider/Divider';
import Alert from '../../../molecules/Alert';
import { AppContext } from '../../../../context';
import DeleteCategory from '../components/DeleteCategory';
import AddCategoryContainer from '../components/addCategory/AddCategoryContainer';

class CategoriesContainer extends React.Component {
  state = {
    namesOfAllCategories: this.props.allCategories,
    NamesOfCategoriesContainingProducts: [],
    categoryToDelete: '',
    alertMessage: '',
    isDeleteModalVisible: false,
  };

  componentDidMount() {
    const { namesOfAllCategories } = this.state;
  }

  SelectNamesOfCategoriesContainingProducts = products => {
    const NamesOfCategoriesContainingProducts = [];
    console.log('JESTEM W funkcji, products:', products);
    products.forEach(product => {
      if (!NamesOfCategoriesContainingProducts.includes(product.category)) {
        console.log('JESTEM W PETLI');
        NamesOfCategoriesContainingProducts.push(product.category);
      }
    });

    console.log('koniec petli: categories:', NamesOfCategoriesContainingProducts);

    return NamesOfCategoriesContainingProducts;
  };

  handleForm = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleDeleteCategory = () => {
    const { categoryToDelete, namesOfAllCategories } = this.state;

    if (categoryToDelete) {
      const categoriesWithoutDeletedOne = namesOfAllCategories.filter(
        category => category !== categoryToDelete,
      );
      const newCategories = {
        namesOfAllCategories: [...categoriesWithoutDeletedOne],
      };

      db.collection('categories').doc('all').set(newCategories);

      this.setState({ categoryToDelete: '', alertMessage: '' });
    } else {
      this.setState({ alertMessage: 'Choose a category!' });
    }
  };

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      isDeleteModalVisible: !prevState.isDeleteModalVisible,
    }));
  };

  setAlertMessage = message => {
    this.setState({ alertMessage: message });
  };

  render() {
    const { toggleCategoriesContainer } = this.props;
    const {
      NamesOfCategoriesContainingProducts,
      namesOfAllCategories,
      alertMessage,
      categoryToDelete,
      isDeleteModalVisible,
    } = this.state;
    return (
      <AppContext.Consumer>
        {({ products, allCategories }) => (
          <Modal>
            <AddCategoryContainer allCategories={allCategories} />
            <br />
            <Divider horizontal />
            <DeleteCategory
              NamesOfCategoriesContainingProducts={NamesOfCategoriesContainingProducts}
              categoryToDelete={categoryToDelete}
              isDeleteModalVisible={isDeleteModalVisible}
              handleDeleteCategory={this.handleDeleteCategory}
              setAlertMessage={this.setAlertMessage}
              toggleDeleteModal={this.toggleDeleteModal}
              namesOfAllCategories={namesOfAllCategories}
              handleForm={this.handleForm}
            />
            <br />
            <ButtonIconCancel onClick={toggleCategoriesContainer} />
            {alertMessage && <Alert>{alertMessage}</Alert>}
          </Modal>
        )}
      </AppContext.Consumer>
    );
  }
}

CategoriesContainer.propTypes = {
  toggleCategoriesContainer: PropTypes.func.isRequired,
};

export default CategoriesContainer;
