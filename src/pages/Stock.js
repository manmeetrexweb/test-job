import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../components/ItemCard";
import { getStockData } from "../redux/actions/stockAction";

//
const Stock = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.stockRoot);
  //
  useEffect(() => {
    dispatch(getStockData());
  }, []);

  return (
    <div>
      <ItemCard sData={store.stock} />
    </div>
  );
};

export default Stock;