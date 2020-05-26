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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 15px;
  /* background-color: #888; */
`;

const WrapperDarkModeToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  /* background-color: blue; */
`;

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperCategoriesButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  /* background-color: blue; */
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
          <main>
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
              {/* <WrapperVertical>
                <H2>Przykładowe dane</H2>
                <ButtonWidthGap type="button" onClick={this.uploadSampleData}>
                  Pobierz
                </ButtonWidthGap>
              </WrapperVertical> */}
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
          </main>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Settings;
