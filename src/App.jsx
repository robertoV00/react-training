import Todo from './components/Todo.jsx'
import Description from './components/Description.jsx'
import TodoTitle from './components/TodoTitle.jsx'
import Popup from './components/Popup.jsx'
import './App.css'
import {useState} from 'react'
import Counter from './components/Counter.jsx'

function App() {


  const [popupOpen, setPopupOpen] = useState(false);
  //let popupOpen = false

  function togglePopup() {
    setPopupOpen(true)
  }
  
  return (
    <>
      
      <TodoTitle />
        <div>
          <input type="text" onChange={(event) => {
            console.log(event.target.value)
          }}/>
          <button onClick={() => setPopupOpen(true)}>Add to do</button>
        </div>

      <h1>My ToDos</h1>
      <Todo togglePopup={togglePopup}
      task="Learn React" 
      /> 

      <Todo togglePopup={togglePopup}
      task="Finish ASAP Frontend"
      />

      <Todo togglePopup={togglePopup}
      task="Land a junior job"
      />

      <Todo togglePopup={togglePopup}
      task="Earn $100K+"
      />
      {popupOpen && <Popup title="Are you sure you want to delete System 32??"/>}
    </>
  )
}

export default App
