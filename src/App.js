import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Footer from './components/footer/footer';

import Header from './components/header/header';
import HomePage from './pages/home-page/homepage';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/shop" component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
