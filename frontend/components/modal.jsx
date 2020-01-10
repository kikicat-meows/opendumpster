import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../actions/modal_actions';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const mSTP = ({ui}) => ({
    modal: ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'login':
            component = <LogInFormContainer />;
            break;
        case 'signup':
            component = <SignUpFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-container' onClick={closeModal}>
            <strong className='form-close-x' onClick={closeModal}>&times;</strong>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>

    )
}

export default connect(mSTP, mDTP)(Modal);