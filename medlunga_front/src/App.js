import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Register from './components/register.component';
import AllOrders from './components/allOrders.component';
import CreateOrder from './components/createOrder.component';
import EditOrder from './components/editOrder.component'

import {BrowserRouter, Switch, Route, Routes} from "react-router-dom";
import axios from 'axios';
import Modal from './components/modal.component';
import OrderDoors from './components/orderDoors.component';
import EditDoor from './components/editDoor.component';
import DoorParts from './components/doorParts.component';
import EditPart from './components/editPart.component';
import CreatePart from './components/createPart.component';
import CreateDoor from './components/createDoor.component';

export default class App extends Component {
  state = {};
  componentDidMount = () => {
    axios.get('api/orders').then(
      res => {
        this.setUser('logged');
        // console.log('token is ' + localStorage.getItem('token'));
        console.log(res);
      },
      err => {
        // console.log('token is ' + localStorage.getItem('token'));
        console.log(err)
      }
    );
  }

  setUser = user => {
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav user={this.state.user} setUser={this.setUser}/>
  
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={() => <Home user={this.state.user}/>}/>
                <Route exact path="/login" component={() => <Login setUser={this.setUser}/>}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/orders" component={AllOrders}/>
                <Route exact path="/new-order" component={CreateOrder}/>
                <Route exact path="/edit-order/:orderId" component={EditOrder}/>
                <Route exact path="/orders/:orderId/doors/new-door" component={CreateDoor}/>
                <Route exact path="/orders/:orderId/doors" component={OrderDoors}/>
                <Route exact path="/orders/:orderId/doors/:doorId/edit" component={EditDoor}/>
                <Route exact path="/orders/:orderId/doors/:doorId/parts" component={DoorParts}/>
                <Route exact path="/orders/:orderId/doors/:doorId/parts/:partId/edit" component={EditPart}/>
                <Route exact path="/orders/:orderId/doors/:doorId/parts/new-part" component={CreatePart}/>
              </Switch>
            </div>
          </div>
  
        </div>
      </BrowserRouter>
    );
  }
}

