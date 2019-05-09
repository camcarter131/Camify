import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import { UIReducer } from '../reducers/UI_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    errors,
    UI: UIReducer
});

export default rootReducer;