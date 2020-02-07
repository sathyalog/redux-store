import React, { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import {Provider} from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import store from './store';
import Loading from './components/Loading';
import Register from './components/Register';
import Address from './components/Address';
import Success from './components/Success';
const Product = React.lazy(() => 
  new Promise(resolve => setTimeout(resolve, 750)).then(() =>
      import('./components/Product')
    )
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar/>
          <section className="container">
            <Suspense fallback={<Loading/>}>
              <Route exact path="/" component={Product}/>
              <Switch>
                <Route exact path='/checkout' component={Checkout}/>
                <Route exact path='/product' component={Product}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/address' component={Address}/>
                <Route exact path='/success' component={Success}/>
              </Switch>
            </Suspense>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
