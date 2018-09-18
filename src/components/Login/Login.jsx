
import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  updateEmail = (e) => {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  };

  updatePassword = (e) => {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <section>      
        <div>  
          <label>Email</label>
          <input type="email" onChange={this.updateEmail} value={this.state.email} />
          <label>Password</label>
          <input type="password" onChange={this.updatePassword} value={this.state.password} />
        </div>
        <div>
          <button className="primary" onClick={() => this.props.handleModalClose('login')}>Okay</button>
          <button className="secondary" onClick={() => this.props.handleModalClose('login')}>Cancel</button>
        </div>
      </section>
    )
  }
}

export default Login;