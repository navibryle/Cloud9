import React from 'react'
import './LogInPage.css'
import {BACKEND_URL,SHOW_BUTTONS,SHOW_LOGIN,SHOW_SIGNUP} from './constants'
import 'bootstrap/dist/css/bootstrap.css'

export default class LogInPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {formStatus:SHOW_BUTTONS,passValue:'',unameValue:'',confirmPassValue:''}
        this.changeToLogIn = this.changeToLogIn.bind(this)
        this.changeToSignUp = this.changeToSignUp.bind(this)
        this.changeToShowBtns = this.changeToShowBtns.bind(this)
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
    renderLogIn(){
        switch (this.state.formStatus){
            case SHOW_BUTTONS:
                return(
                    <span>
                        <button onClick = {this.changeToLogIn}>Log In</button>
                        <button onClick = {this.changeToSignUp}>Sign Up</button>
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
                        pass = {(event) => {this.setState({unameValue:event.target.value})}}
                        passConfirmValue = {this.state.confirmPassValue}/>
                    </span>
                )
        }
    }
    render(){
        return(
            <div>
                <h1>Cloud 9 Habit Builder</h1>
                {this.renderLogIn()}
                
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
            <UnameInp value = {props.unameValue} handleChange = {props.uName}/>
            <PassInp value = {props.passValue} handleChange = {props.pass} />
            <button id="in">Log In</button>
        </form>

    )
}

function SignInForm(props){
    return (
        <form>
            <UnameInp value = {props.unameValue} handleChange = {props.uName}/>
            <PassInp value = {props.passValue} handleChange = {props.pass} />
            <PassInp value = {props.confirmPassValue} handleChange = {props.confirmPass} />
            <button id="up">Sign Up</button>
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
