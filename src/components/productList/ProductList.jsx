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

const Categories = styled.ul``;

const Products = styled.ul``;

class ProductList extends React.Component {
  state = {
    products: [],
    categories: [],
  };

  componentDidMount() {
    console.log(' Zamontyowanie ProductList DID MONUT');

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
    console.log('ProductList WILL UNMONUT odmontowanie');
    this.unsubscribe();
  }

  render() {
    const { products, categories } = this.state;
    return (
      <>
        {!products.length && <img src={loadingGif} alt="Loading gif" />}

        <Categories>
          {categories.map(currentCategory => {
            const productsInCurrentCategory = products.filter(
              currentProduct => currentProduct.category === currentCategory,
            );

            return (
              <li key={currentCategory}>
                <StyledCategoryLabel>{currentCategory}</StyledCategoryLabel>

                <Products>
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
                </Products>
              </li>
            );
          })}
        </Categories>
      </>
    );
  }
}

export default ProductList;
