import { useState } from 'react';
import { Header, Preload, Search, Filter, Pagination } from './components';
import './App.css';
function App() {
  const [isFiltered, setIsFiltered] = useState(false);
  return (
    <div>
      <Header />
      <Search />
      <Filter isFiltered={isFiltered} setIsFiltered={setIsFiltered} />
      <Preload isFiltered={isFiltered} setIsFiltered={setIsFiltered} />
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
