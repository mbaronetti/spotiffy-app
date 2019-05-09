import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js'
//import logo from "./logo.svg";
import { connect } from 'react-redux'
import { Modal, Button } from 'antd'
import { getHashParams , redirectToAuth} from './components/Helpers'
import Search from './components/Search/index';
import { showModal , getArtists , getNowPlaying} from './redux/actions/index'
import './App.css'

const spotifyApi = new Spotify();

const mapDispatchToProps = dispatch => {
    return {
        showModal: val => dispatch(showModal(val)),
        getArtists: name => dispatch(getArtists(name)),
        getNowPlaying: data => dispatch(getNowPlaying())
    }
}

const mapStateToProps = state => {
    return {
        modalVisible: state.modalVisible,
        artists: state.artists,
        nowPlaying: state.nowPlaying
    }
}
class App extends Component {
    constructor(props) {
        super(props)
        const params = getHashParams()
        this.state = {
            loggedIn: params.access_token ? true : false,
            accessToken : params.access_token ? params.access_token : "",
        }
        if (params.access_token) {
            spotifyApi.setAccessToken(params.access_token)
        }
    }

    componentDidMount() {
        const { loggedIn } = this.state
        if (loggedIn) {
          this.props.getNowPlaying();
          setInterval(this.props.getNowPlaying, 1000)
        }else{
          redirectToAuth(true);
        }
    }

    render() {
        const { modalVisible , showModal , artists , nowPlaying} = this.props
        const { loggedIn } = this.state
        if(loggedIn)
        return (
            <div className="App">
                <header className="App-header" />
                <Modal visible={modalVisible} onOk={() => showModal(false)}>
                    {nowPlaying &&
                        <div>
                            <div>Now playing {nowPlaying.artists[0].name}</div>
                            <img src={nowPlaying.album.images[0].url} />
                        </div>
                    }
                    <Search />
                    {artists && artists.map(artist => <p style={{display:'none'}}>{artist.name}</p>)}
                    <ul>{artists && artists.map(artist => <li><img src={artist.images[0] && artist.images[0].url} /></li>)}</ul>
                </Modal>
            </div>
        )
        return null;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
