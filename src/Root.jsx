import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/GlobalStyle';
import { defaultTheme, darkTheme } from './themes/themes';
import db from './fbase';
import AppContext from './context';
import Pantry from './views/Pantry';
import ShoppingList from './views/ShoppingList';
import Settings from './views/Settings';
import Nav from './components/Nav/Nav';

class Root extends React.Component {
  state = {
    products: [],
    currentTheme: defaultTheme,
  };

  componentDidMount() {
    this.unsubscribe = db.collection('products').onSnapshot(querySnapshot => {
      const downloadedProducts = [];

      querySnapshot.forEach(doc => {
        const newProduct = { ...doc.data() };
        downloadedProducts.push(newProduct);
      });

      this.setState({
        products: [...downloadedProducts],
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  changeTheme = () => {
    const { currentTheme } = this.state;
    this.setState({
      currentTheme: currentTheme === defaultTheme ? darkTheme : defaultTheme,
    });
  };

  render() {
    const { currentTheme } = this.state;
    const contextElements = {
      ...this.state,
      changeTheme: this.changeTheme,
    };

    return (
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={currentTheme}>
          <AppContext.Provider value={contextElements}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Pantry} />
              <Route path="/pantry" component={Pantry} />
              <Route path="/shoppinglist" component={ShoppingList} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </AppContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default Root;
