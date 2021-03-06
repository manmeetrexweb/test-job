import React from "react";

import Share from "./Share";
import Company from "./Company";
import BasicInfo from "./BasicInfo";
import MarketValue from "./MarketValue";
import ReturnValue from "./ReturnValue";
import CardButton from "./CardButton";
import DonutChart from "./DonutChart";

const ItemCard = (props) => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-9">
            {props.sData && props.sData.map((data,i) => (
              <div
                className="row pl-2 p-1 mt-1 ml-3 border shadow"
                key={i}
              >
                <Share sData={data} />
                <Company sData={data} />
                <BasicInfo sData={data} />
                <MarketValue sData={data} />
                <ReturnValue sData={data} />
                <CardButton sData={data} />
              </div>
            ))}
          </div>
          <div className="col-3">
            <div className="float-left">
              <span className="small font-weight-bold">Portfolio</span>
            </div>
            <DonutChart sData={props.sData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
