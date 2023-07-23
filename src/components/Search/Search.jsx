import { useState, useEffect, React } from 'react';
import {
  API_KEY,
  PAGE_NUMBER,
  CONTENTS_PER_PAGE,
  DisplayPhotos,
} from '../Preload/Preload';
import './search.css';
function Search({ isSearched, onSetIsSearched }) {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const abortController = new AbortController();
  function handleSearch(e) {
    e.preventDefault();
    setQuery(() => e.target.value);
    onSetIsSearched(() => true);
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
          },
          {
            signal: abortController.signal,
          }
        );
        if (!query) return;
        if (!response.ok) throw new Error('Could not get desired result');
        const data = await response.json();
        setSearchResult(() => data.photos);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
    return abortController.abort();
  }, [query, abortController]);

  return (
    <>
      <div className="search search__container">
        <form onSubmit={e => handleSearch(e)}>
          <p>🔍</p>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            type="text"
            name="search"
            id="search"
          />
        </form>
      </div>
      {isSearched && <DisplayPhotos photos={searchResult} />}
    </>
  );
}

export default Search;
