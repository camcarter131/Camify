import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';
import { logout } from '../frontend/actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
 
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }, //Session ID?
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store;
    window.logout = logout;
    window.dispatch = store.dispatch
    window.getState = store.getState;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});