import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import './App.css'

import MyNavbar from './components/MyNavbar';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"


const App = () => {

  return (
    <div className="App">
      <MyNavbar />
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
    )
}

export default App;
