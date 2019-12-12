import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        // let message
        // if(this.state.isLoggedIn)
        // message= (<div>Welcome Aryan</div>)
        // else
        // message= (<div>Welcome Guest</div>)
        // return message
        return (this.state.isLoggedIn?(<div>Welcome Aryan</div>):(<div>You are a Guest</div>))
    }
}

export default UserGreeting
