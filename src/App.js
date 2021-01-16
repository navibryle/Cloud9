import logo from './logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom';
import LogInPage from './LogInPage';
import HomePage from './HomePage';

function App() {

  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" component={}/>
            <Route path="/login" component={LogInPage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="404" component={error}/>
          </Switch>
      </div>
    </Router>
      
  );
}

export default App;
