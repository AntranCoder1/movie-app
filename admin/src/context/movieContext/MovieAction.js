export const getMoviesStart = () => ({
    type: 'GET_MOVIE_START',
});

export const getMoviesSuccess = (movies) => ({
    type: 'GET_MOVIE_SUCCESS',
    payload: movies
});

export const getMoviesFailure = () => ({
    type: 'GET_MOVIE_FAILURE',
});

export const createMoviesStart = () => ({
    type: 'CREATE_MOVIE_START',
});

export const createMoviesSuccess = (movies) => ({
    type: 'CREATE_MOVIE_SUCCESS',
    payload: movies
});

export const createMoviesFailure = () => ({
    type: 'CREATE_MOVIE_FAILURE',
});

export const updateMoviesStart = () => ({
    type: 'UPDATE_MOVIE_START',
});

export const updateMoviesSuccess = (movies) => ({
    type: 'UPDATE_MOVIE_SUCCESS',
    payload: movies
});

export const updateMoviesFailure = () => ({
    type: 'UPDATE_MOVIE_FAILURE',
});

export const deteleMoviesStart = () => ({
    type: 'DELETE_MOVIE_START',
});

export const deleteMoviesSuccess = (id) => ({
    type: 'DELETE_MOVIE_SUCCESS',
    payload: id,
});

export const deleteMoviesFailure = () => ({
    type: 'DELETE_MOVIE_FAILURE',
});