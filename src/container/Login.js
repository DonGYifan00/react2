import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login1"><h1>登录</h1></div>
                <p>用户名:</p>
                <p>密码:</p>
                <input type="text"/>
                <input type="password"/>
                <Link to="/home/all"><input type="submit" value="登录"  className="login2"/></Link>
            </div>
        )
    }
}
