import React from 'react';
import OutputScreen from './OutputScreen'
function CalculatorOutput2(props){
    return(
        <div className="screen">
           <OutputScreen value={props.question}/>
           <OutputScreen value={props.answer}/>
        </div>
    )
}
export default CalculatorOutput2