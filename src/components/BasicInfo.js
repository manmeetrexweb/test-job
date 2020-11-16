import React from "react";

const BasicInfo = (props) => {
  return (
    <>
      <div style={{ width: "14vw" }} className="border border-gray m-1 p-1">
        <div className="row small">
          <div className="col-6">
            <i className="fa fa-box" />
            <span className="gtext">Quantity</span>
          </div>
          <div className="col-2 font-weight-bold">
            <span>{props.sData.Quantity}</span>
          </div>
        </div>
        <div className="row small">
          <div className="col-6">
            <i className="fas fa-at" />
            <span className="gtext">Avg-Cost</span>
          </div>
          <div className="col-2 font-weight-bold">
            <span>${props.sData.AvgCost}</span>
          </div>
        </div>
        <div className="row small">
          <div className="col-6">
            <i className="fas fa-money-check-alt" />
            <span className="gtext">Invested</span>
          </div>
          <div className="col-2 font-weight-bold">
            <span>${props.sData.InvestedAmount}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
