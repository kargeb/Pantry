import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import BuyProductModal from '../buyProductModal/BuyProductModal';

const StyledWrapper = styled.div`
padding-left: 5%;
  min-height: 50px;
  line-height: 50px;
  display: flex;
  align-items: baseline;
  /* color: ${props => props.fontColor}; */
  justify-content: center;
/* word-wrap: break-word; */
`;

const StyledDotIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  line-height: 40px;
  margin: 0 10px;
  color: rgba(0, 0, 0, 0.54);
`;

const StyledCartIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  line-height: 40px;
  margin: 0 10px;
  color: #fff;
`;

const StyledButton = styled.button`
  border: none;
  width: 50px;
  height: 30px;
  background: #6202ee;
  border-radius: 200px;
  color: #fff;
  text-transform: uppercase;
`;

const StyledNameWrapper = styled.div`
  width: 50%;
`;

class ShoppingProduct extends React.Component {
  state = {
    isBuyProductModalVisible: false,
  };

  toggleBuyProductModal = () => {
    this.setState(prevState => ({
      isBuyProductModalVisible: !prevState.isBuyProductModalVisible,
    }));
  };

  render() {
    const { name, id } = this.props.product;

    return (
      <StyledWrapper>
        <div>
          <StyledDotIcon icon={faCircle} />
        </div>
        <StyledNameWrapper>{name}</StyledNameWrapper>
        <StyledButton
          //   onClick={() => context.completeProductQuantityToMin(id)}
          onClick={this.toggleBuyProductModal}
        >
          <StyledCartIcon icon={faCartArrowDown} />
        </StyledButton>
        {this.state.isBuyProductModalVisible && (
          <BuyProductModal
            id={id}
            name={name}
            toggleBuyProductModal={this.toggleBuyProductModal}
          />
        )}
      </StyledWrapper>
    );
  }
}

export default ShoppingProduct;
