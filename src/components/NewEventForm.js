import './NewEventForm.css';

import React, { useState } from 'react'

export default function NewEventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const resetForm = () => {
    setTitle('');
    setDate('');
  }
  return (
    <form className='new-event-form'>
      <label>
          <span>Event Title: </span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
      </label>
      <label>
          <span>Event Date: </span>
          <input 
            type="date" 
            onChange={(e) => setDate(e.target.value)}
            value={date}
            />
      </label>
      <p>Title - {title}, Date - {date}</p>
      <button>Submit</button>
      <p onClick={resetForm}>Reset the form</p>
    </form>
  )
}
