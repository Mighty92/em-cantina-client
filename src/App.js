import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Details from './views/Details';
import AjoutRecette from './views/AjoutRecette';
import ModificationRecette from './views/ModificationRecette';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/details" exact component={Details}/>
          <Route path="/ajout-recette" exact component={AjoutRecette}/>
          <Route path="/modification-recette/:id" exact component={ModificationRecette}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
