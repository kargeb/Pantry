import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import H2 from '../../atoms/texts/H2';
import Button from '../../atoms/buttons/Button';
import { auth } from '../../../fbase';

// import InsertSampleDataModal from './ModalInsertSampleData';

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

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* width: 100%; */
  div {
    margin: 0 10px;
  }
`;

const UserIcon = styled.div`
  font-size: 35px;
  /* padding: 0 30px; */
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

class LogoutSection extends React.Component {
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
        <UserContainer>
          <UserIcon>
            <FontAwesomeIcon icon={faUserCircle} />
          </UserIcon>
          <Header>
            <H2>{auth.currentUser.email}</H2>
          </Header>
        </UserContainer>
        <WrapperButton>
          <Button type="button" onClick={this.toggleInsertModal}>
            Wyloguj
          </Button>
        </WrapperButton>
        {/* {isInsertModalVisible && (
          <InsertSampleDataModal toggleInsertModal={this.toggleInsertModal} />
        )} */}
      </Section>
    );
  }
}

export default LogoutSection;
