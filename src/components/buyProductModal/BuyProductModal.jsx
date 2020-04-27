import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import db from '../../fbase';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
  z-index: 5;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 10%;
  background-color: white;
  z-index: 10;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
`;

const StyledConfirmIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: #01a39d;
`;

const StyledCancelIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  color: rgba(0, 0, 0, 0.54);
`;

const BuyProductModal = ({ id, name, toggleBuyProductModal }) => {
  //   const deleteProduct = () => {
  //     db.collection('products')
  //       .doc(id)
  //       .delete()
  //       .then(function () {
  //         console.log('Document successfully deleted!');
  //       })
  //       .catch(function (error) {
  //         console.error('Error removing document: ', error);
  //       });
  //   };

  return (
    <Background>
      <Wrapper>
        <p>Ile kcesz kupicz ?</p>
        <p>
          <strong>{name} </strong> ?
        </p>
        <StyledButtonsWrapper>
          <StyledButton type="submit" onClick={() => {}}>
            <StyledConfirmIcon icon={faCheckSquare} />
          </StyledButton>

          <StyledButton type="button" onClick={toggleBuyProductModal}>
            <StyledCancelIcon icon={faTimesCircle} />
          </StyledButton>
        </StyledButtonsWrapper>
      </Wrapper>
    </Background>
  );
};

export default BuyProductModal;
