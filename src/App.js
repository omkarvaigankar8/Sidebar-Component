import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';


function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Switch>
          <Route path="/"exact component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/reports" component={Reports}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
