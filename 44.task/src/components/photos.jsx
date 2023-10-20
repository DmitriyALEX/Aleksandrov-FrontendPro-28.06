import React from 'react';
import { useParams } from 'react-router-dom';

const Photos = () => {

    const [photos, setPhotos] = React.useState([])

    const { albumId } = useParams()
    const regexp = /\d/g
    const albumIdNumber = albumId.match(regexp)[0]

    React.useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumIdNumber}`)
      .then(res => res.json()) 
      .then(data => setPhotos(data))
    }, [albumId])

  return (
    <div>
      <> 
        {
          photos.map((photo, i) => (
            <div key={i}>
              <p>
                <img src={photo.url}
                  alt={photo.title}
                /></p> 
            </div>
          ))
        }
      </>
    </div>
  )
}

export default Photos
