import { useState } from 'react';
import {
  Header,
  Preload,
  Search,
  Filter,
  Pagination,
  Loading,
} from './components';
import './App.css';
function App() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [query, setQuery] = useState('');
  const [curSelected, setCurSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const filterOptions = [
    'animal',
    'nature',
    'beauty',
    'sky',
    'ocean',
    'flower',
    'human',
    'car',
    'country',
    'space',
  ];
  return (
    <div>
      {/* <Loading /> */}
      <Header />
      <Search
        isSearched={isSearched}
        onSetIsSearched={setIsSearched}
        isFiltered={isFiltered}
        onSetIsFiltered={setIsFiltered}
        filterOptions={filterOptions}
        onSetQuery={setQuery}
        onSetCurSelected={setCurSelected}
        curSelected={curSelected}
        isLoaded={isLoaded}
        onSetIsLoaded={setIsLoaded}
        query={query}
      />

      <Filter
        isSearched={isSearched}
        isFiltered={isFiltered}
        onSetIsFiltered={setIsFiltered}
        onSetIsSearched={setIsSearched}
        query={query}
        isLoaded={isLoaded}
        onSetIsLoaded={setIsLoaded}
        currentPage={currentPage}
      />
      <Pagination onSetCurrentPage={setCurrentPage} />

      <Preload
        isSearched={isSearched}
        isFiltered={isFiltered}
        onSetIsFiltered={setIsFiltered}
        currentPage={currentPage}
        isLoaded={isLoaded}
      />
    </div>
  );
}

export default App;

/* 
User Stories
- User will see the page pre loaded with photos
- Pagination Feature
- User Will be able to search for photos
- Some Predefined categories 
*/
