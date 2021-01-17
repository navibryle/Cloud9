//import "@fullcalendar/core/main.css";  
//import "@fullcalendar/daygrid/main.css";  
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid"; 
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import React, { Component } from 'react'  
const events = [{ title: "Today", date: new Date() }];  
class Calendar extends Component{
    constructor(props){
        super(props)
        this.dateClickHandler = this.dateClickHandler.bind(this)
    }
    dateClickHandler(event){
        // dateStr
        console.log(event)
    }
    render() {  
        return (  
            <div className="container">  
                <div className="row title" style={{ marginTop: "20px" }} >  
                    <div class="col-sm-12 btn btn-info">  
                        Calendar
               </div>  
                </div>  
                <FullCalendar className="calendar" 
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin]}  
                    events={events}
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    dateClick={this.props.dateClickHandler}
                />  
            </div>  
        )  
    }  
}  

export default Calendar  


