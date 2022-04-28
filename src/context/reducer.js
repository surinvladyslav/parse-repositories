export const actions = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_TO_CART: 'REMOVE_TO_CART',
    THEME: 'THEME',
    SAVE_REPOSITORIES: 'SAVE_REPOSITORIES',
    LOADER: 'LOADER'
}

export const reducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case actions.SAVE_REPOSITORIES:
            return {...state, repositories: [...payload]}
        case actions.ADD_TO_CART:
            localStorage.setItem('selectiveRepositories', JSON.stringify([...state.selectiveRepositories, payload].reverse()))
            return {...state, selectiveRepositories: [...state.selectiveRepositories, payload].reverse()}
        case actions.REMOVE_TO_CART:
            localStorage.setItem('selectiveRepositories', JSON.stringify([...state.selectiveRepositories.filter(c => c !== payload.id)]))
            return {...state, selectiveRepositories: state.selectiveRepositories.filter(c => c !== payload.id)}
        case actions.THEME:
            localStorage.setItem('theme', JSON.stringify(payload))
            return {...state, theme: payload}
        case actions.LOADER:
            return {...state, loader: payload}
        default:
            return state
    }
}