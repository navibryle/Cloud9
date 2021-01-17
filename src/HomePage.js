import React from 'react'
import './HomePage.css'
import {BACKEND_URL} from './constants'
import {Link} from 'react-router-dom'
import Calendar from './Calendar'

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
                <nav className = "navbar navbar-inverse navbar-fixed-top">
                    <h1>Cloud9 Habit Builder</h1>
                    <div>
                        <Link exact to='/'>
                            <button type="button" className="btn btn-Dark">Sign Out</button>
                        </Link>
                        
                    </div>
                </nav>
                
                <Calendar />
            </div>
            
        )
    }
}

class Resolution extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <button type="button" class="btn btn-success">
                    Add a Habit 
                </button>
            </div>
        )
    }
}