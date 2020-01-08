import React from 'react';
import { Link } from 'react-router-dom';

// setup Demo button (and function) that defaults input values to state and logs in


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    };

    componentDidMount() {
        this.props.clearErrors();
        window.scrollTo(0, 0);
    };

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value});
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    };

    handleDemo(e) {
        e.preventDefault();
        this.setState({
            email: 'fsp_demo@gmail.com',
            password: 'password'
        });
        setTimeout(() => (
            this.props.login(this.state)
                // .then(() => this.props.history.goBack());
        ), 0)
        // this.props.login(this.state);
    };

    renderErrors() {
        return (
            <ul className="session-errors">
                {
                    this.props.errors.map((err, i) => (
                        <li key={`err-${i}`}>{err}</li>
                    ))
                }
            </ul>
        )
    };

    render () {
        return (
            <div className='login-form'>
                <h2>Please sign in</h2>
                <hr />
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="login-form-field"
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.update('email')}
                        required
                    />
                    <input
                        className="login-form-field"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        required
                    />
                    <button className='login-form-button'>
                        Sign In
                    </button>
                    <button className='login-form-button'
                            onClick={this.handleDemo}>
                        Demo
                    </button>
                </form>
                <hr />
                <h3>New to OpenTable?&nbsp;  
                    <span>
                        <Link to="/signup">Create an Account</Link>
                    </span>
                </h3>
                {/* <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p> */}
            </div>
        );
    }
};

export default LoginForm;