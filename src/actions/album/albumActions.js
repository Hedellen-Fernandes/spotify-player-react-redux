import { API_KEY } from '../../utils/globals'
import axios from 'axios'

export const getAlbumSelected = (albumId, e) => {

    let getAlbum = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + API_KEY },
        url: `https://api.spotify.com/v1/albums/${albumId}`    
    }

    return axios(getAlbum)
        .then(response => ({ type: 'GET_ALBUM_DETAILS', payload: response.data }))
        .catch(error => ({ type: 'GET_ALBUM_DETAILS', payload: error }))
}