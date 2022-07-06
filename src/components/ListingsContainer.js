import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleStateDel}) {
  const displayedListings = listings.map((listing) => {
    // console.log(listing)
    
    return (
    <ListingCard
    key={listing.id}
    listing={listing}
    handleStateDel={handleStateDel}
    // description={listing.description}
    // image={listing.image}
    // location={listing.location}
    />)
  })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {displayedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
