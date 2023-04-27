import { legacy_createStore } from 'redux';
import reducers from './reducers/index'

export const store = legacy_createStore(
    reducers,
    {}
)