import React from "react";
import Login from "./Login";
<script src ="./src/components/Header.js"></script>
function Header() {
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
        <a href="index.html" id ="logo"><img src="img/vv.png" alt="logo" height="100"/></a>
      </div>
     {/* Collect the nav links, forms, and other content for toggling */}
     
        <div className="collapse navbar-collapse clearfix" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a className="tag_menu_1 active_tab" href="index.html">HOMEPAGE</a>
          </li>
          <li>
            <a className="tag_menu" href="gallery.html">GALLERY</a>
          </li>
          <li><a  className="tag_menu" href="Login.html"> LOG IN</a> </li>
					<li><a className="tag_menu" href="signup.html">SIGN UP</a></li>
          <li class="dropdown">
						  <a class="tag_menu border_none" href="#" data-toggle="dropdown" role="button" aria-expanded="false">MORE<span class="caret"></span></a>
						  <ul class="dropdown-menu drop_2" role="menu">
							<li><a href="detail.html">EVENTS</a></li>		
							<li><a href="contact.html">CONTACT</a></li>
						  </ul>
						</li>


          <li className="dropdown"><a className="tag_menu" href="#" data-toggle="dropdown"><span className="fa fa-search" /></a>
            <ul className="dropdown-menu drop_1" style={{minWidth: 300}}>
              <li>
                <div className="row_1">
                  <div className="col-sm-12">
                    <form className="navbar-form navbar-left" role="search">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-btn">
                          <button className="btn btn-primary" type="button">
                            Search</button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      
    </div>
  </nav>
</section>
    );
}

export default Header;