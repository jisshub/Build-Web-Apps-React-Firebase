import React from "react"

export default function EventList({events, handleClick}) {
  return (
    <div>
        <h1>Event List</h1>
        {
            events.map((event, index) => (
                <React.Fragment key={event.id}>
                  <h2>{index} - {event.title}</h2>
                  <p>{index} - {event.date}</p>
                  <button onClick={() => handleClick(event.id)}>Delete Event</button> 
                </React.Fragment>
              ))
        }
    </div>
  )
}
