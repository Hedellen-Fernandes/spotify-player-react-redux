/*===========REACT/REDUX IMPORTS+===========*/
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware ,createStore } from 'redux'
import { Provider } from 'react-redux'

/*================STYLES====================*/
import './styles/index.css'

/*==============MIDDLEWARES=================*/
import promise from 'redux-promise'

/*==============REDUCERS====================*/
import rootReducer from './reducers/rootReducer'

/*=================ASIDE====================*/
import Aside from './components/aside/Aside'
import Header from './components/aside/header/Header'
import Search from './components/aside/search/Search'

/*===============CONTAINER==================*/
import AlbumDetails from './components/albumDetails/AlbumDetails'
import AlbumInfo from './components/albumDetails/albumInfo/AlbumInfo'
import AlbumTracks from './components/albumDetails/albumTracks/AlbumTracks'

const root = document.getElementById('root')

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(rootReducer, devTools)

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <Aside>
                <Header />
                <Search />
            </Aside>
            <AlbumDetails>
                <AlbumInfo />
                <AlbumTracks />
            </AlbumDetails>
        </React.Fragment>
    </Provider>
, root)