import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tutorials(props) {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [edit, setEdit] = useState([])
const [published, setPublished] = useState([])
const [count, setCount] = useState(0)

useEffect(() =>{
setTitle(props.title)
setContent(props.content)
},);


    useEffect(() => {
    const fetchData = async () => {
    const { data } = await axios.get(`/api/tutorials`);
     makeList(data);
    }; fetchData();
  },[count]);

    const makePublished = async (e) => {
    await axios.put(`/api/tutorials/${e}/publish`);
    setCount((x) => x + 1);
  };


 const makeList = (array) => {
     console.log(array)
    const editArray = array.map((e) => {
    if(!e.published){
      return (
        <div className="tutorialEdit" key={e.id}>
          <h4 className="title">{e.title}</h4>
          <p className="content">{e.content}</p>
          <p>{JSON.stringify(e.published)}</p>
        <p>
            {e.date}
            {Number(e.date.substr(11, 2)) > 11 ? ' PM' : ' AM'}
          </p>
          <button onClick={() => makePublished(e.id)}>Publish</button>
        </div>
      );
    }});

    const publishedArray = array.map((e) => {
    if (e.published){
      return (
        <div className="tutorialPublished" key={e.id}>
          <h4 className="title">{e.title}</h4>
          <p className="content">{e.content}</p>
          <p>{JSON.stringify(e.published)}</p>
        <p>
            {e.date}
            {Number(e.date.substr(11, 2)) > 11 ? ' PM' : ' AM'}
          </p>
          <button onClick={() => makePublished(e.id)}>Publish</button>
        </div>
      );
    }});
    setEdit(editArray);
    setPublished(publishedArray);
  };


    return(
<div className="flex-container">
<div className="edit">{edit}</div>
<div className="published">{published}</div>
</div>
    );
}

export default Tutorials;