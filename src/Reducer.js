import { findAllByDisplayValue } from "@testing-library/react";
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    
    // token: 'BQCmm8tQYm85ONtPi7ZwEvhlzJK45AKJ2YL3T_',
}

const reducer = (state, action) => {
console.log(action)

switch (action.type) {
    case 'SET_USER':
      return {
            ...state,
            user: action.user
        }
        case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
      case 'SET_PLAYLISTS':
        return {
          ...state,
          playlists: action.playlists
        }
      case 'SET_DISCOVER_WEEKLY':
        return {
          ...state,
          discover_weekly: action.discover_weekly
        }
  
      case 'SET_TOP_ARTISTS':
        return {
          ...state,
          top_artists: action.top_artists,
        }
            
            case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      }
      
        default:
            return state
}
}

export default reducer
