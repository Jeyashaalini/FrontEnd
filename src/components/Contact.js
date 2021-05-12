import { render } from '@testing-library/react';
import React, {Component} from 'react';
import emailjs from 'emailjs-com';
import AuthService from '../services/AuthService'
<script src ="./src/components/Contact.js"></script>

export default class Contact extends Component {
	
	constructor(props) {
	  super(props);
  
	  this.state = {
		firstname: "",
		lastname: "",
		email:"",
		mobnumber:"",
		message: "",
		loading: false	
	  };

	  function sendEmail(e) {
		e.preventDefault();
		emailjs.sendForm('service_8ntgbph', 'template_fmfkm2j', e.target, 'user_pSjtaIFFYmaHYuZsujzcU')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
	  }
	}
	onChangeFirstname = (e) => {
	  this.setState({
		firstname: e.target.value
	  });
	}
  
	onChangeLastname = (e) => {
	  this.setState({
		lastname: e.target.value
	  });
	}

	onChangeEmail = (e) => {
		this.setState({
		  email: e.target.value
		});
	  }
  
	  onChangeMobnumber = (e) => {
		this.setState({
		  mobnumber: e.target.value
		});
	  }

	  onChangeMessage = (e) => {
		this.setState({
		  message: e.target.value
		});
	  }

	// handleContact = (e) => {
	//   e.preventDefault();
  
	//   this.setState({
	// 	message: "",
	// 	loading: true
	//   });
  
	//   AuthService.contact(
	// 	this.state.firstname,
	// 	this.state.lastname,
	// 	this.state.email,
	// 	this.state.mobnumber,
	// 	this.state.message
	//   ).then(
	// 	response => {
	// 	  this.setState({
	// 		message: response.data.message,
	// 		successful: true
	// 	  });
	// 	},
	// 	error => {
	// 	  const resMessage =
	// 		(error.response &&
	// 		  error.response.data &&
	// 		  error.response.data.message) ||
	// 		error.message ||
	// 		error.toString();
  
	// 	  this.setState({
	// 		successful: false,
	// 		message: resMessage
	// 	  });
	// 	}
	//   );
	// }


render() {
    return (
		<React.Fragment>
			<form onSubmit={this.sendEmail}>
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Creative Tales</title>
			<link href="css/bootstrap.min.css" rel="stylesheet" />
			<link href="css/style.css" rel="stylesheet" />
			<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
			<link href="https://fonts.googleapis.com/css?family=Aladin" rel="stylesheet" />

			<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />

			<link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />

			<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />

			<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />

			<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />

			<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />

			<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />

			<link rel="stylesheet" type="text/css" href="css/util.css" />
			<link rel="stylesheet" type="text/css" href="css/main.css" />
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
							<a href="index.html" id="logo"><img src="img/vv.png" height={100} /></a>
						</div>

						<div className="collapse navbar-collapse clearfix" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav navbar-right">
								<li>
									<a className="tag_menu" href="index.html">HOMEPAGE</a>
								</li>

								<li>
									<a className="tag_menu" href="gallery.html">GALLERY</a>
								</li>
								<li>
									<a className="tag_menu" href>LOG IN</a>
								</li>
								<li>
									<a className="tag_menu" href>SIGN UP</a>
								</li>
								<li className="dropdown">
									<a className="tag_menu border_none" href="#" data-toggle="dropdown" role="button" aria-expanded="false">MORE<span className="caret" /></a>
									<ul className="dropdown-menu drop_2" role="menu">
										<li><a href>EVENTS</a></li>

									
										<li><a href="contact.html">CONTACT</a></li>
									</ul>
								</li>
								<li className="dropdown">
									<a className="tag_menu" href="#" data-toggle="dropdown"><span className="fa fa-search" /></a>
									<ul className="dropdown-menu drop_1" style={{ minWidth: '300px' }}>
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




			<div className="container-contact100">
				<div className="wrap-contact100">
					<form className="contact100-form validate-form">
						<span className="contact100-form-title">
										Send Us A Message
						</span>
						<label className="label-input100" htmlFor="first-name">Tell us your name *</label>
						<div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
							<input id="first-name" className="input100" type="text" name="first-name" placeholder="First name" value={this.state.firstname}
                    onChange={this.onChangeFirstname} />
							<span className="focus-input100" />
						</div>
						<div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
							<input className="input100" type="text" name="last-name" placeholder="Last name" value={this.state.lastname}
                    onChange={this.onChangeLastname}  />
							<span className="focus-input100" />
						</div>
						<label className="label-input100" htmlFor="email">Enter your email *</label>
						<div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
							<input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com" value={this.state.email}
                    onChange={this.onChangeEmail}  />
							<span className="focus-input100" />
						</div>
						<label className="label-input100" htmlFor="phone">Enter phone number</label>
						<div className="wrap-input100">
							<input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +94 770000000" value={this.state.mobnumber}
                    onChange={this.onChangeMobnumber} />
							<span className="focus-input100" />
						</div>
						<label className="label-input100" htmlFor="message">Message *</label>
						<div className="wrap-input100 validate-input" data-validate="Message is required">
							<textarea id="message" className="input100" name="message" placeholder="Write us a message" value={this.state.message}
                    onChange={this.onChangeMessage}  defaultValue={""} />
							<span className="focus-input100" />
						</div>
						<div className="container-contact100-form-btn">
							<button onSubmit={this.sendEmail} type="submit" value="Send Message" className="contact100-form-btn"  >
								Send Message
							</button>
						</div>
					</form>
					<div className="contact100-more flex-col-c-m" style={{ backgroundImage: 'url("img/wal3.jpg")' }}>
					</div>
				</div>
			</div>
			<div id="dropDownSelect1" />
			{/* <section id="footer">
				<div className="container">
					<div className="row">
						<div className="footer clearfix">
							<div className="footer_1 clearfix">
								<div className="col-sm-3">
									<div className="footer_1_left">
										<h3>Creative Tales</h3>
										<p>Sri Lanka</p>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="footer_3 clearfix">
										<p>  © 2021 Creative Tales.All Rights Reserved </p>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="footer_1_right pull-right">
										<h1>CT <span>Creative Tales</span></h1>
									</div>
								</div>
							</div>
							<div className="footer_2 clearfix">
								<div className="col-sm-7">
									<div className="footer_2_left">
										<a href="#">Sign Up For Headlines</a>
										<a href="#">Customer Detail</a>
										<a href="#">Connect With Us</a>
										<a href="#">Media</a>
										<a href="#">Work</a>
										<a className="border_none_1" href="#">Policy</a>
									</div>
								</div>
								<div className="col-sm-5">
									<div className="footer_2_right pull-right">
										<ul className="social-network social-circle">
											<li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss" /></a></li>
											<li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></a></li>
											<li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter" /></a></li>
											<li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus" /></a></li>
											<li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<div id="toTop" className="btn btn-info" style={{ display: 'block', background: '#e02626', borderColor: '#e02626' }}><span className="fa fa-chevron-up" /></div>
		<div id="dropDownSelect1" />

</form>
</React.Fragment>
		);
		}
}
