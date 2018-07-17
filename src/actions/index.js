import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=RANDOM5678';

export const fetchPosts = () => dispatch => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
        .then(res=> {
            dispatch ({
                type: FETCH_POSTS,
                payload: res.data
            })
        })
        .catch(err=>console.log(err))
}

export const createPost = (values, history) => dispatch=> {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(res=> {
            //res.data is the post object
            console.log('res data is: ');
            console.log(res.data);
            dispatch ({
                type: CREATE_POST,
                payload: res.data
            });
        })
        .then(res=> {
            history.push('/');
        })
        .catch(err=> console.log(err));
}

export const fetchPost = (id) => dispatch => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(res=> {
            dispatch ({
                type: FETCH_POST,
                payload: res.data
            })
        })
        .catch(err=> console.log(err))
}

export const deletePost = (id, history) => dispatch => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(res=>{
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        })
        .then(res=> {
            history.push('/');
        })
        .catch(err=>console.log(err))
}