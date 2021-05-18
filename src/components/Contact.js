import { render } from '@testing-library/react';
import React, {Component} from 'react';
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

////////////

	handleContact = (e) => {
	  e.preventDefault();

	  this.setState({
		message: "",
		loading: true
	  });

	  AuthService.contact(
		this.state.firstname,
		this.state.lastname,
		this.state.email,
		this.state.mobnumber,
		this.state.message
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
			<form onSubmit={this.onClick}>
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Visual Garden</title>
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

			<div className="container-contact100">
				<div className="wrap-contact100">
					<form action="mailto:visualgarden1@gmail.com" method="post" enctype="text/plain" className="contact100-form validate-form">
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
							<button onSubmit={this.onClick} type="submit" value="Send Message" className="contact100-form-btn"  >
								Send Message
							</button>
						</div>
					</form>
					<div className="contact100-more flex-col-c-m" style={{ backgroundImage: 'url("img/wal3.jpg")' }}>
					</div>
				</div>
			</div>
			<div id="dropDownSelect1" />

			<div id="toTop" className="btn btn-info" style={{ display: 'block', background: '#e02626', borderColor: '#e02626' }}><span className="fa fa-chevron-up" /></div>
		<div id="dropDownSelect1" />

</form>
		);
  }
		}
