import React from 'react'

function NameList() {
    const names=["Aryan","Nandini","Prachi"]
    const namelist= names.map((x)=><h2>{x}</h2>)
    return (
        <div>{namelist}</div>
    )
}

export default NameList
