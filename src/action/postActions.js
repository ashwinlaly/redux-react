export const GET_POSTS = 'GET POSTS'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const getPosts = () => ({
    type : GET_POSTS
})

export const getPostSuccess = (posts) => ({
    type : GET_POST_SUCCESS,
    payload : posts
})

export const getPostFailure = () => ({
    type : GET_POST_FAILURE
})

export function fetchPosts() {
    return async dispatch => {
        dispatch(getPosts())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            
            dispatch(getPostSuccess(data))
        } catch(error) {
            dispatch(getPostFailure())
        }
    }
}