import { API_KEY } from '../../utils/globals'
import axios from 'axios'

export const handleKeyWordOnKeyPress = e => {
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}

export const getResults = (keyword, e) => {
    e.preventDefault();

    let searchAPI = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + API_KEY },
        url: `https://api.spotify.com/v1/search?q=${keyword}&type=album`    
    }

    return axios(searchAPI)
        .then(response => ({ type: 'SEARCH_ARTISTS', payload: response.data.albums.items }))
        .catch(error => ({ type: 'SEARCH_ARTISTS', payload: error }))
}