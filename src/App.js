import logo from './logo.svg';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom'
import LogInPage from './LogInPage'
function App() {
  
  return (
    <div className="App">
      
      <LogInPage/>
    </div>
  );
}

export default App;
