
import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import Header from './components/Header';
import Right from './Right';
import Detail from './container/Topic';



export default class App extends Component {
    render() {
        return (
            <Router >
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left">
                        <Route path='/home' component={Home}/>
                        <Route path='/Topic/:id' component={Detail}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={Login}/>
                        <Route exact path="/" render={()=>(<Redirect from="/" to="/home/all"/>)}/>
                    </div>
                    <div className="right">
                        <Right/>
                    </div>
                </div>
            </Router>
        )
    }
}



