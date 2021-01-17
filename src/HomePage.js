import React from 'react'
import './HomePage.css'
import {BACKEND_URL} from './constants'
import {Link} from 'react-router-dom'
import Calendar from './Calendar'

export default class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.handleSignOut = this.handleSignOut.bind(this);
        this.state = {event:[],habit:'',curDate:null,taskList:null,allEvents:[]}//, uName:this.props.location.state.uName}
        this.handleSignOut = this.handleSignOut.bind(this)
        //this.submitHabit = this.submitHabit.bind(this)
        this.dateClickHandler = this.dateClickHandler.bind(this)
        this.renderTaskList = this.renderTaskList.bind(this)

    }

    handleSignOut() {
        this.props.handleSignOut();
    }

    componentDidMount(){
        //query database for habits and then store it to events
        this.renderTaskList()
    }
    
    renderTaskList(){
        this.parseEvent()
        const tasks = this.state.event.map((ahabit) => <li>{ahabit}</li>)
        this.setState({taskList: tasks})
            
        //this function will take the data from the event list 
        //and return a list to be rendered
        //map through event and create <li>a habbit</li>
        //"2001-04-15"
       // //{title:'name habbit date enddate', completed: true}
        //need to return a html list that contains unordered list and every element of the list is a habbit
    }
    
    parseEvent(){
        for (var obj in this.state.event) {
            var ahabit = JSON.parse(this.state.event[obj])
            //ahabit.habbit
            //ahabit.date
            //ahabit.enddate
        }
    }
    
    dateClickHandler(event){
        //need to pull up the db to validate input
        this.setState({curDate:event.dateStr})
        console.log(this.state.curDate)
        
                
        
    }

    render(){
        return(
            <div id="container-wrapper">
                <nav className = "navbar navbar-inverse navbar-fixed-top ">
                    <div className="container">
                        <div className="navbar-header">
                            <h1 className="home-navbar-brand">Cloud9 Habit Builder</h1>
                        </div>
                        <Link exact to='/'>
                            <button type="button" className="btn btn-Dark">Sign Out</button>
                        </Link>
                    </div>
                </nav>
                <div>
                    {this.state.taskList}
                <span>
                    {this.state.dateInp}
                    
                    <Resolution date = {this.state.curDate} uName = {this.state.uName}/>
                    <Calendar dateClick = {this.dateClickHandler} events = {this.state.allEvents} />
                </span>
                </div>
            </div>
            
        )
    }
}

class Resolution extends React.Component{
    constructor(props){
        super(props)
        this.state = {habbit: '', date: this.props.date, userName: this.props.uName}
        this.updateInput = this.updateInput.bind(this)
    }

    check = () => {
        const req = new XMLHttpRequest()
        req.open('POST',`${BACKEND_URL}/login/addhabbit?UserName="${this.state.userName}"&habbit="${this.state.habbit}"`,false)

        req.send(null)
        
        
    }

    updateInput(event){
        this.setState({habbit : event.target.value})
        this.setState({allEvents: {title: this.state.habbit, date: new Date()}}) // change to this.state.curDate


    }

    render() {
        return(
            <div>
                <form className="formElement" method="get">
                    <input type="text" onChange={this.updateInput} value = {this.state.habbit} placeholder="Enter a habit"/> 
                    <input type="submit" class="btn btn-success" onClick={this.check}></input>
                </form>
            </div>
        )
    }
}