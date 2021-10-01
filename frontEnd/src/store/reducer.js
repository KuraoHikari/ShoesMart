import {
  DETAIL_SHOES,
  SHOES_DATA,
  SHOES_LOADING,
  ERR_CONDITION,
} from "./actionType";

const initialState = {
  dataShoes: [],
  isLoading: false,
  isError: null,
  shoesDetail: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOES_LOADING:
      const loading = {
        ...state,
        isLoading: action.payload,
      };
      return loading;
    case SHOES_DATA:
      const newData = {
        ...state,
        dataShoes: action.payload,
      };
      return newData;
    case DETAIL_SHOES: {
      const newDetail = {
        ...state,
        shoesDetail: action.payload,
      };
      return newDetail;
    }
    case ERR_CONDITION:
      const newError = {
        ...state,
        isError: action.payload,
      };
      return newError;
    default:
      return state;
  }
}
