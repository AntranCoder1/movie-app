import React from 'react';
import './app.css';
import SideBar from './components/sideBar/SideBar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import UserList from './pages/userList/UserList';
import userEdit from './pages/userEdit/userEdit';
import userCreate from './pages/userCreate/userCreate';
import Product from './pages/product/Product';
import productEdit from './pages/productEdit/productEdit';
import newProduct from './pages/newProduct/newProduct';


function App() {

  

  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/users/:userId" component={userEdit} />
          <Route exact path="/create" component={userCreate} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/products/:productId" component={productEdit} />
          <Route exact path="/newproduct" component={newProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
