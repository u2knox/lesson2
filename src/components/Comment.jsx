import React, { useEffect, useState } from 'react';

export default function Comment() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("use " + count);
    return () => {
      console.log("unuse " + count);
    }
  }, [count]);
  return (
    <div>
      Comment
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

// - При каждом обновлении

// useEffect(() => {
//   console.log("use");
//   return () => {
//     console.log("unuse");
//   }
// });

// - При добавлении и изъятии элемента со страницы

// useEffect(() => {
//   console.log("use");
//   return () => {
//     console.log("unuse");
//   }
// }, []);
