import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import routes from './routes';

function App() {
  return(
    <div className="app">
    <Router>
    <>
      <nav className="navigation">
        <ul>
          <li className="green"><Link to="/">Home</Link></li>
          <li className="blue"><Link to="/images">Images</Link></li>
          <li className="yellow"><Link to="/posts">Posts</Link></li>
          <li className="pink"><Link to="/contacts">Contacts</Link></li>
        </ul>           
      </nav>
      <Switch>
        {
          routes.map(route => (
            <Route
              exact={route.exact}
              key={route.toString()}
              path={route.path}
            >
              {route.component}
            </Route>
                ))
        }
      </Switch>      
    </>   
    </Router>
    </div>
  );
}

export default App;


