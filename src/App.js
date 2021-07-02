import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './view/home-page';
import ChangeBook from './components/change-book/change-book';
import AddNewBook from './components/add-book/add-book';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/product/:productId' component={ChangeBook} />
        <Route exact path='/product' component={AddNewBook} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
