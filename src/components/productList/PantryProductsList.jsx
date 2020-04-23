import React from 'react';
import styled from 'styled-components';
import Product from '../product/Product';
import db from '../../fbase';
import loadingGif from '../../images/loading_dots.gif';

const StyledCategoryLabel = styled.div`
  padding: 5px 0 5px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;

const CategoriesList = styled.ul``;

const ProductsList = styled.ul``;

class PantryProductsList extends React.Component {
  state = {
    products: [],
    categories: [],
  };

  componentDidMount() {
    console.log(' Zamontyowanie PantryProductsList DID MONUT');

    this.unsubscribe = db.collection('products').onSnapshot(querySnapshot => {
      const downloadedProducts = [];
      const categories = [];

      querySnapshot.forEach(doc => {
        const newProduct = { ...doc.data() };
        downloadedProducts.push(newProduct);

        const { category } = newProduct;
        if (!categories.includes(category)) {
          categories.push(category);
        }
      });

      this.setState({
        products: [...downloadedProducts],
        categories,
      });
    });
  }

  componentWillUnmount() {
    console.log('PantryProductsList WILL UNMONUT odmontowanie');
    this.unsubscribe();
  }

  render() {
    const { products, categories } = this.state;
    return (
      <>
        {!products.length && <img src={loadingGif} alt="Loading gif" />}

        <CategoriesList>
          {categories.map(currentCategory => {
            const productsInCurrentCategory = products.filter(
              product => product.category === currentCategory,
            );

            return (
              <li key={currentCategory}>
                <StyledCategoryLabel>{currentCategory}</StyledCategoryLabel>

                <ProductsList>
                  {productsInCurrentCategory.map(currentProduct => {
                    const { name, quantity, unit, id, min } = currentProduct;
                    return (
                      <li key={id}>
                        <Product
                          id={id}
                          name={name}
                          min={min}
                          quantity={quantity}
                          unit={unit}
                        />
                      </li>
                    );
                  })}
                </ProductsList>
              </li>
            );
          })}
        </CategoriesList>
      </>
    );
  }
}

export default PantryProductsList;
