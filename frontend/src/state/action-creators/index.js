export const updateCode = (code) => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_CODE',
            payload: code
        })
    }
}