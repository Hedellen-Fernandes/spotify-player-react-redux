export default (state = '', action) => {
    
    switch(action.type) {
        case 'VALUE_CHANGED':
            return {...state, searchValue: action.payload}
        case 'SEARCH_ARTISTS':
            return {...state, listAlbums: action.payload}
        default:
            return state
    }
}