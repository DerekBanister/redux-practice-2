//houses our actions

// this action creator gets called in the front-end
// takes an amount as argument
export const deposit = (amount) => {
    return {
        type: 'deposit',
        payload: amount
    }
}


export const withdraw = (amount) => {
    return {
        type: "withdraw",
        payload: amount
    }
}

