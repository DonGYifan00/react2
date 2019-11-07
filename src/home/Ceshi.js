import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class CilentTest extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?tab=dev&page='+id)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});                
            })
    }

    click=(e)=>{
        fetch('https://cnodejs.org/api/v1/topics?tab=dev&page='+e)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});                
            })
    }


    componentDidUpdate(prevProps){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let id = this.props.match.params.id
            fetch('https://cnodejs.org/api/v1/topics?tab=dev&page='+id)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});                
                })
        }
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div className="cell" key={item.id}>
                            <img src={item.author.avatar_url} className="img1-left" alt=""/>
                            <p className="p1-left">{item.reply_count}/{item.visit_count}</p>
                            <div className="ctype">测试</div>
                            <Link to={`/Topic/${item.id}`} className="ca">{item.title}</Link>
                            <img src={item.author.avatar_url} className="img2-left" alt=""/>
                            <p className="p2-left">一天前</p>
                        </div>
                    ))
                }
                <div className="page">
                    <ul>
                        {
                            [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                                <li key={item} onClick={()=>(this.click(item))}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="bottom"></div>
            </div>
        )
    }
}
