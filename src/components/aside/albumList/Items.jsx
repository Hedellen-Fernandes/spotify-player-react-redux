import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getAlbumSelected } from '../../../actions/album/albumActions'

class ListItem extends Component {
    generateItems = () => {
        if(this.props.listAlbums !== undefined && this.props.listAlbums !== null) {
            return this.props.listAlbums.map((album, index) => 
                <div className="list-item" data-album-id={album.id} key={index.toString()} onClick={this.props.getAlbumSelected.bind(this, album.id)}>
                    <img src={album.images[2].url} alt={album.name} className="list-image" data-album-id={album.id} />
                    <div className="list-description" data-album-id={album.id}>
                        <p className="list-title" data-album-id={album.id}>{album.name}</p>
                        <p className="list-subtitle" data-album-id={album.id}>{album.artists[0].name}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <h4>Aguardando busca...</h4>
            )
        }
    }

    render() {
        return this.generateItems()
    }
}    


const mapStateToProps = state => ({ listAlbums: state.search.listAlbums })
const mapDispatchToProps = dispatch => bindActionCreators({getAlbumSelected}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)