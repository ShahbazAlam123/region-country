import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
  } from "./types";
  import axios from 'axios';

  export const fetchUsers = (region) =>async(dispatch)=>{
    console.log("region", region);

  //  return (dispatch) => {

      await axios.get(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => {
        console.log("response", response);
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errormsg = error.message;
        dispatch(fetchUsersFailure(errormsg));
      });
  };
//};

  export const fetchUsersSuccess = (users) => {
    return {
      type: FETCH_USER_SUCCESS,
      payload: users
    };
  };
  export const fetchUsersFailure = (error) => {
    return {
      type: FETCH_USER_FAILURE,
      payload: error
    };
  };
  