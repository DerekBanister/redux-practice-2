//function that returns a state
const reducer = (state = 0, action) => {
    //deposit or withdraw
    switch (action.type) {
        case 'deposit':
            return state + action.payload;
        case 'withdraw':
            return state - action.payload;
        default:
            return state;
    }
};

export default reducer;