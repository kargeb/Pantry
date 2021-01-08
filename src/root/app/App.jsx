import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../themes/GlobalStyle';
import { defaultTheme, darkTheme, lightTheme } from '../../themes/themes';
import sampleData from '../../data/db.json';
import db, { auth } from '../../fbase';
import { AppContext } from '../../context';
import Pantry from '../../views/Pantry';
import Shopping from '../../views/Shopping';
import Settings from '../../views/Settings';
import Navigation from '../../components/navigation/Navigation';
import { databaseListener } from '../../data/handlers';

class App extends React.Component {
  state = {
    isLoading: true,
    // currentUserId: this.props.currentUserId,
    products: [],
    currentTheme: lightTheme,
    user: { email: null, uid: null },
  };

  componentDidMount() {
    const getProductsFromDatabase = downloadedProducts => {
      this.setState({
        products: [...downloadedProducts],
        isLoading: false,
      });
    };

    this.unsubscribe = databaseListener(getProductsFromDatabase);

    console.log('TO JEST UNSUBSCRIBE:', this.unsubscribe);
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

  handleLogout = e => {
    console.log('JESTEM W HANDLE LOGOUT!!');
    auth
      .signOut()
      .then(() => {
        console.log('WYLOGOWANO');
      })
      .catch(error => {
        console.log('Jakis blad');
        console.log(error);
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

    // return <App mergedTheme={mergedTheme} contextElements={contextElements} />;
    return (
      <BrowserRouter>
        {console.log('CURRENT USER Z AUTH:', auth.currentUser.uid)}
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

export default App;
