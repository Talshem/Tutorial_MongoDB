import React, { useEffect, useState } from 'react';

function Form(props) {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [count, setCount] = useState(0)

const handleTitle = (event) => {
   setTitle(event.target.value)
  }

  const handleContent = (event) => {
   setContent(event.target.value)
  }

const addTutorial = (event) => {
event.preventDefault();
setCount(e => e + 1)
props.title(title)
props.content(content)
props.count(count)
}

return (
<div>
 <h1>Tutorials</h1>
 <form onSubmit={addTutorial}>
    <label> Title: </label>
    <input type="text" id="tutorialTitle" onChange={handleTitle}/> <br/><br/>
    <label>Content: </label>
    <input type="text" id="tutorialContent" onChange={handleContent}/><br/><br/>
    <input type='submit' id="addButton"/>
    </form>
</div>
);
}

export default Form;