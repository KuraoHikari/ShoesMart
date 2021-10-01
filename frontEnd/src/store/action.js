import {
  DETAIL_SHOES,
  SHOES_DATA,
  SHOES_LOADING,
  ERR_CONDITION,
} from "./actionType";
import axios from "axios";

function setIsLoading(payload) {
  return {
    type: SHOES_LOADING,
    payload,
  };
}
function setShoesData(payload) {
  return {
    type: SHOES_DATA,
    payload,
  };
}
function setDetailShoes(payload) {
  return {
    type: DETAIL_SHOES,
    payload,
  };
}
function setISError(payload) {
  return {
    type: ERR_CONDITION,
    payload,
  };
}
export function fetchShoes(limit) {
  return function (dispatch, getState) {
    axios({
      method: "get",
      url: `http://localhost:3000/product?_page=1&_limit=${limit}`,
    }).then(({ data }) => {
      // console.log(+result[0].price);
      dispatch(setShoesData(data));
    });
  };
}
export function fetchShoesCatalog(color, price, sizeShoes) {
  return function (dispatch, getState) {
    axios({
      method: "get",
      url: "http://localhost:3000/product",
    }).then(({ data }) => {
      let result = [];
      data.forEach((el) => {
        if (el.total_stock > 0 && +el.price < price) {
          // result.push(el);
          if (el.colors[0].name === color && color !== "all") {
            if (sizeShoes === "all") {
              result.push(el);
            } else {
              el.variants[0].sizes.forEach((size) => {
                if (size.size === sizeShoes && size.stock > 0) {
                  result.push(el);
                }
              });
            }
          } else if (color === "all") {
            if (sizeShoes === "all") {
              result.push(el);
            } else {
              el.variants[0].sizes.forEach((size) => {
                if (size.size === sizeShoes && size.stock > 0) {
                  result.push(el);
                }
              });
            }
          }
        }
      });
      // console.log(+result[0].price);
      console.log(result);
      dispatch(setShoesData(result));
    });
  };
}
export function fetchShoesData(id) {
  return function (dispatch, getState) {
    axios({
      method: "get",
      url: `http://localhost:3000/product/${id}`,
    }).then(({ data }) => {
      // console.log(+result[0].price);
      dispatch(setDetailShoes(data));
    });
  };
}
