import React, { useState, useEffect, useRef } from 'react';
import './search.scss';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const searchInputRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        // Clicked outside the input
        document.getElementById("searchbtn").innerHTML = "&#128269;";
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const changeSearchIcon = () => {
    document.getElementById("searchbtn").innerHTML = "Search";
  };

  return (
    <div className='search'>
      <input
        type="text"
        placeholder="&#128269; Search..."  // HTML entity for a magnifying glass
        value={query}
        onChange={handleInputChange}
        onFocus={changeSearchIcon}
        onBlur={() => {}}
        ref={searchInputRef}
        style={{ border: 'none' }}
      />
      <button id='searchbtn' onClick={handleSearch} style={{ border: 'none' }}>
        &#128269;
      </button>
    </div>
  );
};

export default Search;
