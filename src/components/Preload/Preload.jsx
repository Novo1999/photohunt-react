/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './preload.css';

export const PAGE_NUMBER = 1;
export const CONTENTS_PER_PAGE = 40;
export const API_KEY =
  'ub7cbTPncCazUPCwTk9BpOy7xoH0KDaqmeiQpaQiWnEMojw7MRCrk4TU';

function Preload({ isFiltered, isSearched }) {
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
  return (
    isFiltered === false &&
    isSearched === false && <DisplayPhotos photos={photos} />
  );
}

export function DisplayPhotos({ photos }) {
  return (
    <div className="photohunt__image--gallery">
      {photos.map((photo, i) => (
        <img key={i} src={photo.src.portrait} alt="photo" />
      ))}
    </div>
  );
}

export default Preload;
