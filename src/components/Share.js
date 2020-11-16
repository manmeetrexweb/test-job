import React from "react";

const Share = (props) => {
    console.log("props",props)
  return (
    <>
      <div className="row">
        <div className="col-2 align-self-center">
          <i className="fa fa-bars" />
        </div>
        <div className="col-3">
          <span className="sharetype">ITOT</span>
          <br />
          <span className="price">${props.sData.Price}</span>
        </div>
      </div>
    </>
  );
};

export default Share;