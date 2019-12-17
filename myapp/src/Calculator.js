import React, { Component } from 'react'
import Buttons from './components/Buttons'
import CalculatorTitle from './components/CalculatorTitle'
import CalculatorOutput2 from './components/CalciOut2'
import './Calculator.css'
class Calcultor extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             question:'',
             answer:''
        }
    }
    getResult(event){
        console.log("hello")
        var ans=eval(this.state.question);
        this.setState({answer:ans,question:''})
    }
    addi(event){
        console.log("pressing me")
        this.setState({question:this.state.question+event.target.value})
    }
    render(){
        return(
            <div class="calc">
                <CalculatorTitle></CalculatorTitle>
                <div className="screen-main">
                    <CalculatorOutput2 question={this.state.question} answer={this.state.answer}/>
                    <div className="table">
                        <ul>
                            <Buttons label="1" myclick={(event)=>this.addi(event)}></Buttons>
                            <Buttons label="2" myclick={(event)=>this.addi(event)}></Buttons>
                            <Buttons label="3" myclick={(event)=>this.addi(event)}></Buttons>
                        </ul>
                        <ul>
                            <Buttons label="4" myclick={(event)=>this.addi(event)}></Buttons>
                            <Buttons label="5" myclick={(event)=>this.addi(event)}></Buttons>
                            <Buttons label="6" myclick={(event)=>this.addi(event)}></Buttons>
                        </ul>
                        <ul>
                            <Buttons label="7" myclick={(event)=>this.addi(event)}></Buttons>
                            <Buttons label="8" myclick={(event)=>this.addi(event)}></Buttons>
                            <Buttons label="9" myclick={(event)=>this.addi(event)}></Buttons>
                        </ul>
                        <ul>
                            <Buttons label="0" myclick={(event)=>this.addi(event)}></Buttons>
                            <Buttons label="+" myclick={(event)=>this.addi(event)}></Buttons>
                            <Buttons label="-" myclick={(event)=>this.addi(event)}></Buttons>
                        </ul>
                        <ul>
                            <Buttons label="*" myclick={(event)=>this.addi(event)}></Buttons>
                            <Buttons label="/" myclick={(event)=>this.addi(event)}></Buttons>
                            <Buttons label="=" myclick={(event)=>this.getResult(event)}></Buttons>
                        </ul>
                        <ul>
                            <Buttons label="Clear" myclick={()=>{this.setState({answer:'',question:''})}}></Buttons>
                            <Buttons label="Delete" myclick={()=>{this.setState({question:this.state.question.substr(0,this.state.question.length-1)})}}></Buttons>
                            <Buttons label="." myclick={(event)=>this.addi(event)}></Buttons>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
export default Calcultor