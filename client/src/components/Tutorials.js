import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function Tutorials(props) {
const [edit, setEdit] = useState([])
const [published, setPublished] = useState([])
const [count, setCount] = useState(0)
const [search, setSearch] = useState('')
const [length, setLength] = useState(5)
const [more, setMore] = useState(true)

useEffect(() =>{
postData();
},[props.count]);


    useEffect(() => {
    const fetchDataEdit = async () => {
    const { data } = await axios.get(`/api/tutorials/?title=${search}`)
    let editArray = []
    let publishArray = []
    for (const tutorial of data){
    if(!tutorial.published){
    editArray.push(tutorial)
    } else {
    publishArray.push(tutorial)
    }}
if(length > editArray.length && length > publishArray.length){
setMore(false)
} else {
setMore(true)
}
     editList(editArray.splice(0, length))
     publishedList(publishArray.splice(0, length))
    }; fetchDataEdit();
  },[count, search, length]);



    const makePublished = async (e, title, content) => {
    if(title === '' || content === ''){
    alert('Either title or content of the submitted tutorial is missing!')
    return;
    } else {
    await axios.put(`/api/tutorials/${e}/publish`, {
    title: title,
    content: content,
    });
  }
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

const deleteAll = async () =>{
await axios.delete(`/api/tutorials`)
setCount((x) => x + 1);
}

const publishedList = (array) => {
    const publishedArray = array.map((e) => {
      return (
        <div className="tutorialPublished" key={e.id}>
          <h4 className="title">{e.title}</h4>
          <p className="content">{e.content}</p>
        <p style={{marginTop:"160px"}}>
            {e.date}
            {Number(e.date.substr(11, 2)) > 11 ? ' PM' : ' AM'}
             <button
             style={{background:"rgb(214, 214, 214)",position:"relative", marginLeft:"800px", top:"-16px"}}
             className="fa fa-trash-o deleteButton"
             onClick={() => makeDeleted(e.id)}>
             </button>
          </p>
        </div>
      )
    })
setPublished(publishedArray);
}

const editList = (array) => {
const editArray = array.map((e) => {
var eTitle = e.title;
var eContent = e.content;

function editTitle(event){
eTitle = event.target.value;
}

 function editContent(event){
eContent = event.target.value;
}

     return (
        <div className="tutorialEdit" key={e.id}>
          <textarea required className="eTitle" defaultValue={eTitle} onChange={editTitle}/>
          <p className="titleEdit">&#9998;</p>
          <textarea required rows="4" className="eContent" defaultValue={eContent} onChange={editContent}/>
          <p className="contentEdit">&#9998;</p>     
        <p style={{marginTop:'-35px'}}>
            {e.date}
            {Number(e.date.substr(11, 2)) > 11 ? ' PM' : ' AM'}
            <button className="fa fa-trash-o deleteButton" onClick={() => makeDeleted(e.id)}></button>
            <button className="saveButton fa fa-save" onClick={() => makeUpdated(e.id, eTitle, eContent)}></button>
          </p>
          <button className="publishButton" onClick={() => makePublished(e.id, eTitle, eContent)}>Publish</button>
        </div>
      );
    })
      setEdit(editArray)
  }

  const fetchMoreData = () => {
 setTimeout(() => {
    setLength(e => e + 3)
 }, 1500);
  };

    return(
<div>
<input className="filterList" placeholder="Search..." onChange={(event) => setSearch(event.target.value)}/>
<div className="flex-container">
<div className="edit">
<p style={{fontSize:"25px", textAlign:"center"}}>Edit Manager</p>
{edit}
</div>
<p className="blank"></p>
<div className="published">
<p style={{fontSize:"25px", textAlign:"center"}}>Published Tutorials:</p>  
{published}</div>
</div>
<button onClick={() => deleteAll()}className="deleteAll">Delete all tutorials</button>
        <InfiniteScroll
          style={{overflow:'hidden'}}
          dataLength={length}
          next={fetchMoreData}
          hasMore={more}
          loader={<p style={{fontSize:"32px", color:"grey", textAlign:"center"}} >Loading . . .</p>}>
        </InfiniteScroll>
</div>
    );
}

export default Tutorials;