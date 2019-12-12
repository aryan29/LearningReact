import React from 'react'
import './myStyle.css'
function stylessheet(props) {
    let className=props.primary?('primary'):''
    return (
        <div>
            <h1 className={`${className} fontxl`}>StyleSheets</h1>
        </div>
    )
}

export default stylessheet
