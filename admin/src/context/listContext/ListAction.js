export const getListStart = () => ({
    type: 'GET_LISTS_START',
});

export const getListsSuccess = (lists) => ({
    type: 'GET_LISTS_SUCCESS',
    payload: lists
});

export const getListsFailure = () => ({
    type: 'GET_LISTS_FAILURE',
});

export const createListsStart = () => ({
    type: 'GET_LISTS_START',
});

export const createListsSuccess = (list) => ({
    type: 'CREATE_LISTS_SUCCESS',
    payload: list
});

export const createListsFailure = () => ({
    type: 'CREATE_LISTS_FAILURE',
});

export const updateListsStart = () => ({
    type: 'UPDATE_LISTS_START',
});

export const updateListsSuccess = (movie) =>({
    type: 'UPDATE_LISTS_SUCCESS',
    payload: movie
});

export const updateListsFailure = () => ({
    type: 'UPDATE_LISTS_FAILURE',
});

export const deleteListStart = () => ({
    type: 'DELETE_LISTS_START'
});

export const deleteListsSuccess = (id) => ({
    type: 'DELETE_LISTS_SUCCESS',
    payload: id
});

export const deleteListsFailure = () => ({
    type: 'DELETE_LISTS_FAILURE'
});