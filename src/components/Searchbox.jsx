import React, { useState } from 'react';

const SearchBox = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('Kangra');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-box">
    <div id="boxcover">
    <form onSubmit={handleSearch}>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        id='searchbox'
      />
      <button type="submit">Search</button>
    </form>
    </div>
    </div>
  );
};

export default SearchBox;