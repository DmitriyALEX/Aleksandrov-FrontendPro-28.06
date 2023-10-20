import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Albums() {

    const [albums, setAlbum] = React.useState([]);

    const { userId } = useParams();
    const regexp = /\d/g
    const userIdNumber = userId.match(regexp)[0];

    React.useEffect(() => {
                fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userIdNumber}`)
                .then(res => res.json()) 
                .then(data => setAlbum(data))
        }, [userId])

  return (
    <div>
        <>
        {
          albums.map((album, idx) => (
            <div key={idx}>
              <p>{album.title}</p>
              <p>{album.albumId}</p>
              <Link to={`/photos/albumId=${album.id}`}>
                <button>Photo</button>
              </Link>
            </div>
          ))               
         }
        </>
    </div>
  )
}
