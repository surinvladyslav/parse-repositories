import React from "react";
import { actions, reducer } from "./reducer";

const Card = React.createContext();

const Context = ({children}) => {
    const selectiveRepositories = JSON.parse(localStorage.getItem('selectiveRepositories'))
    const theme = JSON.parse(localStorage.getItem('theme'))
    const [state, dispatch] = React.useReducer(reducer, {
        repositories: [],
        selectiveRepositories: !!selectiveRepositories ? selectiveRepositories.reverse() : [],
        loader: false,
        theme: !!theme ? theme : 'light'
    })

    React.useEffect(() => {
        dispatch({type: actions.LOADER, payload: true})
        async function getRepositories() {
            let realDate = new Date()
            realDate.setDate(realDate.getDate() - 7);
            let date = realDate.toISOString()
            const res = await fetch(`https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const data = await res.json()
            await dispatch({type: actions.SAVE_REPOSITORIES, payload: data.items})
            await dispatch({type: actions.LOADER, payload: false})
        }
        getRepositories()
    },[])

    return <Card.Provider value={{...state, dispatch}}>{children}</Card.Provider>
}

export default Context;

export const useContext = () => {
    return React.useContext(Card)
}