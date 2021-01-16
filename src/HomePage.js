import React from 'react'
import './HomePage.css'
import {BACKEND_URL} from './constants'
import {LINK} from 'react-router-dom'
export default class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut() {

        this.props.handleSignOut();
        
    }

    render(){
        return(
            <div id="container">
                <h1>Cloud 9 Habit Builder</h1>
                <button onClick={this.handleSignOut}>Sign Out</button>
                
            </div>
            
        )
    }
}
