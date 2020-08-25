import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../themes/GlobalStyle';
import { defaultTheme, darkTheme, lightTheme } from '../themes/themes';
import db from '../fbase';
import { AppContext } from '../context';
import Pantry from './Pantry';
import Shopping from './Shopping';
import Settings from './Settings';
import Navigation from '../components/navigation/Navigation';

class Root extends React.Component {
  state = {
    isLoading: true,
    products: [],
    currentTheme: lightTheme,
  };

  componentDidMount() {
    this.unsubscribe = db.collection('products').onSnapshot(querySnapshot => {
      const downloadedProducts = [];

      querySnapshot.forEach(doc => {
        const newProduct = { ...doc.data() };
        downloadedProducts.push(newProduct);
      });

      if (downloadedProducts.length === 0) {
        console.log('NIE MA NIC W ARRAY Z PRODUCKTAMI');
      }

      this.setState({
        products: [...downloadedProducts],
        isLoading: false,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  changeTheme = () => {
    const { currentTheme } = this.state;
    this.setState({
      currentTheme: currentTheme === lightTheme ? darkTheme : lightTheme,
    });
  };

  render() {
    const { currentTheme } = this.state;
    const contextElements = {
      ...this.state,
      changeTheme: this.changeTheme,
    };

    const mergedTheme = { ...defaultTheme, ...currentTheme };
    return (
      <BrowserRouter>
        <ThemeProvider theme={mergedTheme}>
          <GlobalStyle />
          <AppContext.Provider value={contextElements}>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Pantry} />
              <Route path="/pantry" component={Pantry} />
              <Route path="/shopping" component={Shopping} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </AppContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default Root;
