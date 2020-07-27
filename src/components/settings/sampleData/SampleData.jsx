import React from 'react';
import styled from 'styled-components';
import H2 from '../../atoms/texts/H2';
import Button from '../../atoms/buttons/Button';
import InsertSampleDataModal from './InsertSampleDataModal';

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
`;

const HeaderSection = styled.div`
  @media (min-width: 1024px) {
    height: 100px;
    display: flex;
    align-items: center;
  }
`;
const WrapperButton = styled.div`
  @media (min-width: 1024px) {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonWidthGap = styled(Button)`
  margin: 8px 0;
`;

class SampleData extends React.Component {
  state = {
    isInsertModalVisible: false,
  };

  toggleInsertModal = () => {
    this.setState(prevState => ({
      isInsertModalVisible: !prevState.isInsertModalVisible,
    }));
  };

  render() {
    const { isInsertModalVisible } = this.state;

    return (
      <WrapperVertical>
        <HeaderSection>
          <H2>Przykładowe dane</H2>
        </HeaderSection>
        <WrapperButton>
          <ButtonWidthGap type="button" onClick={this.toggleInsertModal}>
            Pobierz
          </ButtonWidthGap>
        </WrapperButton>
        {isInsertModalVisible && (
          <InsertSampleDataModal toggleInsertModal={this.toggleInsertModal} />
        )}
      </WrapperVertical>
    );
  }
}

export default SampleData;
