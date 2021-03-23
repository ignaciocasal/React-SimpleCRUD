import posts from "../apis/posts";
import {CREATE_POST, DELETE_POST, EDIT_POST, FETCH_POST, FETCH_POSTS, SIGN_IN, SIGN_OUT} from "./types";
import history from "../history";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createPost = (values) => async (dispatch) => {
    const response = await posts.post('/posts', values)
    dispatch({
        type: CREATE_POST,
        payload: response.data
    })
    history.push('/')
}

export const fetchPosts = () => async dispatch => {
    const response = await posts.get('/posts')
    console.log('res: ', response.data)
    dispatch({
        type: FETCH_POSTS,
        payload: response.data
    })
}

export const fetchPost = (id) => async dispatch => {
    const response = await posts.get(`/posts/${id}`)
    dispatch({
        type: FETCH_POST,
        payload: response.data
    })
}

export const editPost = (id, values) => async dispatch => {
    const response = await posts.patch(`/posts/${id}`, values)
    dispatch({
        type: EDIT_POST,
        payload: response.data
    })
    history.push('/')
}

export const deletePost = (id) => async dispatch => {
    await posts.delete(`/posts/${id}`)
    dispatch({
        type: DELETE_POST,
        payload: id
    })
    history.push('/')
}
