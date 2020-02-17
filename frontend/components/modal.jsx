import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../actions/modal_actions';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import CancelReservationContainer from './reservations/cancel_reservation_container';
import DropdownNavContainer from './greeting/dropdown_nav_container';

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

    if (Array.isArray(modal)) {
        component = <CancelReservationContainer id={modal[1]} user_id={modal[2]}/>
    } else {
        switch (modal) {
        case "login":
            component = <LogInFormContainer />;
            break;
        case "signup":
            component = <SignUpFormContainer />;
            break;
        case 'dropdown':
            component = <DropdownNavContainer />;
            break;
        default:
            return null;
        }
    }

    let renderedComponent;

    if (modal === 'dropdown') {
        renderedComponent = 
            <div className="nav-modal-container" onClick={closeModal}>
                <div className="nav-modal-content" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
    } else {
        renderedComponent = 
            <div className='modal-container' onClick={closeModal}>
                <strong className='form-close-x' onClick={closeModal}>&times;</strong>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
    }

    return (
        <>
        {renderedComponent}
        </>
    )
}

export default connect(mSTP, mDTP)(Modal);