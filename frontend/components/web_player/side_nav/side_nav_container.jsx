import { connect } from 'react-redux';
import SideNav from './side_nav';
import { logout } from '../../../actions/session_actions';

const msp = ({ session, entities: { users } }) => ({
    user: users[session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(SideNav);