/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import './preload.css';

export const PAGE_NUMBER = 1;
export const CONTENTS_PER_PAGE = 40;
export const API_KEY =
  'ub7cbTPncCazUPCwTk9BpOy7xoH0KDaqmeiQpaQiWnEMojw7MRCrk4TU';

function Preload({ isFiltered, isSearched, currentPage, isLoaded }) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/curated?page=${
            !isFiltered ? currentPage : null
          }&per_page=${CONTENTS_PER_PAGE}`,
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
  }, [currentPage]);
  return (
    isFiltered === false &&
    isSearched === false && (
      <DisplayPhotos photos={photos} isLoaded={isLoaded} />
    )
  );
}
export function DisplayPhotos({ photos, isLoaded }) {
  return isLoaded ? (
    <div className="loader">
      <Loading />
    </div>
  ) : (
    <div className="photohunt__image--gallery">
      {photos.map((photo, i) => (
        <img key={i} src={photo.src.tiny} alt="photo" />
      ))}
    </div>
  );
}

export default Preload;
