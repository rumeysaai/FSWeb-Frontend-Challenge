import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const CREATE_OFFER = "CREATE_OFFER";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA })
    axios
        .get("https://mocki.io/v1/c0859428-2015-470b-a6a3-ea7c9a893e69")
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
            console.log(res.data);
        })
        .catch(err =>
            dispatch({ type: FETCH_ERROR, payload: err }))
}

export const createOffer = (endpoint)=> dispatch => {
    dispatch({ type: CREATE_OFFER })
    axios.post("https://reqres.in/api/orders", endpoint)
    .then(res=>{
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
        console.log(res.data);
    })
    .catch(err=>{
        console.log(err);
    })
}