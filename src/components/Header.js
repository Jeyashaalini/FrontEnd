import React, {Component} from "react";
import Gallery from './Gallery'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import LibraryBooksTwoToneIcon from '@material-ui/icons/LibraryBooksTwoTone';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';

<script src ="./src/components/Header.js"></script>

class Header extends Component {
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

render(){
  return (
  <section id="header" className="clearfix">
  <nav className="navbar navbar-default">
    <div className="container clearfix">
      <div className="navbar-header clearfix page-scroll">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="home" id ="logo"><img src="img/vv.png" alt="logo" height="100"/></a>
      </div>
     {/* Collect the nav links, forms, and other content for toggling */}

        <div className="collapse navbar-collapse clearfix" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a className="tag_menu_1 active_tab" href="home">HOMEPAGE</a>
          </li>
          <li>
            <a className="tag_menu" href="gallery"> GALLERY</a>
          </li>
          <li class="dropdown">
						  <a class="tag_menu border_none" href="#" data-toggle="dropdown" role="button" aria-expanded="false">MORE<span class="caret"></span></a>
						  <ul class="dropdown-menu drop_2" role="menu">
							<li><a href="events">EVENTS</a></li>
							<li><a href="contact">CONTACT</a></li>
						  </ul>
						</li>

            {!localStorage.getItem('user') ? (  <>
                      <li><a className="tag_menu" href="signin">Login</a></li>
                      <li><a className="tag_menu" href="signup">SignUp</a></li>


                </>):
                (<>
<li class="tag_menu">
                    <Avatar size = 'small'  src={localStorage.getItem('image')} style = {{display : "inline-block",marginTop:20}}/>
                        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} >
                        <ArrowDropDownCircleIcon fontSize = "large" align="top"/>
                        </IconButton>
                        <Menu
                        id="simple-menu"
                        anchorEl={this.state.AnchorEl}
                        keepMounted
                        open={Boolean(this.state.AnchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}> <Button href = "/signup">Edit Profile </Button></MenuItem>
                        <MenuItem onClick={this.handleClose}> <Button href = "/sell">Sell Your Paintings</Button></MenuItem>
                        <MenuItem onClick={this.handleClose}> <Button href = "/buy">Buy Paintings</Button></MenuItem>
                        <MenuItem onClick={this.handleLogoutClose}> <Button href ='/signin'>Logout</Button></MenuItem>

                    </Menu>
</li>
                  
                </>)}
        </ul>
      </div>
    </div>
  </nav>
</section>
    );
} }
export default Header;
