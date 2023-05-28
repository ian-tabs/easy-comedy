const mainScreen = (state = "landing", action) => {
    switch (action.type) {
        case 'LANDING':
            return state = "landing";
        case 'SUCCESS':
            return state = "success";
        case 'FAILED':
            return state = "failed";
        default:
            return state = "failed";
    }
}
export default mainScreen;