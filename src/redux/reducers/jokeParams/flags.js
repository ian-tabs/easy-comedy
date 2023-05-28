const flags = (state = [], action) => {
    if (action.payload) return state = action.payload
    return state
}
export default flags;