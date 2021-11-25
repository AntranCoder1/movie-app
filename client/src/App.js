import React, { useContext } from 'react';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import './App.scss';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

function App() {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          { user ? <Home /> : <Redirect to='/register' /> }
        </Route>
        <Route path='/register'>
          { user ? <Redirect to='/' /> : <Register /> }
        </Route>
        <Route path='/login'>
          { user ? <Redirect to='/' /> : <Login /> }
        </Route>
        { user && (
          <>
            <Route exact path='/movies'>
              <Home type='movies' />
            </Route>
            <Route exact path='/series'>
              <Home type='series' />
            </Route>
            <Route path='/watch'>
              <Watch />
            </Route>
          </>
        ) }
      </Switch>
    </Router>
  );
}

export default App;
