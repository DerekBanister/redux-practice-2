//houses our actions

// this action creator gets called in the front-end
// takes an amount as argument
export const deposit = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}