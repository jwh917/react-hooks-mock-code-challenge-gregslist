import React, {useState} from "react";

  // {description, image, location}
function ListingCard({listing, handleStateDel}) {
  const {description, image, location} = listing
  const [isFav, setIsFav] = useState(false)

  function handleFav(){
    setIsFav((prevState) => !prevState) 
  }

  function handleDeleteClick() {
    // console.log(listing);
    // handleStateDel(listing)
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleStateDel(listing));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick={handleFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFav}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
