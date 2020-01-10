import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

import { openModal, closeModal } from '../../actions/modal_actions';

// need to write an action to removeErrors

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: "login"
});

const mDTP = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(LoginForm);