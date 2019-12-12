import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    callback(){
        console.log("I am  working")
    }
    increament(){
        this.setState({
            count:this.state.count+1
         },()=>this.callback())
    }
    increament1(){
        this.setState((prevState,props)=>({
            count:prevState.count+1
        }))
    }
    increamentFive(){
        this.increament1()
        this.increament1()
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={()=> this.increamentFive()}>Hey there</button>
            </div>
        )
    }
}

export default Counter
