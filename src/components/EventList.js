import React from "react"
import styles from "./EventList.module.css"

export default function EventList({events, handleClick}) {
  return (
    <div>
        <h1>Event List</h1>
        {
            events.map((event, index) => (
                <div className={styles.card} key={event.id}>
                  <h2>{index} - {event.title}</h2>
                  <p>{index} - {event.date}</p>
                  <button onClick={() => handleClick(event.id)}>Delete Event</button> 
                </div>
              ))
        }
    </div>
  )
}
