import React, { Component } from "react";
import AppRouter from './AppRouter'
import Admin from './Admin'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import UserService from "../services/UserService";

export default class BoardAdmin extends Component {

  constructor(props){
      super();
      this.state = {
          AnchorEl : null
      }
      console.log(localStorage.getItem('user'))
  }
  handleClick = (event) => {
      this.setState({
          AnchorEl  : event.currentTarget
      });
    };

  handleClose = () => {
      this.setState({
          AnchorEl  : null
      });
    };


    handleLogoutClose = () => {
      this.setState({
          AnchorEl  : null
      })
      localStorage.clear()}

  render() {
    return (
    <>

      {localStorage.getItem('roles') == "ROLE_ADMIN" ?(
      <Grid container spacing={1} style = {{fontFamily:"monospace"}}>
              <Grid item xs = {2}/>
              <Grid item xs = {8} style ={{margin : "5%"}}>
                  <Card style = {{backgroundColor:"#dde4e6"}}>
                      <Paper style = {{backgroundColor:"#dde4e6"}}>
                          <h1>Welcome to the Admin Board</h1>
                          <Grid container spacing={1} style ={{padding : 40}}>
                          <Grid item xs = {4}/>
                          <Grid item xs = {4} >
                              <Card style = {{backgroundColor:"#c3cacb"}}>
                                  <h3>Pending Deliveries</h3>
                                  <br/>
                                  <Button align = "right" href = "/pending">Yet To Deliver</Button>
                              </Card>
                          </Grid>
                          <Grid item xs = {4}/>
                          </Grid>
                          <Grid container spacing={1} style ={{padding : 40}}>
                          <Grid item xs = {1}/>
                          <Grid item xs = {4} >
                              <Card style = {{backgroundColor:"#c3cacb"}}>
                                  <h3>Manage Users</h3>
                                  <br/>
                                  <Button align = "right" href = "/AddUser">Add user</Button>
                                  <Button align = "left" href = "/userDetails">View Users</Button>
                              </Card>
                          </Grid>
                          <Grid item xs = {2}/>
                          <Grid item xs = {4}>
                              <Card style = {{backgroundColor:"#c3cacb"}}>
                                  <h3>Manage ArtWorks</h3>
                                  <br/>
                                  <Button align = "right" href = "/sell">Add ArtWorks</Button>
                                  <Button align = "left" href = "/ArtDetails">View ArtWorks</Button>
                              </Card>
                          </Grid>
                          <Grid item xs = {1}/>
                          </Grid>

                          <Grid container spacing={1} style ={{padding : 40}}>
                          <Grid item xs = {1}/>
                          <Grid item xs = {4} >
                              <Card style = {{backgroundColor:"#c3cacb"}}>
                                  <h3>Upload Images & Events</h3>
                                  <br/>
                                  <Button align = "right" href = "/AddImg">Add Images</Button>
                                  <Button align = "left" href = "/AddEvent">Add Events</Button>
                              </Card>
                          </Grid>
                          <Grid item xs = {2}/>
                          </Grid>
                      </Paper>
                  </Card>
              </Grid>
              <Grid item xs = {2}/>
      </Grid>
      ):(
          <Grid container spacing = {1} >
            <Grid item xs={3}/>

            <Grid item xs={6} style={{marginTop:"12%",marginBottom:'12%'}}>
            <Card style = {{backgroundColor:"#8c8c8c"}} >
              <Paper style={{margin:10}}>
                <div style = {{padding:20}}>
                <Alert variant="outlined" severity="info">
                  You have to login with Admin Authorization — Login first!
                </Alert>
                </div>
              </Paper>
            </Card>
            </Grid>
            <Grid item xs={3}/>
            </Grid>
        )
        }
      </>
    );
  }
}
