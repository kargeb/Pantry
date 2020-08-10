import React from 'react';
import styled from 'styled-components';
import Input from '../../../atoms/formElements/Input';
import ButtonQuantity from '../../../atoms/buttons/ButtonQuantity';
import H2 from '../../../atoms/texts/H2';

const InputNumber = styled(Input)`
  border: none;
  color: ${props => props.theme.textPrimary};
  text-align: center;
  width: 44px;
  height: 44px;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 34px;
  line-height: 44px;
`;

const WrapperChangeQuantity = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
`;

const ChangeQuantitySection = ({ subtractQuantity, addQuantity, quantity, handleInput }) => {
  return (
    <>
      <H2 italic marginBottom>
        Zmień ilość
      </H2>

      <WrapperChangeQuantity>
        <ButtonQuantity onClick={subtractQuantity}>-</ButtonQuantity>

        <InputNumber
          short
          className="withoutSpinButtons"
          type="number"
          id="currentQuantity"
          value={quantity}
          onChange={handleInput}
        />
        <ButtonQuantity onClick={addQuantity}>+</ButtonQuantity>
      </WrapperChangeQuantity>
    </>
  );
};

export default ChangeQuantitySection;
