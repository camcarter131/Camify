import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    // debugger
    return ({
        errors: state.errors,
        formType: 'LOG IN'
    })
};

const mdp = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);