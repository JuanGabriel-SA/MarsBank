export function newUser (payload) {
    return {
        type: 'NEW_USER',
        payload: payload
    }
}

export function editUser (payload) {
    return {
        type: 'EDIT_USER',
        payload: payload
    }
}

export function deleteUser(payload) {
    return {
        type: 'DELETE_USER',
        payload: payload
    }
}