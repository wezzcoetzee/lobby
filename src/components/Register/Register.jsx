
import React from 'react';
import './Register.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    }
  }

  updateConfirmPassword = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  updateFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };

  updateLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };

  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <section className="register__wrapper">      
        <div className="input__wrapper">
          <label>First name</label>
          <input type="text" onChange={this.updateFirstName} value={this.state.firstName} />
          <label>Last name</label>
          <input type="text" onChange={this.updateLastName} value={this.state.lastName} />
          <label>Email</label>
          <input type="email" onChange={this.updateEmail} value={this.state.email} />
          <label>Password</label>
          <input type="password" onChange={this.updatePassword} value={this.state.password} />
          <label>Confirm password</label>
          <input type="password" onChange={this.updateConfirmPassword} value={this.state.confirmPassword} />
        </div>
        <div className="button__wrapper">
          <button className="primary" onClick={() => this.props.handleModalClose('register')}>Register</button>
          <button className="secondary" onClick={() => this.props.handleModalClose('register')}>Cancel</button>
        </div>
      </section>
    )
  }
}

export default Register;