import { useState } from 'react';
import {
  Header,
  Preload,
  Search,
  Filter,
  Pagination,
  FilterTab,
} from './components';
import './App.css';
function App() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [query, setQuery] = useState('');
  const [curSelected, setCurSelected] = useState(null);
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
      />

      <Filter
        isSearched={isSearched}
        isFiltered={isFiltered}
        onSetIsFiltered={setIsFiltered}
        onSetIsSearched={setIsSearched}
        query={query}
      />

      <Preload
        isSearched={isSearched}
        isFiltered={isFiltered}
        onSetIsFiltered={setIsFiltered}
      />
      <Pagination />
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
