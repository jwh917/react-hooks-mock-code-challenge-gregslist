import React from "react";

function Search({setSearchInput, handleSubmit}) {

  function handleInput(e) {
    // e.preventDefault();
    // console.log(e.target.value);
    setSearchInput(e.target.value)
  }
  // console.log(searchInput)
  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={handleInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
