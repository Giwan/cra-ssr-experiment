const initialState = {
    message: null
};

const SET_MESSAGE = "SET_MESSAGE";

export const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_MESSAGE:
            return {
                ...state,
                message: payload
            }
        default: return state;
    }
}

export const setMessage = txt => ({ type: SET_MESSAGE, payload: txt })