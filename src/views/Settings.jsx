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
  background-color: ;
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
          <button onClick={context.changeTheme} type="button">
            zmień Them
          </button>
          <button onClick={uploadSampleData} type="button">
            wczytaj przykłądowe dane
          </button>
        </StyledMain>
      )}
    </AppContext.Consumer>
  );
};

export default Settings;
