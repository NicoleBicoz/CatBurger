import {
    apiGetPost
} from '../lib/api';

const initialState = {
    posts: []
};

const GET_POSTS = 'GET_POSTS';

//actions
const getPosts = (posts) => ({ type: GET_POSTS, payload: posts });


export const fetchGetPost = () => {
    return (dispatch) => {
        apiGetPost()
            .then(res => {
                dispatch(getPosts(res));
            })
            .catch(res => {
                console.log(res);
            })
    }
};


export default (state = initialState, action) => {
    switch (action.type) {
        //en todos los casos regresamos un objeto nuevo en el cual incluimos todos las propiedades del objeto state con ...state
        case GET_POSTS:
            //cambiamos el valor de la propiedad post  
            return { ...state, posts: action.payload };
    }
}