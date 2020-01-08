import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: "signup"
})

const mDTP = (dispatch) => ({
    signup: (formUser) => dispatch(signup(formUser)),
    clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(SignUpForm);