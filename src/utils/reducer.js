const initialState = {
    data: [],
    loading: false,
    error: null,
    sendingData: false,
    sendDataError: null,
    clearingData: false,
    clearDataError: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_START':
            return { ...state, loading: true, error: null };

        case 'FETCH_DATA_SUCCESS':
            return { ...state, loading: false, data: action.payload, error: null };

        case 'FETCH_DATA_FAILURE':
            return { ...state, loading: false, error: action.payload };


        case 'SEND_DATA_START':
            return { ...state, sendingData: true, sendDataError: null };

        case 'SEND_DATA_SUCCESS':
            return { ...state, data: action.payload, sendingData: false };

        case 'SEND_DATA_FAILURE':
            return { ...state, sendingData: false, sendDataError: action.payload };


        case 'CLEAR_DATA_START':
            return { ...state, clearingData: true, clearDataError: null };

        case 'CLEAR_DATA_SUCCESS':
            return { ...state, data: [], clearingData: false };

        case 'CLEAR_DATA_FAILURE':
            return { ...state, clearingData: false, clearDataError: action.payload };

        default:
            return state;
    }
};

export default reducer;