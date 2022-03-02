import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [events , setEvents] = useState([
    {title: "React", date: "01.01.2020", id: 1},
    {title: "Angular", date: "01.01.2020", id: 2},
    {title: "Vue", date: "01.01.2020", id: 3},
  ]);

  const [showEvents, setShowEvents] = useState(true);

  const handleClick = (id) => {
    // filter method returns a new array with the items that match the condition
   setEvents((prevEvents) => {
      return prevEvents.filter(event => event.id !== id);
   })
  }

  return (
    <div className="App">
        {
        showEvents && (
          <div>
            <button onClick={() => setShowEvents(false)}>Hide Events</button>
          </div>
        )
        }

        {
        !showEvents && (
          <div>
            <button onClick={() => setShowEvents(true)}>Show Events</button>
          </div>
          )
        }
        
      {showEvents && events.map((event, index) => (
        <div className='event-preview' key={event.id}>
          <h2>{index} - {event.title}</h2>
          <p>{index} - {event.date}</p>
          <button onClick={() => handleClick(event.id)}>Delete Event</button> 
        </div>
      ))}
    </div>
    )
  }

export default App;
