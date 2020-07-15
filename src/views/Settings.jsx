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

  @media (min-width: 1024px) {
    height: 250px;
    padding-top: 30px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  }
`;

const SectionDarkMode = styled.section`
  @media (min-width: 1024px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
`;

const SectionCategories = styled.section`
  @media (min-width: 1024px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
`;

const WrapperDarkModeToggle = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 120px;
  @media (min-width: 1024px) {
    height: 90px;
  }
`;

const HeaderSection = styled.div`
  @media (min-width: 1024px) {
    height: 100px;
    display: flex;
    align-items: center;
  }
`;

const WrapperCategoriesButtons = styled.div`
  height: 90px;
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
    const { isAddCategoryModalVisible, isDeleteCategoryModalVisible } = this.state;
    return (
      <AppContext.Consumer>
        {context => (
          <Main>
            <Wrapper>
              <SectionDarkMode>
                <HeaderSection>
                  <H2>Dark Mode</H2>
                </HeaderSection>
                <WrapperDarkModeToggle>
                  <Label>Off</Label>
                  <ButtonIconSwitch
                    onClick={context.changeTheme}
                    themeName={context.currentTheme.name}
                  />
                  <Label>On</Label>
                </WrapperDarkModeToggle>
              </SectionDarkMode>
              <Divider />

              <InsertSampleData />

              <Divider />
              <SectionCategories>
                <HeaderSection>
                  <H2>Kategorie</H2>
                </HeaderSection>
                <WrapperCategoriesButtons>
                  <ButtonWidthGap type="button" onClick={this.toggleDeleteCategoryModal}>
                    Usuń
                  </ButtonWidthGap>
                  <ButtonWidthGap type="button" onClick={this.toggleAddCategoryModal}>
                    Dodaj
                  </ButtonWidthGap>
                </WrapperCategoriesButtons>
              </SectionCategories>
            </Wrapper>
            {isDeleteCategoryModalVisible && (
              <DeleteCategoryModal toggleDeleteCategoryModal={this.toggleDeleteCategoryModal} />
            )}
            {isAddCategoryModalVisible && (
              <AddCategoryModal toggleAddCategoryModal={this.toggleAddCategoryModal} />
            )}
          </Main>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Settings;
