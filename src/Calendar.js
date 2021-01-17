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
                    selectable={true}
                    plugins={[dayGridPlugin]}  
                    events={this.props.events}
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    dateClick={this.props.dateClickHandler}
                />  
            </div>  
        )  
    }  
}  

export default Calendar  


