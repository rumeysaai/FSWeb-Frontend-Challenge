import { FETCH_SUCCESS, FETCH_ERROR, GET_DATA, } from "../actions/action";

const initialState = {
    about: {},
    contact: {},
    profile: {},
    projects: [],
    skills: [],
    isLoading:false,
    error:null,
    messages:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return{
                ...state,
                isLoading:true
            };
        case FETCH_SUCCESS:
            return{
                ...state,
                ...action.payload,
                isLoading:false
            };
        case FETCH_ERROR:
            return{
                ...state,
                error: action.payload,
                isLoading:false
            }
        default:
            return state;
    }
}
export default reducer;