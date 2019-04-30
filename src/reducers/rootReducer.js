import { combineReducers } from 'redux'
import searchReducer from './search/searchReducer'
import albumReducer from './album/albumReducer'

const rootReducer = combineReducers({
    search: searchReducer,
    album: albumReducer
})

export default rootReducer
