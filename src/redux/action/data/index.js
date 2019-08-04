import { data } from "../../../data"


export const DATA = () => {
    return dispatch => {
        dispatch(fetch_data_start());
        try {
            dispatch(fetch_data_success(data))
        }
        catch (e) {
            dispatch(fetch_data_error(e))
        }
    }
};

const fetch_data_start = () => ({
   type: "FETCH_DATA_START"
});


const fetch_data_success = (payload) => ({
    type: "FETCH_DATA_SUCCESS",
    payload,
});

const fetch_data_error = (error) => ({
    type: "FETCH_DATA_ERROR",
    error,
});
