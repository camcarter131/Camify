import { connect } from 'react-redux';
import WebPlayer from './web_player';
import { logout } from '../../actions/session_actions';

const msp = (state, ownProps) => {
    let home_lib_search = ownProps.match.params.main;
    let userId = state.session.id;
    return ({
        user: state.entities.users[userId],
        home_lib_search
    })
};

const mdp = dispatch => {

    const onLogout = () => (
        logout()
    )
    return {
        logout: () => dispatch(logout()),
        onLogout
    }
};

export default connect(msp, mdp)(WebPlayer);
