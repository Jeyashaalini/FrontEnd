import React from "react";
function Footer() {
    return (
		<section id="footer">
  <div className="container">
    <div className="row">
      <div className="footer clearfix">
        <div className="footer_3 clearfix">
          <div className="col-sm-3">
            <div className="footer_1_left">
              <h3>Visual Garden</h3>
              <p>Sri Lanka</p>
                <p>visualgarden1@gmail.com</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer_3 clearfix">
              <p>  © 2021 Visual Garden. All Rights Reserved </p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer_1_right pull-right">
              <h1>VG<span>Visual Garden</span></h1>
            </div>
          </div>
        </div>
        <div className="footer_2 clearfix">
          <div className="col-sm-7">
            <div className="footer_2_left">
              <a href="contact">Connect With Us</a>
              <a href="#">Media</a>
              <a className="border_none_1" href="#">Policy</a>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="footer_2_right pull-right">
              <ul className="social-network social-circle">
                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" /></a></li>
                <li><a href="#" className="icoInstagram" title="Instagram"><i className="fa fa-instagram" /></a></li>
                <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

export default Footer;
