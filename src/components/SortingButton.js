import React from "react";

function SortingButton({handleSort}) {

  return (
    <div style={{ textAlign: "center", padding: 10 }}>
      <button type="sort" onClick={handleSort}>🔍 Location (A-Z)</button>
    </div>
  );
}

export default SortingButton;