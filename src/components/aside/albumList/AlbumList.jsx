import React, { Component } from 'react'

import Items from './Items'

export default class AlbumList extends Component {
    render = () => {
        return (   
            <div id="album-list" className="list">
                <Items/>
            </div>
        )
    }
}