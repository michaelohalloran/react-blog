import {FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST} from '../actions';
import _ from 'lodash';

const postsReducer = (state={}, action) => {
    switch(action.type) {
        case FETCH_POSTS: 
            console.log('in fetch posts, action.payload is', action.payload);
            // console.log(action.payload.data);
            return _.mapKeys(action.payload, 'id');
        case FETCH_POST:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case CREATE_POST:
            console.log('inside reducer, action.payload is', action.payload);
            //action.payload is the post object
            const {id} = action.payload
            console.log('inside reducer, action payload id is', id);
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        case DELETE_POST:
            let copy = Object.assign({}, state);
            delete copy[action.payload];
            return copy;
        default:
            return state
    }
    
}
export default postsReducer;