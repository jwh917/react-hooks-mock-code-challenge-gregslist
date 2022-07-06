import React from "react";
import Search from "./Search";

function Header({setSearchInput, handleSubmit}) {
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchInput={setSearchInput} handleSubmit={handleSubmit}/>
    </header>
  );
}

export default Header;
