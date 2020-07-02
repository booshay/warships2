import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          {/* <Route exact path='/todo/:id' component={TodoDetails} /> */}
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          {/* <Route exact path='/addTodo' component={AddTodo} /> */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
