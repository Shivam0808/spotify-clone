import React, { useEffect, useState } from 'react'
import Login from './Login'
import Player from './player'
import { useDataLayerValue } from './DataLayer'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import './App.css'

const spotify = new SpotifyWebApi()

function App () {
  const [{ user, token }, dispatch] = useDataLayerValue()

// Run code based on a given condition
    useEffect(() => { 
      // code...
      const hash = getTokenFromUrl()
        window.location.hash = ''
        const _token = hash.access_token

        if (_token) {
             dispatch({
                type: 'SET_TOKEN',
                 token: _token
             })

             spotify.setAccessToken(_token)
             spotify.getMe().then((user) => {   
              dispatch({
                  type: 'SET_USER',
                  user: user
              })
          })

          spotify.getUserPlaylists().then((playlists) => {
            dispatch({
                type: 'SET_PLAYLISTS',
                playlists: playlists
            })
        })

        // 37i9dQZEVXcTgu3JJKFnxU
             spotify.getPlaylist('37i9dQZF1E8Nh0HErHLztk')
             .then(response => dispatch({
               type: 'SET_DISCOVER_WEEKLY',
               discover_weekly: response
             }))
         
           spotify.getMyTopArtists().then((response) =>
           dispatch({
             type: "SET_TOP_ARTISTS",
             top_artists: response,
           })
         );

         dispatch({
            type: "SET_SPOTIFY",
            spotify: spotify,
          });

            

           

          
    }
    }, [])

    return ( 
      // BEM Convention
    <div className='App'>
           {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
        </div>
    )
}

export default App
