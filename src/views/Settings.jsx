import React from 'react';
import styled from 'styled-components';
import sampleData from '../data/db.json';
import AppContext from '../context';
import db from '../fbase';
import AddCategoryModal from '../components/settings/categories/AddCategoryModal';
import H2 from '../components/atoms/texts/TextOption';
import Label from '../components/atoms/formElements/Label';
import ButtonIconSwitch from '../components/atoms/buttons/ButtonIconSwitch';
import Button from '../components/atoms/buttons/Button';
import Divider from '../components/atoms/divider/Divider';
import InsertSampleData from '../components/settings/sampleData/SampleData';
import DeleteCategoryModal from '../components/settings/categories/DeleteCategoryModal';

const Main = styled.main`
  color: ${props => props.theme.textPrimary};
  background-color: ${props => props.theme.background};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 15px;
`;

const WrapperDarkModeToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`;

const WrapperCategoriesButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWidthGap = styled(Button)`
  margin: 8px 0;
`;

class Settings extends React.Component {
  state = {
    isAddCategoryModalVisible: false,
    isDeleteCategoryModalVisible: false,
  };

  toggleAddCategoryModal = () => {
    this.setState(prevState => ({
      isAddCategoryModalVisible: !prevState.isAddCategoryModalVisible,
    }));
  };

  toggleDeleteCategoryModal = () => {
    this.setState(prevState => ({
      isDeleteCategoryModalVisible: !prevState.isDeleteCategoryModalVisible,
    }));
  };

  uploadSampleData = () => {
    const dbRef = db.collection('products');

    sampleData.products.forEach(sampleProduct => {
      dbRef
        .doc(sampleProduct.id)
        .set({ ...sampleProduct })
        .then(() => console.log('SUCCESSS'))
        .catch(() => console.log('ERROR!!!'));
    });
  };

  render() {
    const {
      isAddCategoryModalVisible,
      isDeleteCategoryModalVisible,
    } = this.state;
    return (
      <AppContext.Consumer>
        {context => (
          <Main>
            <Wrapper>
              <div>
                <H2>Dark Mode</H2>
                <WrapperDarkModeToggle>
                  <Label>Off</Label>
                  <ButtonIconSwitch
                    onClick={context.changeTheme}
                    themeName={context.currentTheme.name}
                  />
                  <Label>On</Label>
                </WrapperDarkModeToggle>
              </div>
              <Divider />
              <InsertSampleData />
              <Divider />
              <div>
                <H2>Kategorie</H2>
                <WrapperCategoriesButtons>
                  <ButtonWidthGap
                    type="button"
                    onClick={this.toggleDeleteCategoryModal}
                  >
                    Usuń
                  </ButtonWidthGap>
                  <ButtonWidthGap
                    type="button"
                    onClick={this.toggleAddCategoryModal}
                  >
                    Dodaj
                  </ButtonWidthGap>
                </WrapperCategoriesButtons>
              </div>
            </Wrapper>
            {isDeleteCategoryModalVisible && (
              <DeleteCategoryModal
                toggleDeleteCategoryModal={this.toggleDeleteCategoryModal}
              />
            )}
            {isAddCategoryModalVisible && (
              <AddCategoryModal
                toggleAddCategoryModal={this.toggleAddCategoryModal}
              />
            )}
          </Main>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Settings;
