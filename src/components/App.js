import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listingsData) => setListings(listingsData));
  }, [searchInput]);

  function handleStateDel(deletedListing){
    // console.log(deletedListing)
    const updatedListing = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListing)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(!searchInput) return
    const updatedListing = listings.filter((listing) => (listing.description.toLowerCase().includes(searchInput.toLowerCase())));
    setListings(updatedListing)
  }

  return (
    <div className="app">
      <Header setSearchInput={setSearchInput} handleSubmit={handleSubmit}/>
      <ListingsContainer listings={listings} handleStateDel={handleStateDel}/>
    </div>
  );
}

export default App;
