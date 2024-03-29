import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
  } from "../Action/types";
  const initialState = {
    loading: false,
    users: [],
    error: ""
  };
  
  export default function Reducer(state = initialState, action) {
    console.log("state", state);
    if (action.type === FETCH_USER_SUCCESS) {
      return {
        error: "",
        loading: false,
        users: action.payload
      };
    }
    if (action.type === FETCH_USER_FAILURE) {
      return {
        error: action.payload,
        loading: false,
        users: []
      };
    }
    return {...state};
  }
  