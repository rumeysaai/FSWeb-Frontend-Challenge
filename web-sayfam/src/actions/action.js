import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA })
    axios
        .get("https://mocki.io/v1/fb0b485b-7c9c-42fe-b7c3-c9b1a311907c")
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
            console.log(res.data);
        })
        .catch(err =>
            dispatch({ type: FETCH_ERROR, payload: err }))
}
