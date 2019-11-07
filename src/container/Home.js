import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import All from '../home/All';
import Jinghua from '../home/Jinghua';
import Fenxiang from '../home/Fenxiang';
import Zhaopin from '../home/Zhaopin';
import Ceshi from '../home/Ceshi';
import Wenda from '../home/Wenda';



export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="left-top">
                    <Link to={'/home/all'}>全部</Link>
                    <Link to={'/home/jinghua'}>精华</Link>
                    <Link to={'/home/fenxiang'}>分享</Link>
                    <Link to={'/home/wenda'}>问答</Link>
                    <Link to={'/home/zhaopin'}>招聘</Link>
                    <Link to={'/home/ceshi'}>客户端测试</Link>
                </div>
                <div>
                    <Route path={'/home/all'} component={All}/>
                    <Route path={'/home/jinghua'} component={Jinghua}/>
                    <Route path={'/home/fenxiang'} component={Fenxiang} />
                    <Route path={'/home/wenda'} component={Wenda} />
                    <Route path={'/home/zhaopin'} component={Zhaopin} />
                    <Route path={'/home/ceshi'} component={Ceshi} />
                    <Route exact path="/" render={()=>(<Redirect from="/" to="/home/all"/>)}/>
                </div>
            </div>
        )
    }
}


