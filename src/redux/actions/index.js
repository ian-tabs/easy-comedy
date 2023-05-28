export const addCategories = (categories = []) => {
    return {
        payload: categories
    }
}

export const addFlags = (flags = []) => {
    return {
        payload: flags
    }
}

export const setJokeTypeSingle = () => {
    return {
        type: "SINGLE"
    }
}

export const setJokeTypeTwoPart = () => {
    return {
        type: "TWO_PART"
    }
}

export const setMainScreenToLanding = () => {
    return {
        type: "LANDING"
    }
}

export const setMainScreenToSuccess = () => {
    return {
        type: "SUCCESS"
    }
}

export const setMainScreenToFailed = () => {
    return {
        type: "FAILED"
    }
}


// export const signIn = () => {
//     return {
//         type: 'SIGN_IN'
//     }
// }