import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Services from './components/Pages/Services/Services';
import About from './components/Pages/About/About';
import NotFound from './components/Pages/NotFound/NotFound';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
