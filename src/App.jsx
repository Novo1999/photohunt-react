import { useState } from 'react';
import { Header, Preload, Search, Filter, Pagination } from './components';
import './App.css';
function App() {
  const [isFiltered, setIsFiltered] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  return (
    <div>
      <Header />
      <Search isSearched={isSearched} onSetIsSearched={setIsSearched} />
      <Filter
        isSearched={isSearched}
        isFiltered={isFiltered}
        onSetIsFiltered={setIsFiltered}
        onSetIsSearched={setIsSearched}
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
