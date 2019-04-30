export default (state = '', action) => {
    switch(action.type) {
        case 'GET_ALBUM_DETAILS':
            return {...state, albumDetails: action.payload}
        default:
            return state
    }
}