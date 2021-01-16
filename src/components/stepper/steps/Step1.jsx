import React from 'react';
import styled from 'styled-components';
// import help_1 from '../../../images/help_1_pantry_main.jpg';
// import help1 from '../../../images/help1PantryView.svg';
import help1 from '../../../images/help1.svg';

const Wrapper = styled.div`
  min-height: 50vh;
  padding: 0 40px;
`;

const Image = styled.div`
  width: 70%;
  background-color: green;
  border: 1px solid black;
`;

const Step1 = () => {
  return (
    <Wrapper>
      <h3>Jestem 1</h3>
      <Image>
        <img
          src={help1}
          width="100%"
          // width="100"
          // height="300"
          alt="tutorial screenshot of main app view"
        />
      </Image>
      <p>1111111</p>
    </Wrapper>
  );
};

export default Step1;
