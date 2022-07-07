import React from "react";

function ListingsForm({handleSubmitListingsForm, descriptionInput, locationInput, imageUrlInput}) {

  return (
    <div style={{ textAlign: "center", padding: 10 }}>
      <form onSubmit={handleSubmitListingsForm}>
        <input
          type="text"
          id="addListingDescription"
          placeholder="description"
          onChange={descriptionInput}
        />
        <input
          type="text"
          id="addListingLocation"
          placeholder="location"
          onChange={locationInput}
        />
        <input
          type="url"
          id="addListingImageUrl"
          placeholder="image url"
          onChange={imageUrlInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ListingsForm;