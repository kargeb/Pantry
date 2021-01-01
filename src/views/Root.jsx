import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../themes/GlobalStyle';
import { defaultTheme, darkTheme, lightTheme } from '../themes/themes';
import sampleData from '../data/db.json';
import db, { auth } from '../fbase';
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
    user: { email: null, uid: null },
  };

  componentDidMount() {
    this.unsubscribe = db.collection('products').onSnapshot(querySnapshot => {
      const downloadedProducts = [];

      console.log('CURRENT USER:', auth.currentUser);

      auth
        .signInWithEmailAndPassword('test@test.pl', 'testtest')
        .then(user => {
          console.log('JESTEM ZALOGOWANY! ', user);
          console.log('USER EMAIL: ', user.user.email);
          this.setState({ user: { email: user.user.email, uid: user.user.uid } });
        })
        .catch(error => {
          console.log('BLAD LOGOWANIA:');
          console.log(error.code, error.message);
        });

      querySnapshot.forEach(doc => {
        const newProduct = { ...doc.data() };
        downloadedProducts.push(newProduct);
      });

      if (downloadedProducts.length === 0) {
        const newCategories = {
          categories: [...sampleData.categories],
        };
        db.collection('categories').doc('all').set(newCategories);
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
