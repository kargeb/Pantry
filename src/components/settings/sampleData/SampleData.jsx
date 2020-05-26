import React from 'react';
import styled from 'styled-components';
import sampleData from '../../../data/db.json';
import db from '../../../fbase';
import H2 from '../../atoms/texts/TextOption';
import Button from '../../atoms/buttons/Button';
import InsertSampleDataModal from './InsertSampleDataModal';

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <H2>Przykładowe dane</H2>
        <ButtonWidthGap type="button" onClick={this.toggleInsertModal}>
          Pobierz
        </ButtonWidthGap>
        {isInsertModalVisible && (
          <InsertSampleDataModal toggleInsertModal={this.toggleInsertModal} />
        )}
      </WrapperVertical>
    );
  }
}

export default SampleData;
