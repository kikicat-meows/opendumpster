import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

import DropdownNav from './dropdown_nav';

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(null, mDTP)(DropdownNav));