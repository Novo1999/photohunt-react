import React, { useEffect, useState } from 'react';
import {
  DisplayPhotos,
  API_KEY,
  CONTENTS_PER_PAGE,
  PAGE_NUMBER,
} from '../Preload/Preload';

function Filter({ query, isFiltered, isSearched }) {
  const [filterResults, setFilterResults] = useState([]);

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
    <>{isFiltered && !isSearched && <DisplayPhotos photos={filterResults} />}</>
  );
}

export default Filter;
