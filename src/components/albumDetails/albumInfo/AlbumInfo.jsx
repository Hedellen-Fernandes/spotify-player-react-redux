import React, {Component} from 'react'
import {connect } from 'react-redux'

class AlbumInfo extends Component {
    render = () => {
        const albumInfos = this.props.albumDetails 

        if(albumInfos != null) {
            return (
                <div id="album-info" className="album-info">
                    <img className="album-image" src={albumInfos.images[0].url} alt={albumInfos.name} />
                    <p className="album-title">{albumInfos.name}</p>
                    <p className="album-artist">{albumInfos.artists[0].name}</p>
                    <p className="album-counter">{albumInfos.tracks.total} Músicas</p>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = state => ({ albumDetails: state.album.albumDetails })

export default connect(mapStateToProps)(AlbumInfo)