import axios from 'axios';
import { 
    createListsFailure,
    createListsSuccess,
    createListsStart,
    deleteListsFailure,
    deleteListsSuccess,
    deleteListStart,
    getListsFailure,
    getListsSuccess,
    getListStart
} from './ListAction';

export const getLists = async (dispatch) => {
    dispatch(getListStart());
    try {
        const res = await axios.get("/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch (err) {
        dispatch(getListsFailure());
    }
};

export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete("/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteListsSuccess(id));
    } catch (err) {
        dispatch(deleteListsFailure());
    }
};

export const createList = async (list, dispatch) => {
    dispatch(createListsStart());
    try {
        const res = await axios.post("/lists", list, {
            headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createListsSuccess(res.data));
    } catch (err) {
        dispatch(createListsFailure());
    }
};