import React from 'react';
import Button from '../atoms/buttons/Button';
import Modal from '../templates/Modal';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

class Stepper extends React.Component {
  state = {
    maxSteps: 3,
    currentStep: 1,
  };

  nextStep = () => {
    console.log('POWIEKSZAM');
    if (this.state.currentStep < this.state.maxSteps) {
      this.setState(prevState => ({ currentStep: prevState.currentStep + 1 }));
    }
  };

  prevStep = () => {
    console.log('POMNIEJSZAm');
    if (this.state.currentStep > 1) {
      this.setState(prevState => ({ currentStep: prevState.currentStep - 1 }));
    }
  };

  render() {
    const { currentStep, maxSteps } = this.state;

    return (
      <Modal>
        <div>
          <h1>Jestem</h1>
          <h3>
            Mamy step: {currentStep} / {maxSteps}
          </h3>
          <div>
            {currentStep === 1 && <Step1 />}
            {currentStep === 2 && <Step2 />}
            {currentStep === 3 && <Step3 />}
          </div>

          <button type="button" onClick={this.prevStep}>
            Previuos
          </button>
          <button type="button" onClick={this.nextStep}>
            next
          </button>
          <button type="button" onClick={this.props.toggleHelp}>
            close
          </button>
        </div>
      </Modal>
    );
  }
}

export default Stepper;
