import React from "react";

const ReturnValue = (props) => {
  const pos = {
    color: "green",
  };
  const nev = {
    color: "red",
  };
  return (
    <>
      <div style={{ width: "25%" }} className="border border-gray m-1 p-1">
        <div className="row text-left">
          <div className="col-8 small">Unrealized P&L</div>
          <div className="col-2 pr-5 small font-weight-bold">
            <span>${props.sData.UnrealizedPL}</span>
          </div>
        </div>
        <div className="row text-left">
          <div className="col-7 small gtext">% Return</div>
          {0 > props.sData.Return ? (
            <i className="fas fa-arrow-down" />
          ) : (
            <i className="fas fa-arrow-up" />
          )}
          <div className="col-2 pr-5 small font-weight-bold">
            <span>{props.sData.Return}%</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* <input
              type="range"
              value={props.sData.Return}
              style={0 < props.sData.Return ? pos : nev}
              className="custom-range"
              id="range"
              min="-100"
              max="100"
            /> */}
            <div className="mt-2 return-val" >
                <span style={{background:"red", color:"transparent" ,paddingRight:0 < props.sData.Return && `${props.sData.Return}px` ,paddingLeft:0 > props.sData.Return && `${props.sData.Return}px`}}>ls</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnValue;
