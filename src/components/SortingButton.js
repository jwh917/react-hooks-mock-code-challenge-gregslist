import React from "react";

function SortingButton({handleSort, isLocationSorted}) {

  return (
    <div style={{ textAlign: "center", padding: 10 }}>

      {isLocationSorted ? (
        <button type="sort" onClick={handleSort} style={{ color: "blue"}}>🔍 Location (A-Z)</button>
      ) : (
        <button type="sort" onClick={handleSort}>🔍 Location (A-Z)</button>
      )}

    </div>
  );
}

export default SortingButton;

