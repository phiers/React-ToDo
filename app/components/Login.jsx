import React from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import * as actions from 'actions';
import { githubProvider, googleProvider } from 'firebaseConfig';
/* eslint-enable */

const Login = (props) => {
  const onLogin = (evt) => {
    evt.preventDefault();
    const provider = evt.target.textContent === 'GitHub' ? githubProvider : googleProvider;
    props.dispatch(actions.startLogin(provider));
  };
  return (
    <div className="login">
      <h1 className="page-title">Todo App</h1>
      <div className="row">
        <div className="columns small-centered small-10 medium 6 large 4">
          <div className="callout callout-auth">
            <h3>Login</h3>
            <p>Choose Your Login Method Below</p>
            <div className="button-group">
              <button className="button" onClick={onLogin}>GitHub</button>
              <button className="button" onClick={onLogin}>Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(Login);
