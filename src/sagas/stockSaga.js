import { call, put, takeEvery } from "redux-saga/effects";
import { setStockData } from "../redux/actions/stockAction";

function getApi() {
  return fetch("https://5fb24a7687ed490016ea8b5f.mockapi.io/api/vi/getData", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((e) => e);
}

function* getStockData(action) {
  try {
    const stock = yield call(getApi);
    yield put(setStockData(stock));
  } catch (err) {
    console.log(err);
  }
}

export function* waitForGetStockData() {
  yield takeEvery("GET_STOCK_DATA", getStockData);
}
