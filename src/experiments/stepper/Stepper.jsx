import React from 'react';
import Button from '../../components/atoms/buttons/Button';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

class Stepper extends React.Component {
  state = {
    currentStep: 1,
  };

  nextStep = () => {
    console.log('POWIEKSZAM');
    if (this.state.currentStep < 3) {
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
    const { currentStep } = this.state;

    return (
      <div>
        <h1>Jestem</h1>
        <h3>Mamy step: {currentStep}</h3>
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
      </div>
    );
  }
}

export default Stepper;
