import React, { useEffect, useState } from 'react';

function Form(props) {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [count, setCount] = useState(1)

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
 <h1 className="head">Tutorials.</h1>
 <form className="form"onSubmit={addTutorial}>
    <textarea required placeholder="Add title for your tutorial..." className="titleInput" type="text" id="tutorialTitle" onChange={handleTitle}/> <br/><br/>
    <textarea required rows="8" placeholder="Add content for your tutorial..." className="contentInput" type="text" id="tutorialContent" onChange={handleContent}/><br/><br/>
    <input className="submit" type='submit' id="addButton"/>
    </form>
</div>
);
}

export default Form;