import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [events , setEvents] = useState([
    {title: "React", date: "01.01.2020", id: 1},
    {title: "Angular", date: "01.01.2020", id: 2},
    {title: "Vue", date: "01.01.2020", id: 3},
  ]);

  const handleClick = (id) => {
    console.log(id);
  }
  return (
    <div className="App">
      {events.map((event, index) => (
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
