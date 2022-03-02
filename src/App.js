import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState("mario");
  const [country, setCountry] = useState("ukraine");
  const [events , setEvents] = useState([
    {title: "React", date: "01.01.2020", id: 1},
    {title: "Angular", date: "01.01.2020", id: 2},
    {title: "Vue", date: "01.01.2020", id: 3},
  ]);
  const [courses, setCourses] = useState(
    {courseName: "Ddata Science", duration: "10 months", fees:50000, id: 1},
    {courseName: "Machine Learning", duration: "14 months", fees:80000, id: 2},
    {courseName: "AI", duration: "12 months", fees:150000, id: 3}
  );

  const handleClick = () => {
    setState("luigi");
    console.log(state);
  }
  const handleCountry = () => {
    setCountry("russia");
    console.log(country);
  }
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={handleClick}>Click me</button>
      <h2>{country}</h2>
      <button onClick={handleCountry}>Click Me</button>
      {events.map((event, index) => (
        <div className='event-preview' key={event.id}>
          <h2>{index} - {event.title}</h2>
          <p>{index} - {event.date}</p>
        </div>
      ))}
    </div>
    )
  }

export default App;
