import { useState } from 'react';
import './App.css';
import Modal from './modal/Modal';

function App() {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className="App">
      <button className='open-btn' onClick={() => setModalActive(true)}>Open window modal</button>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
