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
import { databaseListener, getAllCategories } from '../../data/handlers';

class App extends React.Component {
  state = {
    products: [],
    allCategories: [],
    currentTheme: lightTheme,
  };

  componentDidMount() {
    getAllCategories().then(allCategories => {
      this.setState({ allCategories });
    });

    const getProductsFromDatabase = downloadedProducts => {
      this.setState({
        products: [...downloadedProducts],
        isLoading: false,
      });
    };

    this.unsubscribe = databaseListener(getProductsFromDatabase);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCategories = () => {
    return db
      .collection('users')
      .doc(auth.currentUser.uid)
      .collection('categories')
      .doc('category')
      .get()
      .then(doc => doc.data().categories);
  };

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

    // return <App mergedTheme={mergedTheme} contextElements={contextElements} />;
    return (
      <BrowserRouter>
        {console.log('CURRENT USER Z AUTH:', auth.currentUser.uid)}
        <ThemeProvider theme={mergedTheme}>
          <GlobalStyle />
          <AppContext.Provider value={contextElements}>
            <Navigation />
            <button type="button" onClick={this.getCategories}>
              get categories
            </button>
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
