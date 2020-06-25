export const numReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        default:
            return state - 1;

    }
}