/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function Tutorials(props) {
  const [edit, setEdit] = useState([]);
  const [published, setPublished] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const [length, setLength] = useState(5);
  const [more, setMore] = useState(true);
  const [loading, setLoading] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading((x) => `${x} .`);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(() => 'Loading');
    }, 800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchDataEdit = async () => {
      const { data } = await axios.get(`/api/tutorials/?title=${search}`);

      const editArray = data.filter((e) => !e.published);
      const publishArray = data.filter((e) => e.published);

      const sortedEdit = editArray.sort((a, b) => b.date.replace(/ /g, '').replace(/,/g, '').replace(/:/g, '').replace(/-/g, '')
    - a.date.replace(/ /g, '').replace(/,/g, '').replace(/:/g, '').replace(/-/g, ''));
      const sortedPublished = publishArray.sort((a, b) => b.date.replace(/ /g, '').replace(/,/g, '').replace(/:/g, '').replace(/-/g, '')
    - a.date.replace(/ /g, '').replace(/,/g, '').replace(/:/g, '').replace(/-/g, ''));

      if (length > editArray.length && length > publishArray.length) {
        setMore(false);
      } else {
        setMore(true);
      }
      editList(sortedEdit.splice(0, length));
      publishedList(sortedPublished.splice(0, length));
    }; fetchDataEdit();
  }, [count, search, length]);

  const makePublished = async (e, title, content) => {
    if (title === '' || content === '') {
      alert('Either title or content of the submitted tutorial is missing!');
      return;
    }
    await axios.put(`/api/tutorials/${e}/publish`, {
      title,
      content,
    });

    setCount((x) => x + 1);
  };

  const makeDeleted = async (e) => {
    await axios.delete(`/api/tutorials/${e}`);
    setCount((x) => x + 1);
  };

  const postData = async () => {
    if (props.count > 0) {
      try {
        await axios.post('/api/tutorials/', {
          title: props.title,
          content: props.content,
        })
          .then(() => {
            setCount((x) => x + 1);
          });
      } catch (error) {
        alert(error);
      }
    }
  };

  useEffect(() => {
    postData();
  }, [props.count]);

  const makeUpdated = async (id, title, content) => {
    await axios.put(`/api/tutorials/${id}`, {
      title,
      content,
    });
    setCount((x) => x + 1);
  };

  const deleteAll = async () => {
    await axios.delete('/api/tutorials');
    setCount((x) => x + 1);
  };

  const publishedList = (array) => {
    const publishedArray = array.map((e) => (
      <div className="tutorialPublished" key={e.id}>
        <p spellCheck="false" className="title">{e.title}</p>
        <p spellCheck="false" className="content">{e.content}</p>
        <p>
          {e.date}
          {Number(e.date.substr(11, 2)) > 11 ? ' PM' : ' AM'}
        </p>
        <button
          style={{
            background: 'rgb(214, 214, 214)', margin: '-35px 1% 0px 0%', position: 'relative', float: 'right',
          }}
          className="fa fa-trash-o deleteButton"
          onClick={() => makeDeleted(e.id)}
        />
      </div>
    ));
    setPublished(publishedArray);
  };

  const editList = (array) => {
    const editArray = array.map((e) => {
      let eTitle = e.title;
      let eContent = e.content;

      function editTitle(event) {
        eTitle = event.target.value;
      }

      function editContent(event) {
        eContent = event.target.value;
      }

      return (
        <div className="tutorialEdit" key={e.id}>
          <textarea spellCheck="false" required className="eTitle" defaultValue={eTitle} onChange={editTitle} />
          <p className="titleEdit">&#9998;</p>
          <textarea spellCheck="false" required rows="4" className="eContent" defaultValue={eContent} onChange={editContent} />
          <p className="contentEdit">&#9998;</p>
          <p style={{ marginTop: '-35px' }}>
            {e.date}
            {Number(e.date.substr(11, 2)) > 11 ? ' PM' : ' AM'}
            <button className="fa fa-trash-o deleteButton" onClick={() => makeDeleted(e.id)} />
            <button className="saveButton fa fa-save" onClick={() => makeUpdated(e.id, eTitle, eContent)} />
          </p>
          <button className="publishButton" onClick={() => makePublished(e.id, eTitle, eContent)}>Publish</button>
        </div>
      );
    });
    setEdit(editArray);
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      setLength((e) => e + 3);
    }, 1500);
  };

  return (
    <div>
      <input className="filterList" placeholder="Search..." onChange={(event) => setSearch(event.target.value)} />
      <div className="flex-container">
        <div className="edit">
          <p style={{ color: 'white', fontSize: '25px', textAlign: 'center' }}>Edit Manager</p>
          {edit}
        </div>
        <p className="blank" />
        <div className="published">
          <p style={{ fontSize: '25px', textAlign: 'center' }}>Published Tutorials:</p>
          {published}
        </div>
      </div>
      <button onClick={() => deleteAll()} className="deleteAll">Delete all tutorials</button>
      <InfiniteScroll
        style={{ overflow: 'hidden' }}
        dataLength={length}
        next={fetchMoreData}
        hasMore={more}
        loader={(
          <p style={{
            fontSize: '80px', color: 'grey', textAlign: 'center', fontStyle: 'italic',
          }}
          >
            {loading}
          </p>
        )}
      />
    </div>
  );
}

export default Tutorials;
