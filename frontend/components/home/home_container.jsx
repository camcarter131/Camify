import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';

const msp = state => {
    let userId = state.session.id;
    return ({
        user: state.entities.users[userId]
    })
};

const mdp = dispatch => ({
    logout: () => dispatch(logout)
});

export default connect(msp, mdp)(Home);
