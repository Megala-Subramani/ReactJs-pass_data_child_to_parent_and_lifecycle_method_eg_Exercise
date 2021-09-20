import React from 'react'
import Child from './child'

export default class Parent extends React.Component {
    componentDidUpdate=()=>{
        console.log("componentDidUpdate from Parent");
    }
    constructor(props){
        console.log("I am constructor from Parent");
        super(props);
        this.state ={ 
            Name:""
        }
    }
    handleChange=(event)=>{
        console.log("Event Handlers from Parent");
        this.setState({
            Name:event.target.value
        });
    }
    static getDerivedStateFromProps=(props,state)=>{
        console.log("getDerivedStateFromProps from Parent");
        return {
            Name:state.Name
        }
    }
    componentDidMount=()=>{
        console.log("componentDidMount from Parent");
        this.setState({
            Name:"Megala"
        })
        this.ref="asasas";
    }
    componentWillUnmount=()=>{
        console.log("componentWillUnmount from Parent");
    }
    render(){
        console.log("Render from Parent====>",this);
        return(
        <div>
            <input type="text" value={this.state.Name} onChange={this.handleChange} />
            <div>Hello {this.state.Name} world</div>
            <Child />
        </div>)
    }
}