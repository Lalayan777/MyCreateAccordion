import { useReducer, useState } from 'react';
import './App.css';
import Accordion from './Accordion';

function reducer(state, action) {
  if (action.type === "ADD_ACCORDION") {
      return [
          ...state,
          action.payload
      ];
  } else if (action.type === "DELETE_ACCORDION") {
      return state.filter((item) => item.id !== action.payload)
  }
}

function App() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [todos, dispatch] = useReducer(reducer, [])
  const handleTitle = (e)=>{
       setTitle(e.target.value)
       console.log(e.target.value);
  }
  const handleText = (e)=>{
    setText(e.target.value)
    console.log(e.target.value);
  }
  const onDelete = (id) => {
    dispatch({
      type: "DELETE_ACCORDION",
      payload: id
    })
  }
  const handleSubmit = (e)=>{
       e.preventDefault()
       if (text.trim().length > 0 && title.trim().length > 0) {
           dispatch({
             type: "ADD_ACCORDION",
             payload: {
              id: Math.random(),
              title: title,
              description: text
             }
           })
       }
       setText("")
       setTitle("")
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter title' value={title} onChange={handleTitle } />
        <textarea placeholder='Enter description' value={text} onChange={handleText}></textarea>
        <input type="submit" value="ADD" className='sub' />
      </form>
      <div>
      {
          todos.map((item) => {
            return <Accordion key={item.id} onDelete={onDelete} accordion={item}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
