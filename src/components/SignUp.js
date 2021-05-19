import React, { Component } from "react";
import {Typography} from '@material-ui/core'
import { Link } from "react-router-dom";
import Stripe from './Stripe'
import AuthService from '../services/AuthService'
import '../index.css'

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      image:"",
      successful: false,
      message: ""
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onFileChangeHandler = (e) => {
    e.preventDefault();
    var elements=[];
    console.log(e.target.files.length)
    let files = e.target.files
    console.log(files)
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      console.log(" Imagedata",e.target.result)
      elements.push(e.target.result)
      this.setState({
        image:elements[0]
      })
    }
    // console.log(elements)
  }


  handleRegister = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    AuthService.register(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.image
    ).then(
      response => {
        this.setState({
          message: response.data.message,
          successful: true
        });
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage
        });
      }
    );
  }
    render() {
        return (

<React.Fragment>
            <form onSubmit={this.handleRegister}>
                <div>
              {
                !this.state.successful && (
                    <div>
                        <h3 style={{"color":"White"}}>Register Now</h3>
				<br/>
			<label style={{"color":"White"}}>Username</label>
                        <div style={{"padding-left":"300px"}}className="form-group">
                            
                            <input type="text"  style={{"width":"650px"}} className="form-control" placeholder="Enter username" value={this.state.username}
                            onChange={this.onChangeUsername}/>
                        </div>
			<label style={{"color":"White"}}>Email address</label>
                        <div style={{"padding-left":"300px"}} className="form-group">
                            
                            <input type="email"  style={{"width":"650px"}} className="form-control" placeholder="Enter email" value={this.state.email}
                            onChange={this.onChangeEmail} />
                        </div>
			<label style={{"color":"White"}}>Password</label>
                        <div style={{"padding-left":"300px"}} className="form-group">
                            
                            <input type="password" style={{"width":"650px"}} className="form-control" placeholder="Enter password" value={this.state.password}
                            onChange={this.onChangePassword} />
                        </div>
 			
                        <Stripe/>
			<br/>
			<div style={{"padding-left":"300px"}}>
                        <button type="submit"  style={{"width":"650px",}} className="btn btn-primary btn-block">Sign Up</button>
			</div>
                    </div>
                    )
              }
                <p className="forgot-password text-right">
                    Already registered <Link to={"/signin"}>sign in?</Link>
                </p>

                {
                    this.state.message && (
                    <div>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )
                }
                </div>
            </form>
            </React.Fragment>
        )
    }
}
