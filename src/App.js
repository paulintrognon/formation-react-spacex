import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="Content">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
