import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js'
import Footer from './components/Footer'
import Header from './components/Header'
import Tutorials from './components/Tutorials.js'

function App() {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [count, setCount] = useState(0)

  return (
<div>
<Header/>
<Form count={(e) => setCount(e)} title={(e) => setTitle(e)} content={(e) => setContent(e)}/>
<Tutorials count={count} title={title} content={content}/>
<Footer/>
</div>
  );
}

export default App;
