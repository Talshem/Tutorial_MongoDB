import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tutorials(props) {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [list, setList] = useState([])
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
    const newArray = array.map((e) => {
      return (
        <div style={{ background:"red" }} className="tutorial" key={e.id}>
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
    });
    setList(newArray);
  };

    return(
<div>{list}</div>
    );
}

export default Tutorials;