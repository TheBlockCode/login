import logo from './logo.svg';
import './App.css';
import Bygoogle from './components/ByGoogle';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { Route, Router, Switch } from 'react-router-dom';
import { Inicio } from './components/Inicio';
import { Login } from './components/Login';
import { Registro } from './components/Registro';
import { Navbar } from './components/Navbar';
import { Recuperar } from './components/Recuperar';
import {aboutUs} from './components/aboutUs'

function App() {
  return (
    <Router>

      <Navbar/>
    
      <div className = 'container p-2'>

        <Switch>
          <Route path = '/Registro' component = {Registro} />
          <Route path = "/Inicio" component = {Inicio} />  
          <Route path = "/Recuperar" component = {Recuperar} />  
          <Route path = "/Login" component = {Login} />  
          <Route path = '/' component = {aboutUs} />

          
        </Switch>    

      </div>
      <Bygoogle />
    </Router>
  );
}

export default App;
