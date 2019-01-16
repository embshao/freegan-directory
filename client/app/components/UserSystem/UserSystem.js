import React, { Component } from 'react';
import 'whatwg-fetch';
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";

import { setInStorage, getFromStorage } from '../../utils/storage';

const userBox = {
  width: "400px",
  backgroundColor: "white",
  marginLeft: "auto",
  marginRight: "auto",
};

const userInnerBox = {
  textAlign: "center",
  padding: "10px",
};

const tab = {
  textDecoration: "none",
  padding: "5px",
  background: "#449B2E",
  color: "white",
  fontSize: "15px",
  textAlign: "center",
};


class UserSystem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpEmail: '',
      signUpPassword: '',
      signUpUsername: '',
    };
    //user system
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpUsername = this.onTextboxChangeSignUpUsername.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpUsername(event) {
    this.setState({
      signUpUsername: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onSignUp() {
    // Grabs values stored in state
    const {
      signUpEmail,
      signUpUsername,
      signUpPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signUpEmail,
        username: signUpUsername,
        password: signUpPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpUsername: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;
    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: '',
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  componentDidMount() {
    const obj = getFromStorage('freegan_directory_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpUsername,
      signUpPassword,
      signUpError,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if (!token) {
      return (
        <div style={userBox}>
          <p style={tab}>Login</p>
          <div style={userInnerBox}>
            {(signInError) ? (<p>{signInError}</p>) : (null)}
            <p>
            <TextField
              id="outlined-name"
              label="Email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
              margin="normal"
              variant="outlined"
              />


              {/* <input type="email" placeholder="Email" value={signInEmail} onChange={this.onTextboxChangeSignInEmail}/> */}
            </p>
            <p>
            <TextField
              id="outlined-name"
              label="password"
              value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}
              margin="normal"
              variant="outlined"
              />
              {/* <input type="password" placeholder="Password" value={signInPassword} onChange={this.onTextboxChangeSignInPassword}/> */}
            </p>
            <Button onClick={this.onSignIn}>Login</Button>
          </div>

          <p style={tab}>Sign Up</p>
          <div style={userInnerBox}>
            {(signUpError) ? (<p>{signUpError}</p>) : (null)}
            <p>
            <TextField
              id="outlined-name"
              label="Email"
              value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}
              margin="normal"
              variant="outlined"
              />
              {/* <input type="email" placeholder="Email" value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail}/> */}
            </p>
            <p>
            <TextField
              id="outlined-name"
              label="Password"
              value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}
              margin="normal"
              variant="outlined"
              />
              <input type="text" placeholder="Display Name" value={signUpUsername} onChange={this.onTextboxChangeSignUpUsername} />
            </p>
            
            <Button onClick={this.onSignUp}>Sign Up</Button>
          </div>

       </div>
      );
    }
    return (
      <div>
        <p>Account</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default UserSystem;
