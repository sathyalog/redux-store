import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import {Provider} from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Checkout from './components/Checkout';
import Product from './components/Product';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar/>
          <section className="container">
          <Route exact path="/" component={Landing}/>
            <Switch>
              <Route exact path='/checkout' component={Checkout}/>
              <Route exact path='/product' component={Product}/>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
