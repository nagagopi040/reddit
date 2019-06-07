export const actionTypes = {
    FETCH_SUBREDDITS: "FETCH_SUBREDDITS"
}

export const getReddits = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.FETCH_SUBREDDITS,
            payload: data
        })
    }
}