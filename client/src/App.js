import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Form from './components/Form.js'
import Tutorials from './components/Tutorials.js'

function App() {
const [list, setList] = useState([])
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [count, setCount] = useState(0)
const [fresh, setFresh] = useState(0)


  return (
<div>
<Form count={(e) => setCount(e)} title={(e) => setTitle(e)} content={(e) => setContent(e)}/>
<Tutorials/>
</div>
  );
}

export default App;
