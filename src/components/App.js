import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import SortingButton from "./SortingButton";
import ListingsForm from "./ListingsForm";

//  TO FIX
// SORT TOGGLE


function App() {
  const [listings, setListings] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const [isLocationSorted, setIsLocationSorted] = useState(false)

  const [description, setDescription] = useState("")  
  const [location, setLocation] = useState("")
  const [image, setImage] = useState("")
  // const




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

  function handleSort() {
		setIsLocationSorted((prevState) => !prevState) 
    const sortedListings = [...listings].sort((listing1, listing2) => listing1.location.localeCompare(listing2.location, 'es', { sensitivity: 'base' }))

    if(!isLocationSorted){
      setListings(sortedListings)
    }
  }

  function descriptionInput(event){
    // console.log(event.target.value)
    setDescription(event.target.value)

  }


  function locationInput(event){
    // console.log(event.target.value)
    setLocation(event.target.value)

  }


  function imageUrlInput(event){
    // console.log(event.target.value)
    setImage(event.target.value)

  }



  function handleSubmitListingsForm(event){
    event.preventDefault()
    // console.log(description, location, image)
    const newListings = {
      description: description,
      image: image,
      location: location
    }
    // console.log(newListings)
    if(newListings.description === "" || newListings.location === "" || newListings.image === "" ) return

    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListings),
    })
      .then((r) => r.json())
      .then((newListingsData) => setListings([...listings, newListingsData]));

  }




 

  return (
    <div className="app">
      <Header setSearchInput={setSearchInput} handleSubmit={handleSubmit} handleSort={handleSort}/>
      <ListingsForm handleSubmitListingsForm={handleSubmitListingsForm} descriptionInput={descriptionInput} locationInput={locationInput} imageUrlInput={imageUrlInput}/>
      <SortingButton handleSort={handleSort}/>
      <ListingsContainer listings={listings} handleStateDel={handleStateDel}/>
    </div>
  );
}

export default App;
