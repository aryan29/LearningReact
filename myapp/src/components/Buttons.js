import React from 'react';
import './Buttons.css'
function Buttons(props){
    return(
        <input type="button" value={props.label} onClick={props.myclick}></input>
    )
}
export default Buttons