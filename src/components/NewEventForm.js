import './NewEventForm.css';

import React, { useRef, useState } from 'react'

export default function NewEventForm({addEvent}) {

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const resetForm = () => {
    setTitle('');
    setDate('');
    setLocation('manchester')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 1000)
    }
    console.log(event);
    addEvent(event);
    resetForm();
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
          <span>Event Title: </span>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
      </label>
      <label>
          <span>Event Date: </span>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
      </label>
      <label>
        <span>Event Location: </span>
        <select onChange={(e)=>setLocation(e.target.value)}>
          <option value="manchester">Manchester</option>
          <option value="liverpool">Liverpool</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}
