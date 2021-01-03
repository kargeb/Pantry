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

class Authorized extends React.Component {
  state = {
    isLoading: true,
    currentUserId: this.props.currentUserId,
    products: [],
    currentTheme: lightTheme,
    user: { email: null, uid: null },
    isLogged: false,
  };

  componentDidMount() {
    this.unsubscribe = db
      .collection('users')
      .doc('u1sYNdEoRknGeHEIzGgY')
      .collection('products')
      .onSnapshot(querySnapshot => {
        const downloadedProducts = [];

        console.log('CURRENT USER:', auth.currentUser);

        // console.log(querySnapshot);

        querySnapshot.forEach(doc => {
          console.log('Z QUERY SNAPSHOT: ', doc.data());
          // doc.data();
          const newProduct = { ...doc.data() };
          downloadedProducts.push(newProduct);
        });

        // if (downloadedProducts.length === 0) {
        //   const newCategories = {
        //     categories: [...sampleData.categories],
        //   };
        //   db.collection('categories').doc('all').set(newCategories);
        // }

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

  logIn = isLogged => {
    console.log('JESTEM W LOGGED, ze stanem:', isLogged);
    this.setState({ isLogged: !!isLogged });
  };

  handleLogout = e => {
    console.log('JESTEM W HANDLE LOGOUT!!');
    auth
      .signOut()
      .then(() => {
        console.log('WYLOGOWANO');
        this.setState({ isLogged: false });
      })
      .catch(error => {
        console.log('Jakis blad');
      });
  };

  render() {
    const { currentTheme } = this.state;
    const contextElements = {
      ...this.state,
      changeTheme: this.changeTheme,
      handleLogout: this.handleLogout,
    };

    const mergedTheme = { ...defaultTheme, ...currentTheme };

    // return <Authorized mergedTheme={mergedTheme} contextElements={contextElements} />;
    return (
      <BrowserRouter>
        <ThemeProvider theme={mergedTheme}>
          <GlobalStyle />
          <AppContext.Provider value={contextElements}>
            <Navigation />
            <h2>{this.state.currentUserId}</h2>
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

export default Authorized;
