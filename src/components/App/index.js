import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Home from '../Home'
import Login from '../Login'
import Signup from '../Signup'
import ForgetPassword from '../ForgetPassword'
import '../../index';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      
      <Switch>
       <Route exact path="/" component={Landing} />
       <Route path="/home" component={Home} />
       <Route path="/login" component={Login} />
       <Route path="/signup" component={Signup} />
       <Route path="/forgetpassword" component={ ForgetPassword} />
      </Switch>

      

      <Footer />
    </Router>
  );
}

export default App;
