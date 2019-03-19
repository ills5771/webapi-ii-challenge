import React from "react";

export default function Posts(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.contents}</h5>
        <p className="card-text">{props.title}</p>
        <button style={{ marginRight: "10%" }} className="btn btn-dark">
          Delete
        </button>
        <button className="btn btn-info">Update</button>
      </div>
    </div>
  );
}
