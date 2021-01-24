import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../themes/GlobalStyle';
import { defaultTheme, darkTheme, lightTheme } from '../../themes/themes';
import {
  setProductsDatabaseListener,
  setCategoriesDatabaseListener,
} from '../../data/handlers';
import { AppContext } from '../../context';

import Pantry from '../../components/pages/pantry/Pantry';
import Shopping from '../../components/pages/shopping/Shopping';
import Settings from '../../components/pages/settings/Settings';
import Navigation from '../../components/shared/navigation/Navigation';
import Contact from '../../components/shared/contact/Contact';

class App extends React.Component {
  state = {
    products: [],
    allCategories: [],
    currentTheme: lightTheme,
    downloadInProgress: true,
  };

  componentDidMount() {
    this.unsubscribeCategoriesListener = setCategoriesDatabaseListener(
      downloadedCategories => {
        this.setState({
          allCategories: [...downloadedCategories],
          downloadInProgress: false,
        });
      },
    );

    this.unsubscribeProductsListener = setProductsDatabaseListener(
      downloadedProducts => {
        this.setState({
          products: [...downloadedProducts],
          isLoading: false,
        });
      },
    );
  }

  componentWillUnmount() {
    this.unsubscribeProductsListener();
    this.unsubscribeCategoriesListener();
  }

  changeTheme = () => {
    const { currentTheme } = this.state;
    this.setState({
      currentTheme: currentTheme === lightTheme ? darkTheme : lightTheme,
    });
  };

  render() {
    const { currentTheme, contactModalIsVisible } = this.state;
    const contextElements = {
      ...this.state,
      changeTheme: this.changeTheme,
    };

    const mergedTheme = { ...defaultTheme, ...currentTheme };

    return (
      <Router>
        <ThemeProvider theme={mergedTheme}>
          <GlobalStyle />
          <AppContext.Provider value={contextElements}>
            <Navigation />
            <Contact app />
            <Switch>
              <Redirect exact from="/" to="/pantry" />
              {/* <Route exact path="/" component={Pantry} /> */}
              <Route path="/pantry" component={Pantry} />
              <Route path="/shopping" component={Shopping} />
              <Route path="/settings" component={Settings} />
              <Redirect to="/" />
            </Switch>
          </AppContext.Provider>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
