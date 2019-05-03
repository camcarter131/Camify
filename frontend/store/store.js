import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const _preloadedState = {
    entities: {
        users: { }
    },
    session: {
        id: null
    },
    errors: {
        session: []
    }
};

export const configureStore = (preloadedState = _preloadedState) => (

    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    )
);



