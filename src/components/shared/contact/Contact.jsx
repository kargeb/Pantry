import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import StyledModalBackground from '../../styled/modal/elements/StyledModalBackground';
import StyledModalBody from '../../styled/modal/elements/StyledModalBody';
import H2 from '../../styled/typography/H2';
import StyledContactButton from './../../styled/buttons/StyledContactButton';
import ButtonIconConfirm from './../../styled/buttons/ButtonIconConfirm';
import Divider from '../../styled/divider/Divider';
import StyledAuthLink from '../../styled/typography/StyledAuthLink';

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

// const Styled

const StyledLinksWrapper = styled.div`
  /* background-color: plum; */
  /* text-align: left; */
`;

const StyledLink = styled.a`
  display: flex;
  line-height: 26px;
  font-size: 16px;
  margin-top: ${props => props.marginTop || '20px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
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

  render() {
    const { contactModalIsVisible } = this.state;

    return (
      <>
        {contactModalIsVisible ? (
          <StyledModalBackground blurBackground={this.props.app}>
            <StyledModalBody>
              <H2>Karol Gębarowski</H2>
              <StyledP>karol.gebarowski@gmail.com</StyledP>
              <StyledP marginBottom="10px">+48 889 229 439</StyledP>
              <Divider />
              <StyledLinksWrapper>
                <StyledLink>
                  <StyledIcon>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </StyledIcon>
                  LinkedIn
                </StyledLink>
                <StyledLink>
                  <StyledIcon>
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </StyledIcon>
                  Github
                </StyledLink>
                <StyledLink>
                  <StyledIcon>
                    <FontAwesomeIcon icon={faFilePdf} />
                  </StyledIcon>
                  Resume
                </StyledLink>
              </StyledLinksWrapper>
              <ButtonIconConfirm onClick={this.toggleContactModal} />
            </StyledModalBody>
          </StyledModalBackground>
        ) : (
          <StyledContactButton onClick={this.toggleContactModal}>
            Contact me
          </StyledContactButton>
        )}
      </>
    );
  }
}

export default Contact;
