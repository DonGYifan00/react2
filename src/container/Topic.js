import React, { Component } from 'react'

export default class Topic extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        console.log(id);
        fetch('https://cnodejs.org/api/v1/topic/'+id)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data});                
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let id = this.props.match.params.id
            fetch('https://cnodejs.org/api/v1/topic/'+id)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data});                
                })
        }
    }
    render() {
        console.log(this.state.data);
        return (
            <div className="topic">
                <h1>{this.state.data.title}</h1>
                <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>   
            </div>
        )
    }
}
