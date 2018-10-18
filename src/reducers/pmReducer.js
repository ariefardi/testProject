const initialState= {
    users : []
}

const pmReducer = (state = initialState, action)=> {
    if (action.type==='STORE_USER_TO_STATE') {
        return {
            ...state,
            users: action.payload
        }
    }
    else {
        return state
    }
}

export default pmReducer