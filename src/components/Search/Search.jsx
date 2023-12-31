import { useState, useEffect, React } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { API_KEY, CONTENTS_PER_PAGE, DisplayPhotos } from '../Preload/Preload';
import './search.css';
import FilterTab from '../FilterTab/FilterTab';
function Search({
  isSearched,
  onSetIsSearched,
  isFiltered,
  onSetIsFiltered,
  filterOptions,
  onSetQuery,
  onSetCurSelected,
  curSelected,
  onSetIsLoaded,
  currentPage,
}) {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchState, setSearchState] = useState('');

  function handleQuery(opt, i) {
    onSetQuery(() => opt);
    onSetIsFiltered(() => true);
    onSetIsSearched(() => false);
    onSetCurSelected(() => i);
  }
  function handleSearch(e) {
    e.preventDefault();
    setQuery(() => searchState);
    onSetIsSearched(() => true);
    onSetIsFiltered(() => false);
    onSetCurSelected(() => null);
    onSetIsLoaded(() => true);
    setSearchState(() => '');
  }
  function handleHome() {
    onSetIsFiltered(() => false);
    onSetIsSearched(() => false);
    onSetCurSelected(() => null);
  }
  useEffect(() => {
    const abortController = new AbortController();
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?page=${
            !isFiltered || isSearched ? currentPage : null
          }&per_page=${CONTENTS_PER_PAGE}&query=${query}`,
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
        onSetIsLoaded(() => false);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
    return abortController.abort();
  }, [query, onSetIsLoaded, currentPage, isFiltered, isSearched]);

  return (
    <>
      <SearchBar
        searchState={searchState}
        onSetSearchState={setSearchState}
        onHandleSearch={handleSearch}
        query={query}
        onSetQuery={setQuery}
      />
      <div className="filter-section">
        {(isFiltered || isSearched) && (
          <button onClick={handleHome} id="home">
            Home
          </button>
        )}
        {filterOptions.map((opt, i) => (
          <FilterTab
            curSelected={curSelected}
            onHandleQuery={handleQuery}
            key={i}
            opt={opt}
            index={i}
            onSetIsLoaded={onSetIsLoaded}
          />
        ))}
      </div>

      {isSearched && !isFiltered && <DisplayPhotos photos={searchResult} />}
    </>
  );
}

export default Search;
