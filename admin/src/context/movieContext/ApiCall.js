import axios from 'axios';
import { 
    getMoviesFailure,
    getMoviesStart, 
    getMoviesSuccess,
    deteleMoviesStart,
    deleteMoviesFailure,
    deleteMoviesSuccess,
    createMoviesStart,
    createMoviesFailure,
    createMoviesSuccess
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

export const createMovies = async (movie, dispatch) => {
    dispatch(createMoviesStart());
    try {
        const res = await axios.post("/movies", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createMoviesSuccess(res.data));
    } catch (err) {
        dispatch(createMoviesFailure());
    }
};

export const deleteMovies = async (id, dispatch) => {
    dispatch(deteleMoviesStart());
    try {
      await axios.delete("/movies/" + id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteMoviesSuccess(id));
    } catch (err) {
      dispatch(deleteMoviesFailure());
    }
};