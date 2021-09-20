import React from 'react'

export default class Child extends React.Component {
    componentDidUpdate=()=>{
        console.log("componentDidUpdate from Child");
    }
    constructor(props){
        console.log("I am constructor from Child");
        super(props);
        this.state ={
            Name:""
        }
    }
    handleChange=(event)=>{
        console.log("Event Handlers from Child");
        this.setState({
            Name:event.target.value
        });
    }
    static getDerivedStateFromProps=(props,state)=>{
        console.log("getDerivedStateFromProps from Child");
        return {
            Name:state.Name
        }
    }
    componentDidMount=()=>{
        console.log("componentDidMount from Child");
        this.setState({
            Name:"Navtheeb"
        })
        this.data="Me";
    }
    componentWillUnmount=()=>{
        console.log("componentWillUnmount from Child");
    }
    render(){
        console.log("Render from Child====>",this.data);
        return(<div>
            <input type="text" value={this.state.Name} onChange={this.handleChange} />
            <div>Hello {this.state.Name} world</div>
        </div>)
    }
}