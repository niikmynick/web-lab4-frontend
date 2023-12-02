export const fetchDataStart = () => ({
    type: 'FETCH_DATA_START',
});

export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error,
});

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataStart());

        fetch('http://localhost:8080/web-lab4-backend-1.0-SNAPSHOT/api/data/get')
            .then((response) => response.json())
            .then((data) => dispatch(fetchDataSuccess(data)))
            .catch((error) => dispatch(fetchDataFailure(error.message)));
    };
};


export const sendDataStart = () => ({
    type: 'SEND_DATA_START',
});

export const sendDataSuccess = (data) => ({
    type: 'SEND_DATA_SUCCESS',
    payload: data,
});

export const sendDataFailure = (error) => ({
    type: 'SEND_DATA_FAILURE',
    payload: error,
});


export const sendData = (x, y, r) => {
    return (dispatch) => {
        dispatch(sendDataStart());

        fetch('http://localhost:8080/web-lab4-backend-1.0-SNAPSHOT/api/data/add?x=' + x + '&y=' + y + '&r=' + r, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to send data');
                }
                dispatch(sendDataSuccess());
                dispatch(fetchData());
            })
            .catch((error) => dispatch(sendDataFailure(error.message)));
    };
};


export const clearDataStart = () => ({
    type: 'CLEAR_DATA_START',
});

export const clearDataSuccess = () => ({
    type: 'CLEAR_DATA_SUCCESS',
});

export const clearDataFailure = (error) => ({
    type: 'CLEAR_DATA_FAILURE',
    payload: error,
});

export const clearData = () => {
    return (dispatch) => {
        dispatch(clearDataStart());

        fetch('http://localhost:8080/web-lab4-backend-1.0-SNAPSHOT/api/data/clear', {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to clear data');
                }
                dispatch(clearDataSuccess());
                dispatch(fetchData());
            })
            .catch((error) => dispatch(clearDataFailure(error.message)));
    };
};