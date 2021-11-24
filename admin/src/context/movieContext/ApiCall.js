import axios from 'axios';
import { 
    getMoviesFailure,
    getMoviesStart, 
    getMoviesSuccess,
    deteleMoviesStart,
    deleteMoviesFailure,
    deleteMoviesSuccess
} from './MovieAction';

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (error) {
        dispatch(getMoviesFailure());
    }
};

export const deleteMovies = async (dispatch, id) => {
    dispatch(deteleMoviesStart());
    try {
        await axios.delete('/movies/' + id , {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteMoviesSuccess(id));
    } catch (error) {
        dispatch(deleteMoviesFailure());
    }
}