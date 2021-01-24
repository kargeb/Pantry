import React from 'react';
import PropTypes from 'prop-types';
import StyledModalBackground from '../../styled/modal/elements/StyledModalBackground';
import StyledModalBody from '../../styled/modal/elements/StyledModalBody';
import H2 from '../../styled/typography/H2';
import StyledContactButton from './../../styled/buttons/StyledContactButton';

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
              <H2>Contact</H2>
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
