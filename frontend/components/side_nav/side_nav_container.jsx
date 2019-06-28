import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNav from './side_nav';
import { logout } from '../../actions/session_actions';
// { session, entities: { users } }

const msp = (state, ownProps ) => {
    // debugger
    let whichTab = "library";
    if (ownProps.location.pathname.includes("collection")) whichTab = "library";
    else if (ownProps.location.pathname.includes("search")) whichTab = "search";
    else if (ownProps.location.pathname.includes("browse")) whichTab = "home";
    let sessionId = state.session.id;
    return {
        user: state.entities.users[sessionId],
        whichTab
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(msp, mdp)(SideNav));