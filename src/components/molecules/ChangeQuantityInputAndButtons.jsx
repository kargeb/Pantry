import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonQuantity from '../atoms/buttons/ButtonQuantity';
import Input from '../atoms/formElements/Input';

const InputNumber = styled(Input)`
  border: none;
  color: ${props => props.theme.textPrimary};
  text-align: center;
  width: 80px;
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

const ChangeQuantityInputAndButtons = ({
  quantity,
  handleInput,
  addQuantity,
  subtractQuantity,
}) => {
  return (
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
  );
};

ChangeQuantityInputAndButtons.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleInput: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subtractQuantity: PropTypes.func.isRequired,
};

export default ChangeQuantityInputAndButtons;
