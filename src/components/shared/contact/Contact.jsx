import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import StyledModalBackground from '../../styled/modal/elements/StyledModalBackground';
import StyledModalBody from '../../styled/modal/elements/StyledModalBody';
import H2 from '../../styled/typography/H2';
import StyledContactButton from './../../styled/buttons/StyledContactButton';
import ButtonIconConfirm from './../../styled/buttons/ButtonIconConfirm';
import Divider from '../../styled/divider/Divider';

const StyledP = styled.p`
  font-size: 16px;
  /* margin-top: 20px; */
  margin-top: ${props => props.marginTop || '20px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  text-align: center;

  ${({ alignLeft }) =>
    alignLeft &&
    css`
      text-align: left;
    `}
`;

const StyledLinksWrapper = styled.div`
  margin-bottom: 35px;
`;

const StyledLink = styled.a`
  display: flex;
  line-height: 26px;
  font-size: 16px;
  margin-top: ${props => props.marginTop || '20px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const StyledIcon = styled.span`
  padding-right: 16px;
  color: ${({ theme }) => theme.primary};
  font-size: 26px;
`;

class Contact extends React.Component {
  state = {
    contactModalIsVisible: false,
  };

  toggleContactModal = () => {
    this.setState(prevState => ({
      contactModalIsVisible: !prevState.contactModalIsVisible,
    }));
  };

  closeModalOnBackgroundClick = e => {
    if (e.target.dataset.background) {
      this.toggleContactModal();
    }
  };

  render() {
    const { contactModalIsVisible } = this.state;

    return (
      <>
        {contactModalIsVisible ? (
          <StyledModalBackground
            blurBackground={this.props.app}
            blur={this.props.blur}
            data-background
            onClick={this.closeModalOnBackgroundClick}
          >
            <StyledModalBody auth={this.props.auth}>
              <H2>Karol Gębarowski</H2>
              <StyledP>{process.env.REACT_APP_EMAIL}</StyledP>
              <StyledP marginBottom="10px">
                {process.env.REACT_APP_PHONE}
              </StyledP>
              <Divider />
              <StyledLinksWrapper>
                <StyledLink
                  href="https://www.linkedin.com/in/karol-gebarowski/"
                  target="_blank"
                >
                  <StyledIcon>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </StyledIcon>
                  LinkedIn
                </StyledLink>
                <StyledLink
                  href="https://github.com/kargeb/Pantry"
                  target="_blank"
                >
                  <StyledIcon>
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </StyledIcon>
                  Github
                </StyledLink>
                <StyledLink
                  href="https://drive.google.com/file/d/1BYlH7o-I_YVsBNqD-8mPs6MotAvymcp2/view?usp=sharing"
                  target="_blank"
                >
                  <StyledIcon>
                    <FontAwesomeIcon icon={faFilePdf} />
                  </StyledIcon>
                  resume
                </StyledLink>
              </StyledLinksWrapper>
              <ButtonIconConfirm
                auth={this.props.auth}
                onClick={this.toggleContactModal}
              />
            </StyledModalBody>
          </StyledModalBackground>
        ) : (
          <StyledContactButton
            auth={this.props.auth}
            onClick={this.toggleContactModal}
          >
            <FontAwesomeIcon icon={faPhoneAlt} />
          </StyledContactButton>
        )}
      </>
    );
  }
}

export default Contact;
