import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../themes/GlobalStyle';
import { defaultTheme, darkTheme, lightTheme } from '../../themes/themes';
import sampleData from '../../data/db.json';
import { AppContext } from '../../context';
import Pantry from '../../views/Pantry';
import Shopping from '../../views/Shopping';
import Settings from '../../views/Settings';
import Navigation from '../../components/navigation/Navigation';
import { setDatabaseListener, getAllCategories } from '../../data/handlers';

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

    this.unsubscribe = setDatabaseListener(downloadedProducts => {
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

export default App;
