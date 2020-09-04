import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tutorials(props) {
const [edit, setEdit] = useState([])
const [published, setPublished] = useState([])
const [count, setCount] = useState(0)
const [retitle, setRetitle] = useState('')
const [recontent, setRecontent] = useState('')

useEffect(() =>{
postData();
},[props.count]);


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

  const makeDeleted = async (e) => {
  await axios.delete(`/api/tutorials/${e}`)
  setCount((x) => x + 1);
  }

const postData = async () => {
    if(props.count > 0){
    try{
    await axios.post(`/api/tutorials/`, {
    title: props.title,
    content: props.content,
  })
  .then(function (response) {
  setCount((x) => x + 1);
  })
}catch(error){
 alert(error)
}}
}

  const makeUpdated = async (id, title, content) => {
await axios.put(`/api/tutorials/${id}`, {
title: title,
content: content,
})
  setCount((x) => x + 1);
  }

const makeList = (array) => {

const editArray = array.map((e) => {

var eTitle = e.title;
var eContent = e.content;

function editTitle(event){
eTitle = event.target.value;
console.log(eTitle)
}


 function editContent(event){
eContent = event.target.value;
console.log(eContent)
  }



    if(!e.published){
      return (
        <div className="tutorialEdit" key={e.id}>
          <textarea className="eTitle" defaultValue={eTitle} onChange={editTitle}/>
          <p className="titleEdit">&#9998;</p>
          <textarea rows="4" className="eContent" defaultValue={eContent} onChange={editContent}/>
          <p className="contentEdit">&#9998;</p>     
        <p style={{marginTop:'-35px'}}>
            {e.date}
            {Number(e.date.substr(11, 2)) > 11 ? ' PM' : ' AM'}
            <button className="fa fa-trash-o deleteButton" onClick={() => makeDeleted(e.id)}></button>
            <button className="saveButton fa fa-save" onClick={() => makeUpdated(e.id, eTitle, eContent)}></button>
          </p>
          <button className="publishButton" onClick={() => makePublished(e.id)}>Publish</button>
        </div>
      );
    }});

    const publishedArray = array.map((e) => {
    if (e.published){
      return (
        <div className="tutorialPublished" key={e.id}>
          <h4 className="title">{e.title}</h4>
          <p className="content">{e.content}</p>
        <p style={{marginTop:"125px"}}>
            {e.date}
            {Number(e.date.substr(11, 2)) > 11 ? ' PM' : ' AM'}
             <button style={{background:"rgb(214, 214, 214)", position:"relative", marginLeft:"708px", top:"-15px"}} className="fa fa-trash-o deleteButton" onClick={() => makeDeleted(e.id)}></button>
          </p>
        </div>
      );
    }});
    setEdit(editArray);
    setPublished(publishedArray);
  };


    return(
<div className="flex-container">
<div className="edit">
<p style={{fontSize:"25px", textAlign:"center"}}>Edit Manager</p>  
{edit}</div>
<p className="blank"></p>
<div className="published">
<p style={{fontSize:"25px", textAlign:"center"}}>Published Tutorials:</p>  
{published}</div>
</div>
    );
}

export default Tutorials;