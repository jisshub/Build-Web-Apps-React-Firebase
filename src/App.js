import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [events , setEvents] = useState([
    {title: "React", date: "01.01.2020", id: 1},
    {title: "Angular", date: "01.01.2020", id: 2},
    {title: "Vue", date: "01.01.2020", id: 3},
  ]);

  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);

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
      {showModal && (<Modal handleShowModal={handleShowModal}>
        <h2>Terms and Condition!!</h2>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      </Modal>)}
    </div>
    )
  }

export default App;
