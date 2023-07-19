import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwqEWBMBuxVTTEWSzgekY1g08G1XD2fauTUlfkzAYsTcyQit2T1rM8L4FbpwEtrMi98oA/exec?api=display-record&serviceId=summer-dev-test', {
      method: 'GET'})
      .then(res => res.json())
      .then(({ data }) => {
        setPhotoList(data);
      });
  }, []);

  return (
    <div className="App">
        {
          !!photoList.length && photoList.map(({
            comment,
            imageId,
            photoUrl,
          }) => {
            return (
              <img
                alt={comment}
                key={imageId}
                src={photoUrl}
                width={300}
              />)
          })
        }
    </div>
  );
}

export default App;
