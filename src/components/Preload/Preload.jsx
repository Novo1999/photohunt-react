/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './preload.css';

const PAGE_NUMBER = 1;
const CONTENTS_PER_PAGE = 40;
const API_KEY = 'ub7cbTPncCazUPCwTk9BpOy7xoH0KDaqmeiQpaQiWnEMojw7MRCrk4TU';

function Preload() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/curated?page=${PAGE_NUMBER}&per_page=${CONTENTS_PER_PAGE}`,
          {
            headers: { Authorization: API_KEY },
          }
        );
        if (!response.ok) throw new Error('Server did not response');
        const data = await response.json();
        console.log(data);
        setPhotos(() => data.photos);
      } catch (err) {
        alert(err);
      }
    }
    fetchData();
  }, []);
  return <DisplayPhotos photos={photos} />;
}

function DisplayPhotos({ photos }) {
  return (
    <div className="photohunt__image--gallery">
      {photos.map((photo, i) => (
        <img key={i} src={photo.src.portrait} alt="photo" />
      ))}
    </div>
  );
}

export default Preload;
