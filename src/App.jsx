import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import './App.css';
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
