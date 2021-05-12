// var Detail = React.createClass({
// 	render: function() {
// 	  return (
// 		<div>
// 		  <meta charSet="utf-8" />
// 		  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
// 		  <meta name="viewport" content="width=device-width, initial-scale=1" />
// 		  <title>Creative Tales</title>
// 		  <link href="css/bootstrap.min.css" rel="stylesheet" />
// 		  <link href="css/style.css" rel="stylesheet" />
// 		  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
// 		  <link href="https://fonts.googleapis.com/css?family=Aladin" rel="stylesheet" />
// 		  <section id="header" className="clearfix">
// 			<nav className="navbar navbar-default">
// 			  <div className="container clearfix">
// 				{/* Brand and toggle get grouped for better mobile display */}
// 				<div className="navbar-header clearfix page-scroll">
// 				  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
// 					<span className="sr-only">Toggle navigation</span>
// 					<span className="icon-bar" />
// 					<span className="icon-bar" />
// 					<span className="icon-bar" />
// 				  </button>
// 				  <a href="index.html" id="logo"><img src="img/12.png" height={100} /></a>
// 				</div>
// 				{/* Collect the nav links, forms, and other content for toggling */}
// 				<div className="collapse navbar-collapse clearfix" id="bs-example-navbar-collapse-1">
// 				  <ul className="nav navbar-nav navbar-right">
// 					<li>
// 					  <a className="tag_menu" href="index.html">HOMEPAGE</a>
// 					</li>
// 					<li>
// 					  <a className="tag_menu_1 active_tab" href="gallery.html">GALLERY</a>
// 					</li>
// 					<li>
// 					  <a className="tag_menu" href="login.js">LOG IN</a>
// 					</li>
// 					<li>
// 					  <a className="tag_menu" href="signup.html">SIGN UP</a>
// 					</li>
// 					<li className="dropdown">
// 					  <a className="tag_menu border_none" href="#" data-toggle="dropdown" role="button" aria-expanded="false">MORE<span className="caret" /></a>
// 					  <ul className="dropdown-menu drop_2" role="menu">
// 						<li><a href="detail.html">EVENTS</a></li>
// 						{/* <li><a href="gallery.html">GALLERY</a></li> */}
// 						<li><a href="contact.html">CONTACT</a></li>
// 					  </ul>
// 					</li>
// 					<li className="dropdown"><a className="tag_menu" href="#" data-toggle="dropdown"><span className="fa fa-search" /></a>
// 					  <ul className="dropdown-menu drop_1" style={{minWidth: '300px'}}>
// 						<li>
// 						  <div className="row_1">
// 							<div className="col-sm-12">
// 							  <form className="navbar-form navbar-left" role="search">
// 								<div className="input-group">
// 								  <input type="text" className="form-control" placeholder="Search" />
// 								  <span className="input-group-btn">
// 									<button className="btn btn-primary" type="button">
// 									  Search</button>
// 								  </span>
// 								</div>
// 							  </form>
// 							</div>
// 						  </div>
// 						</li>
// 					  </ul>
// 					</li>
// 				  </ul>
// 				</div>
// 				{/* /.navbar-collapse */}
// 			  </div>
// 			  {/* /.container-fluid */}
// 			</nav>
// 		  </section>
// 		  <section id="exhibition">
// 			<div className="container">
// 			  <div className="row">
// 				<div className="col-sm-12">
// 				  <div className="exhibition clearfix">
// 					<div className="exhibition_1 clearfix">
// 					  <h1 className="text-center">EVENTS DETAIL</h1>
// 					</div>
// 					<div className="exhibition_2 border_none_1 clearfix">
// 					  <div className="col-sm-12 space_all">
// 						<div className="exhibition_2_right pdt">
// 						  <h2><a href="#">Virtual Exhibition: Creative Tales</a></h2>
// 						  <h4>October 1 – October 7, 2021</h4><br />
// 						  <img src="img/event.jpg" alt="abc" className="iw" />
// 						</div>
// 					  </div>
// 					</div>
// 					<div className="exhibition_3 clearfix">
// 					  <div className="exhibition_3_inner clearfix">
// 						<h2>NEXT EVENTS</h2>
// 					  </div>
// 					  <div className="exhibition_3_inner_1 clearfix">
// 						<div className="col-sm-4 space_left">
// 						  <div className="exhibition_3_inner_1_inner">
// 							<div className="grid clearfix exhibition_3_inner_1_inner_image">
// 							  <figure className="effect-marley">
// 								<img src="img/aa.jpg" alt="img12" />
// 								<figcaption>
// 								  <h2>Creative <span>Tales</span></h2>
// 								  <p>Art Contests</p>
// 								  {/* <a href="#">View more</a>			 */}
// 								</figcaption>			
// 							  </figure>
// 							</div>
// 							<div className="exhibition_3_inner_last clearfix">
// 							  <h3><a href="#">Online Art Contests For Kids</a></h3>
// 							  <h4>October 20 - October 31, 2021</h4>
// 							  {/* <h5 class="text-right"><a href="#">Read More</a></h5> */}
// 							</div>
// 						  </div>
// 						</div>
// 						<div className="col-sm-4 space_left">
// 						  <div className="exhibition_3_inner_1_inner">
// 							<div className="grid clearfix exhibition_3_inner_1_inner_image">
// 							  <figure className="effect-marley">
// 								<img src="img/a.jpg" alt="img12" />
// 								<figcaption>
// 								  <h2>Creative <span>Tales</span></h2>
// 								  <p>Art Contests</p>
// 								  {/* <a href="#">View more</a>			 */}
// 								</figcaption>			
// 							  </figure>
// 							</div>
// 							<div className="exhibition_3_inner_last clearfix">
// 							  <h3><a href="#">Online Art Contests For Adults</a></h3>
// 							  <h4>November 21 - November 30, 2021</h4>
// 							  {/* <h5 class="text-right"><a href="#">Read More</a></h5> */}
// 							</div>
// 						  </div>
// 						</div>
// 						<div className="col-sm-4 space_left">
// 						  <div className="exhibition_3_inner_1_inner">
// 							<div className="grid clearfix exhibition_3_inner_1_inner_image">
// 							  <figure className="effect-marley">
// 								<img src="img/cont3.jpeg" alt="img12" />
// 								<figcaption>
// 								  <h2>Creative<span>Tales</span></h2>
// 								  <p>World Art Day Celebration</p>
// 								  {/* <a href="#">View more</a>				 */}
// 								</figcaption>			
// 							  </figure>
// 							</div>
// 							<div className="exhibition_3_inner_last clearfix">
// 							  <h3><a href="#">World Art Day Celebration</a></h3>
// 							  <h4>April 15, 2022</h4>
// 							  {/* <h5 class="text-right"><a href="#">Read More</a></h5> */}
// 							</div>
// 						  </div>
// 						</div>
// 					  </div>
// 					  {/* <div class="exhibition_3_inner_1 clearfix">
// 			<div class="col-sm-4 space_left">
// 			 <div class="exhibition_3_inner_1_inner">
// 			   <div class="grid clearfix exhibition_3_inner_1_inner_image">
// 					  <figure class="effect-marley">
// 						  <img src="img/44.jpg" alt="img12">
// 						  <figcaption>
// 							  <h2>Creative<span>Tales</span></h2>
// 							  <p>Fusce nec tellus sed augue semper porta.</p>
// 						  <a href="#">View more</a>	 
// 										  </figcaption>			
// 			</figure>
// 		</div>
// 			  <div class="exhibition_3_inner_last clearfix">
// 				<h3><a href="#">Fusce nec tellus sed augue semper porta Mauris massa</a></h3>
// 				<h4>May 12 - June 14, 2018</h4>
// 				<h5 class="text-right"><a href="#">Read More</a></h5>
// 			   </div>
// 			 </div>
// 			</div>
// 			<div class="col-sm-4 space_left">
// 			 <div class="exhibition_3_inner_1_inner">
// 			   <div class="grid clearfix exhibition_3_inner_1_inner_image">
// 					  <figure class="effect-marley">
// 						  <img src="img/45.jpg" alt="img12">
// 						  <figcaption>
// 							  <h2>Creative<span>Tales</span></h2>
// 							  <p>Fusce nec tellus sed augue semper porta.</p>
// 						  <a href="#">View more</a>	
// 										  </figcaption>			
// 			</figure>
// 		</div> 
// 				<div class="exhibition_3_inner_last clearfix">
// 				<h3><a href="#">Vestibulum lacinia arcu eget nulla aptent taciti</a></h3>
// 				<h4>May 12 - June 14, 2018</h4>
// 				<h5 class="text-right"><a href="#">Read More</a></h5>
// 			   </div>
// 			 </div>
// 			</div>
// 			<div class="col-sm-4 space_left">
// 			 <div class="exhibition_3_inner_1_inner">
// 			   <div class="grid clearfix exhibition_3_inner_1_inner_image">
// 					  <figure class="effect-marley">
// 						  <img src="img/46.jpg" alt="img12">
// 						  <figcaption>
// 							  <h2>Creative<span>Tales</span></h2>
// 							  <p>Fusce nec tellus sed augue semper porta.</p>
// 						  <a href="#">View more</a>						
// 					  </figcaption>			
// 			</figure>
// 		</div>
// 			   <div class="exhibition_3_inner_last clearfix">
// 				<h3><a href="#">Fusce nec tellus sed augue semper porta Mauris massa</a></h3>
// 				<h4>May 12 - June 14, 2018</h4>
// 				<h5 class="text-right"><a href="#">Read More</a></h5>
// 			   </div>
// 			 </div> 
// 			</div>
// 		   </div> */}
// 					</div> 
// 				  </div>
// 				</div>
// 			  </div>
// 			</div>
// 		  </section>
// 		  <section id="footer">
// 			<div className="container">
// 			  <div className="row">
// 				<div className="footer clearfix">
// 				  <div className="footer_1 clearfix">
// 					<div className="col-sm-3">
// 					  <div className="footer_1_left">
// 						<h3>Creative Tales</h3>
// 						<p>Sri Lanka</p>
// 					  </div>
// 					</div>
// 					<div className="col-sm-6">
// 					  <div className="footer_3 clearfix">
// 						<p>  © 2021 Creative Tales. All Rights Reserved </p>
// 					  </div>
// 					</div>
// 					<div className="col-sm-3">
// 					  <div className="footer_1_right pull-right">
// 						<h1>CT <span>Creative Tales</span></h1>
// 					  </div>
// 					</div>
// 				  </div>
// 				  <div className="footer_2 clearfix">
// 					<div className="col-sm-7">
// 					  <div className="footer_2_left">
// 						<a href="#">Sign Up For Headlines</a>
// 						<a href="#">Customer Detail</a>
// 						<a href="#">Connect With Us</a>
// 						<a href="#">Media</a>
// 						<a href="#">Work</a>
// 						<a className="border_none_1" href="#">Policy</a>
// 					  </div>
// 					</div>
// 					<div className="col-sm-5">
// 					  <div className="footer_2_right pull-right">
// 						<ul className="social-network social-circle">
// 						  <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss" /></a></li>
// 						  <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></a></li>
// 						  <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter" /></a></li>
// 						  <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus" /></a></li>
// 						  <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
// 						</ul>
// 					  </div>
// 					</div>
// 				  </div>
// 				</div>
// 			  </div>
// 			</div>
// 		  </section>
// 		  <div id="toTop" className="btn btn-info" style={{display: 'block', background: '#e02626', borderColor: '#e02626'}}><span className="fa fa-chevron-up" /></div>
// 		</div>
// 	  );
// 	}
//   });