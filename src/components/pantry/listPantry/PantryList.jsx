import React from 'react';
import styled from 'styled-components';
import loadingGif from '../../../images/loading_dots.gif';
import PantryCategory from './PantryCategory';
import { AppContext } from '../../../context';

const CategoriesList = styled.ul`
  @media (min-width: ${({ theme }) => theme.mediumScreen}) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 3%;
  }
`;

const Spinner = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  /* background-color: blue; */
`;

const Loader = styled.div`
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid #fff;
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    /* border-bottom: 1.1em solid #ffffff; */
    border-left: 1.1em solid #fff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.4s infinite linear;
    animation: load8 1.4s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const PantryList = () => {
  const getCategoriesFromProducts = products => {
    const categories = [];
    products.forEach(product => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });

    return categories;
  };

  return (
    <AppContext.Consumer>
      {({ products, downloadInProgress }) => (
        <div>
          {/* <img src={loadingGif} alt="Loading gif" /> */}
          {console.log('Z CONTEXU:', products)}
          {downloadInProgress ? (
            <Spinner>
              <Loader>
                <div className="loader" />
              </Loader>
            </Spinner>
          ) : (
            <div>
              <CategoriesList>
                {getCategoriesFromProducts(products)
                  .sort()
                  .map(currentCategory => {
                    const productsInCurrentCategory = products.filter(
                      product => product.category === currentCategory,
                    );
                    return (
                      <PantryCategory
                        key={currentCategory}
                        currentCategory={currentCategory}
                        productsInCurrentCategory={productsInCurrentCategory}
                      />
                    );
                  })}
              </CategoriesList>
            </div>
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default PantryList;
