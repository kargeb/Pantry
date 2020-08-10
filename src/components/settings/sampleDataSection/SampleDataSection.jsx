import React from 'react';
import styled from 'styled-components';
import H2 from '../../atoms/texts/H2';
import Button from '../../atoms/buttons/Button';
import InsertSampleDataModal from './ModalInsertSampleData';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    height: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    margin: 0 20px;
  }
`;

const Header = styled.div`
  padding: 15px 0;

  @media (min-width: 1024px) {
    height: 100px;
    display: flex;
    align-items: center;
  }
`;
const WrapperButton = styled.div`
  padding: 20px 0;

  @media (min-width: 1024px) {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

class SampleDataSection extends React.Component {
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
      <Section>
        <Header>
          <H2>Przykładowe dane</H2>
        </Header>
        <WrapperButton>
          <Button type="button" onClick={this.toggleInsertModal}>
            Pobierz
          </Button>
        </WrapperButton>
        {isInsertModalVisible && (
          <InsertSampleDataModal toggleInsertModal={this.toggleInsertModal} />
        )}
      </Section>
    );
  }
}

export default SampleDataSection;
