import React from 'react';
import styled from 'styled-components';
import loadingGif from '../images/loading_dots.gif';
import sampleData from '../data/db.json';
import AppContext from '../context';
import db from '../fbase';

const StyledListWrapper = styled.ul`
  background-color: #fff;
`;

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 5%; */
  /* padding-bottom: 100px; */
  background-color: #444;
`;

const Wrapper = styled.div`
  display: flex;
  height: 50%;
  max-height: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #888;
`;

const Settings = () => {
  const uploadSampleData = () => {
    const dbRef = db.collection('products');

    sampleData.products.forEach(sampleProduct => {
      dbRef
        .doc(sampleProduct.id)
        .set({ ...sampleProduct })
        .then(() => console.log('SUCCESSS'))
        .catch(() => console.log('ERROR!!!'));
    });
  };

  return (
    <AppContext.Consumer>
      {context => (
        <StyledMain>
          <Wrapper>
            <button onClick={context.changeTheme} type="button">
              zmień Them
            </button>
            <button onClick={uploadSampleData} type="button">
              wczytaj przykłądowe dane
            </button>
            <button onClick={() => {}} type="button">
              Dodaj/usuń kategorię
            </button>
          </Wrapper>
        </StyledMain>
      )}
    </AppContext.Consumer>
  );
};

export default Settings;
