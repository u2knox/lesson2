import React, { useState, useEffect} from 'react';

export default function Post({ children, color, width = 100 }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
      .then(res => res.json())
      .then(json => setPhotos(json))
  }, []);

  return (
    <div style={{
      border: '2px solid ' + color,
      width: width + 'px'
    }}>
      Post
      <div>
        {photos.map(photo => <div>
          <img src={photo.url} alt={photo.title} />
          {photo.title}
        </div>)}
      </div>
      <div>{children}</div>
    </div>
  )
}