const type = (state = "any", action) => {
    switch (action.type) {
        case 'SINGLE':
            return state = "single";
        case 'TWO_PART':
            return state = "twoPart";
        default:
            return state = "any";
    }
}
export default type;