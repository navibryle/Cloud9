import React from 'react'
import './LogInPage.css'
import {BACKEND_URL,SHOW_BUTTONS,SHOW_LOGIN,SHOW_SIGNUP} from './constants'
//import 'bootstrap/dist/css/bootstrap.css'
import {withRouter,Link} from 'react-router-dom'
import Modal from 'react-modal';
class LogInPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {formStatus:SHOW_BUTTONS,passValue:'',unameValue:'',confirmPassValue:'',showModal:false}
        this.changeToLogIn = this.changeToLogIn.bind(this)
        this.changeToSignUp = this.changeToSignUp.bind(this)
        this.changeToShowBtns = this.changeToShowBtns.bind(this)
        this.hideModalHandler = this.hideModalHandler.bind(this)
        this.logIn = this.logIn.bind(this)
    }
    changeToLogIn(){
        this.setState({formStatus:SHOW_LOGIN})
    }
    changeToSignUp(){
        this.showModalHandler()
        this.setState({formStatus:SHOW_SIGNUP})
        
    }
    changeToShowBtns(){
        this.setState({formStatus:SHOW_BUTTONS})
    }   
    logIn(){
        //need to insert logic to check if uname is valid or invalid

        this.props.history.push({pathname:"/home",state:{uName:this.state.unameValue}})
        
    }

    showModalHandler(){
        this.setState({showModal:true})
    }
    hideModalHandler(){
        this.setState({showModal:false})
    }

    renderLogIn(){
        switch (this.state.formStatus){
            case SHOW_BUTTONS:
                return(
                    <span>
                        <button type="button" className="btn" onClick = {this.changeToLogIn}>Log In</button>
                        <button type="button" className="btn" onClick = {this.changeToSignUp}>Sign Up</button>
                    </span>
                )
            case SHOW_LOGIN:
                return (
                    <span className="loginInput">
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
                    <div className="signup-input">
                        <SignInForm
                        unameValue = {this.state.unameValue}
                        uName = {(event) => {this.setState({unameValue:event.target.value})}}
                        passValue = {this.state.passValue}
                        pass = {(event) => {this.setState({passValue:event.target.value})}}
                        passConfirmValue = {this.state.confirmPassValue}
                        passConfirm = {(event) => {this.setState({passConfirmValue:event.target.value})}}
                        />
                    </div>
                )
        }
    }
    render(){
        return(
            <div className="container-wrapper">
                <nav className = "navbar navbar-inverse navbar-fixed-top ">
                    <div className="container">
                        
                        <div className="navbar-header">
                                <a href="/" className="navbar-brand">Cloud9 Habit Builder</a>
                        </div>
                    
                        
                    {this.renderLogIn()}

                    </div>
                </nav>
                <div className ="container-fluid body">
                    <div className = "description-wrapper">
                        <div className="description">
                            <h1>Cloud9 Habit Developer</h1>
                            <hr></hr>
                            <p>Habits are actions you do on a regular basis. We have good habits and bad habits. 2020 was a difficult year for many people so lets make 2021 a year for improvement</p>
                            <p>Cloud 9 offers you a chance to develop new habits by keeping track of them.</p>
                            <p>The averge time to form a habit is 66 days. We will help you get there by tracking your progress.</p>
                            <p>Join us today so you can get rid of bad habits and develop good habits</p>
                        </div>
                    </div>
                    
                </div>
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
        <form className = "login-input">
            <a href="/" className="prev-btn"> &laquo; Back</a>
            <UnameInp value = {props.unameValue} handleChange = {props.uName}/>
            <PassInp value = {props.passValue} handleChange = {props.pass} />
            <button type="button" className="btn btn-Dark" id="in" onClick = {props.logIn}>Log In</button>
            
        </form>
    
    )
}

function SignInForm(props){
    return (
        <form className="login-input">
            <a href="/" className="prev-btn"> &laquo; Back</a>
            <UnameInp value = {props.unameValue} handleChange = {props.uName}/>
            <PassInp value = {props.passValue} handleChange = {props.pass} />
            <ConfirmPassInp  value = {props.confirmPassValue} handleChange = {props.confirmPass} />
            <button type="button" className="btn btn-Dark" id="up">Sign Up</button>
         </form>
         
        )
}


function PassInp(props){
    return(
        <span className = "input-box">
            <input type="password" value = {props.value} onChange={props.handleChange} placeholder={"password"}/>
        </span>
    )
}

function ConfirmPassInp(props){
    return(
        <span className = "input-box">
            <input type="password" value = {props.value} onChange={props.handleChange} placeholder={"confirm password"}/>
        </span>
    )
}

export default withRouter(LogInPage)