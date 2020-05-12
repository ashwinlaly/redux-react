import * as actions from "../action/postActions";

const initialState = {
    posts : [],
    loading : false,
    hasErrors : false
}

export default function postReducer(state = initialState, action) {
    switch(action.type) {
        case actions.GET_POSTS:
            return {
                ...state, 
                loading : true
            }
        case actions.GET_POST_SUCCESS:
            return {
                posts : action.payload,
                loading : false,
                hasErrors : false
            }
        case actions.GET_POST_FAILURE:
            return {
                ...state,
                loading : false,
                hasErrors : true
            }
        default:
            return state;
    }
}