import React from 'react';
import './Boxes.css'
function OutputScreen(props){
    return(
        <div className="screen">
            <input type="text" readOnly value={props.value}/>
        </div>
    )
}
export default OutputScreen