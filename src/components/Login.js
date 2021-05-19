import React, { Component } from "react";
import {Typography , Link, CircularProgress} from '@material-ui/core';
import AuthService from '../services/AuthService'
import '../index.css'
// import ReactDOM from "react-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    AuthService.login(this.state.username, this.state.password)
      .then(() => {
        this.props.history.push("/home");
        window.location.reload();
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  }
    render() {
        return (

            <form  onSubmit={this.handleLogin}>
                <h3 style={{"color":"White"}}>Sign In</h3>
<br/>
                <div className="form-group" style={{"color":"White"}} id="log">
		<label>UserName</label>
                <div style={{"padding-left":"300px"}}>             
                  <input type="username" style={{"width":"650px"}} className="form-control"  placeholder="Username" value={this.state.username}
                  onChange={this.onChangeUsername}/>
                    </div>
                <div/>
<br/>
                <div className="form-group">
		<label>Password</label>
                <div style={{"padding-left":"300px"}}>                  
                    <input type="password"  style={{"width":"650px"}} className="form-control" placeholder="Enter password" value={this.state.password}
                    onChange={this.onChangePassword} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button style={{"color":"black"}} disabled={this.state.loading}>
                            {this.state.loading && (
                              <CircularProgress size='10'/>
                            )}
                            Login
                          </button>

                {this.state.message && (
                    <div>
                      <Typography color='error' variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )}
                  <p className="forgot-password text-right">
                    Not registered <Link to={"signup"}>SignUp?</Link>
                </p>
              </div>
            </form>
        );
}
}
// ReactDOM.render( < Login /> , document.getElementById('app'));
