import React from 'react'
import './LogInPage.css'
import {BACKEND_URL,SHOW_BUTTONS,SHOW_LOGIN,SHOW_SIGNUP} from './constants'
//import 'bootstrap/dist/css/bootstrap.css'
import {withRouter} from 'react-router-dom'
class LogInPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {formStatus:SHOW_BUTTONS,passValue:'',unameValue:'',confirmPassValue:''}
        this.changeToLogIn = this.changeToLogIn.bind(this)
        this.changeToSignUp = this.changeToSignUp.bind(this)
        this.changeToShowBtns = this.changeToShowBtns.bind(this)
        this.logIn = this.logIn.bind(this)
    }
    changeToLogIn(){
        this.setState({formStatus:SHOW_LOGIN})
    }
    changeToSignUp(){
        this.setState({formStatus:SHOW_SIGNUP})
    }
    changeToShowBtns(){
        this.setState({formStatus:SHOW_BUTTONS})
    }
    logIn(){
        //need to insert logic to check if uname is valid or invalid
        this.props.history.push({pathname:"/home",state:{uName:this.state.unameValue}})
    }
    renderLogIn(){
        switch (this.state.formStatus){
            case SHOW_BUTTONS:
                return(
                    <span>
                        <button type="button" className="btn btn-Dark" onClick = {this.changeToLogIn}>Log In</button>
                        <button type="button" className="btn btn-Dark" onClick = {this.changeToSignUp}>Sign Up</button>
                    </span>
                )
            case SHOW_LOGIN:
                return (
                    <span>
                        <LogInForm
                        unameValue = {this.state.unameValue}
                        uName = {(event) => {this.setState({unameValue:event.target.value})}}
                        passValue = {this.state.passValue}
                        pass = {(event) => {this.setState({passValue:event.target.value})}}
                        logIn = {this.logIn}
                        />
                    </span>
                )
            case SHOW_SIGNUP:
                return (
                    <span>
                        <SignInForm
                        unameValue = {this.state.unameValue}
                        uName = {(event) => {this.setState({unameValue:event.target.value})}}
                        passValue = {this.state.passValue}
                        pass = {(event) => {this.setState({passValue:event.target.value})}}
                        passConfirmValue = {this.state.confirmPassValue}
                        passConfirm = {(event) => {this.setState({passConfirmValue:event.target.value})}}
                        />
                    </span>
                )
        }
    }
    render(){
        return(
            <div className ="container">
                <nav className = "navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        
                        <div className="navbar-header">
                            <a href="#" className="navbar-brand">Cloud9 Habit Builder</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right ">
                                <li><a href="#">Login<i className="fa fa-user-plus"></i></a></li>
                                <li><a href="#">Sign Up<i className="fa fa-user-plus"></i></a></li>
                            </ul>

                        </div>
                    {this.renderLogIn()}

                    </div>
                </nav>
                    <h1>Cloud 9 Habit Builder</h1>
                    
                    <h1>Habits: What are they?</h1>
                    <p>Habits are actions you do on a regular basis. We have good habits and bad habits. 2020 was a difficult year for many people so lets make 2021 a year for improvement</p>
                    <p>Cloud 9 offers you a chance to develop new habits by keeping track of them.</p>
                    <p>The averge time to form a habit is 66 days. We will help you get there by tracking your progress.</p>
                    <p>Join us today so you can get rid of bad habits and develop good habits</p>
           </div>
            
        )
    }
}
function UnameInp(props){
    return(
        <span className = "input-box">
            <input value = {props.value} onChange={props.handleChange} placeholder={"username"}/>
        </span>
    )
}
function LogInForm(props){
    return (
        <form>
            <div><UnameInp value = {props.unameValue} handleChange = {props.uName}/></div>
            <div><PassInp value = {props.passValue} handleChange = {props.pass} /></div>
            <div><button type="button" className="btn btn-Dark" id="in" onClick = {props.logIn}>Log In</button></div>
            <ul className="nav navbar-nav navbar-right ">
                <li><a href="#">Login<i className="fa fa-user"></i></a></li>
            </ul>
        </form>
    
    )
}

function SignInForm(props){
    return (
        <form>
            <div><UnameInp value = {props.unameValue} handleChange = {props.uName}/></div>
            <div><PassInp value = {props.passValue} handleChange = {props.pass} /></div>
            <div><ConfirmPassInp  value = {props.confirmPassValue} handleChange = {props.confirmPass} /></div>
            <button type="button" className="btn btn-Dark" id="up">Sign Up</button>
            <ul className="nav navbar-nav navbar-right ">
                <li><a href="#">Sign Up<i className="fa fa-user-plus"></i></a></li>
            </ul>
         </form>
        )
}







function PassInp(props){
    return(
        <span className = "input-box">
            <input value = {props.value} onChange={props.handleChange} placeholder={"password"}/>
        </span>
    )
}

function ConfirmPassInp(props){
    return(
        <span className = "input-box">
            <input value = {props.value} onChange={props.handleChange} placeholder={"confirm password"}/>
        </span>
    )
}

export default withRouter(LogInPage)