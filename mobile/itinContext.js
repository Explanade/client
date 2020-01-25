import React, { useReducer } from 'react'
import axios from 'axios'

export const ItinContext = React.createContext(null)

function reducer(state, action){
    switch(action.type){
        case 'FETCH_ITENERARY':
            return {
                ...state,
               itenerary : action.itin
            }
        default:
            return state
    }
}

const initialValue = {
    itenerary : []
}

export function ItinProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialValue)

    const konteks = {
        state, dispatch
    }

    return(
        <ItinContext.Provider value={konteks}>
            {children}
        </ItinContext.Provider>
    )
}