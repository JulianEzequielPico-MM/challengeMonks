import {createStore, applyMiddleware} from 'redux'   
import thunk from 'redux-thunk'
import reducers from './reducer'


export const initStore = () => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
    let initialState = {}
    return createStoreWithMiddleware(reducers, initialState)
}
