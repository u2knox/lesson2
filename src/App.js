import React, { useState, useEffect } from 'react';

import Post from './components/Post';
import Comment from './components/Comment';

export default function App() {
  const [color, setColor] = useState('teal');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("newval " + color + " " + visible)
    return () => {
      console.log("oldval " + color + " " + visible)
    }
  }, [color, visible]);

  return (<>
    <select value={color} onChange={(e) => setColor(e.target.value)}>
      <option value="teal">Teal</option>
      <option value="red">Red</option>
      <option value="yellow">Yellow</option>
      <option value="brown">Brown</option>
    </select>
    <Post color={color} width={0}>
      <button onClick={() => setVisible(!visible)}>Hide/show</button>
      {visible && <Comment />}
    </Post>
  </>)
}