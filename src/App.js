import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [events , setEvents] = useState([]);
  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
  }

  const handleShowModal = () => {
    setShowModal(false);
  }

  const handleClick = (id) => {
    // filter method returns a new array with the items that match the condition
   setEvents((prevEvents) => {
      return prevEvents.filter(event => event.id !== id);
   })
  }

  return (
    <div className="App">
      <Title title="Mario Kingdom Events" subtitle="All the latest events in mario kingdom"/>
      <Title title="Jurassic Park" subtitle="All the latest events in jurassic park"/>

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
        
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      <div>
        <button onClick={()=>setShowModal(true)}>Show Modal</button>
      </div>
      {showModal && (<Modal handleShowModal={handleShowModal} isShowModal={true}>
        <NewEventForm />
      </Modal>)}
    </div>
    )
  }

export default App;
