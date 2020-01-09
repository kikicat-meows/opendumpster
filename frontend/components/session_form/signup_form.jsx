import React from 'react';
import { Link } from 'react-router-dom';


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fname: '',
            lname: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    componentDidMount() {
        this.props.clearErrors();
        window.scrollTo(0, 0);
    };

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        setTimeout(() => (
            this.props.signup(user)
                .then(() => this.props.history.goBack())
        ), 0);
    }

    closeModal(e) {
        e.preventDefault();
        if (e.target === e.currentTarget) {
            this.props.history.goBack();
        }
    }

    renderErrors() {
        return (
            <ul className="session-errors">
                {
                    this.props.errors.map((err, i) =>(
                        <li key={`err-${i}`}>{err}</li>
                    ))
                }
            </ul>
        )
    };

    render() {
        return (
            <div className='signup-modal-container' onClick={this.closeModal}>
                <strong className='form-close-x' onClick={() => this.props.history.goBack()}>&times;</strong>
                <div className='signup-modal-content'>
                    <h2>Welcome to OpenDumpster!</h2>
                    <hr />
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit} className='signup-form'>
                        <input
                            className="signup-form-field"
                            type="text"
                            placeholder="First Name*"
                            value={this.state.fname}
                            onChange={this.update('fname')}
                            required
                        />
                        <input
                            className="signup-form-field"
                            type="text"
                            placeholder="Last Name*"
                            value={this.state.lname}
                            onChange={this.update('lname')}
                            required
                        />
                        <input
                            className="signup-form-field"
                            type="text"
                            placeholder="Enter email*"
                            value={this.state.email}
                            onChange={this.update('email')}
                            required
                        />
                        <input
                            className="signup-form-field"
                            type="password"
                            placeholder="Enter password*"
                            value={this.state.password}
                            onChange={this.update('password')}
                            required
                        />
                        <button className="signup-form-button" onClick={this.handleSubmit}>
                            Create Account
                        </button>
                    </form>
                    <hr />
                    <p>By creating an account you agree to the OpenDumpster Terms of Use and Privacy Policy.</p>
                </div>
            </div>

        );
    }
};

export default SignUpForm;