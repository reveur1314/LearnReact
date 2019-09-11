export default function (state = [], action) {
    switch (action.type) {
        case `RECEIVE_ALL_TODOS`:
            return action.todos

        default:
            return state;
    }
}