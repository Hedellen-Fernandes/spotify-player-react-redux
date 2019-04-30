import React, {Component} from 'react'
import { connect } from 'react-redux'

import { convertToHumanTime, playlistTrigger } from '../../../utils/utils'

class AlbumTracks extends Component {

    generateItems = albumList => {
        if(albumList != null) {
            return albumList.tracks.items.map((track, index) => 
                <div className="music" data-track-preview={track.preview_url} key={index.toString()} onClick={playlistTrigger}>
                    <p className="music-number">{track.track_number}</p>
                    <p className="music-title">{track.name}</p>
                    <p className="music-duration">{convertToHumanTime(track.duration_ms)}</p>
                </div>
            );
        } else {
            return <div></div>
        }
    }
    
    render() {
        return (
            <div id="album-tracks" className="album-musics">
                {this.generateItems(this.props.albumDetails)}
            </div>
        )
    }
}

const mapStateToProps = state => ({ albumDetails: state.album.albumDetails })

export default connect(mapStateToProps)(AlbumTracks)