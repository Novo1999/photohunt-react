import React, { useEffect, useState } from 'react';
import {
  DisplayPhotos,
  API_KEY,
  CONTENTS_PER_PAGE,
  PAGE_NUMBER,
} from '../Preload/Preload';
import './filter.css';
const filterOptions = [
  'animal',
  'nature',
  'beauty',
  'sky',
  'ocean',
  'flower',
  'human',
  'car',
];
function Filter({ isFiltered, setIsFiltered }) {
  const [query, setQuery] = useState('');
  const [filterResults, setFilterResults] = useState([]);
  function handleQuery(opt) {
    setQuery(() => opt);
    setIsFiltered(() => true);
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?page=${PAGE_NUMBER}&per_page=${CONTENTS_PER_PAGE}&query=${query}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        if (!query) return;
        if (!response.ok) throw new Error('Could not get desired result');
        const data = await response.json();
        setFilterResults(() => data.photos);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [query]);

  return (
    <>
      <div className="filter">
        {isFiltered && (
          <button onClick={() => setIsFiltered(false)} id="home">
            HOME
          </button>
        )}

        {filterOptions.map((opt, i) => (
          <button onClick={() => handleQuery(opt)} key={i}>
            {opt.toUpperCase()}
          </button>
        ))}
      </div>
      {isFiltered && <DisplayPhotos photos={filterResults} />}
    </>
  );
}

export default Filter;
