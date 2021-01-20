import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import H2 from '../../atoms/texts/H2';
import Button from '../../atoms/buttons/Button';
import { auth } from '../../../fbase';

// import InsertSampleDataModal from './ModalInsertSampleData';
import ConfirmLogoutModal from './ConfirmLogoutModal';

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* overflow: hidden; */
  @media (min-width: 1024px) {
    height: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    margin: 0 20px;
  }
`;

const StyledH2 = styled(H2)`
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* overflow: hidden; */
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
  align-self: flex-end;
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
    isConfirmLogoutModalVisible: false,
  };

  toggleConfirmLogoutModal = () => {
    this.setState(prevState => ({
      isConfirmLogoutModalVisible: !prevState.isConfirmLogoutModalVisible,
    }));
  };

  render() {
    const { isConfirmLogoutModalVisible } = this.state;

    return (
      <Section>
        <StyledH2>User name:</StyledH2>
        <UserContainer>
          <UserIcon>
            <FontAwesomeIcon icon={faUserCircle} />
          </UserIcon>
          <Header>
            <StyledH2 lowercase italic>
              {auth.currentUser && auth.currentUser.email}
            </StyledH2>
          </Header>
        </UserContainer>
        <WrapperButton>
          <Button type="button" onClick={this.toggleConfirmLogoutModal}>
            Logout
          </Button>
        </WrapperButton>
        {isConfirmLogoutModalVisible && (
          <ConfirmLogoutModal
            toggleConfirmLogoutModal={this.toggleConfirmLogoutModal}
          />
        )}
      </Section>
    );
  }
}

export default LogoutSection;
