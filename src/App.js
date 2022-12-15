import './App.css';
import Home from './components/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';

export default function App() {
 
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="./" element={<Home/>}>
           
          </Route>
          <Route exact path="./search" element={<SearchPage/>}>
         
          </Route>
        </Switch>
      </Router>
    <Home />
    </div>
  );
}

//export default App;
