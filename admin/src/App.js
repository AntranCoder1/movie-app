import React, { useContext } from 'react';
import './app.css';
import SideBar from './components/sideBar/SideBar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import UserList from './pages/userList/UserList';
import userEdit from './pages/userEdit/userEdit';
import userCreate from './pages/userCreate/userCreate';
import Product from './pages/product/Product';
import ProductEdit from './pages/productEdit/ProductEdit';
import newProduct from './pages/newProduct/newProduct';
import Login from './pages/login/Login';
import { AuthContext } from './context/authContext/AuthContext';

function App() {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          { user ? <Redirect to='/' /> : <Login /> }
        </Route>
        { user ? (
          <>
            <Topbar />
            <div className="container">
              <SideBar />
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={UserList} />
                <Route exact path="/users/:userId" component={userEdit} />
                <Route exact path="/create" component={userCreate} />
                <Route exact path="/movies" component={Product} />
                <Route exact path="/products/:productId" component={ProductEdit} />
                <Route exact path="/newproduct" component={newProduct} />
            </div>
          </>
        ) : <Login /> }
      </Switch>
    </Router>
  );
}

export default App;
