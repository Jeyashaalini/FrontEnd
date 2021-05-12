import { Grid, Card } from '@material-ui/core';
import React ,{Component} from 'react';

import ApiService from '../services/ApiService'
// import UserService from '../services/UserService';

class Gallery extends Component {

			  constructor(props) {
				  super(props);
				  this.state = {
					id:"",
					title: '',
            				image: '',
            				imageurl: ''	  
				  }
			  }
		 componentDidMount() {
			 ApiService.fetchImageById()
			 .then((res) => {console.log(res.data);
				let image= res.data;
				this.setState({
					image: this.state.image, 
            				imageurl: this.state.imageurl, 
            				title: this.state.title
				} );
			})}

		 onChange = (e) =>
		 this.setState({[e.target.name] : e.target.value});
		 render() {
			 const {image} = this.state;
			 console.log(image)
			 return (
		  <section id="connect" className="gallery_page">
			<div className="container">
			  <div className="row">
				<div className="connect clearfix">
				  <h2>GALLERY</h2>
				</div>
				<div>
					<Grid container spacing={3}>
						{images != null ? (images.map (row => (
						<Grid item xs={12} >
						<Card>
						<img src={this.state.images} onChange={this.onChange} alt="image" width="350" height="350"  />
						</Card>
						</Grid>
							))):"No images found"}
					</Grid>
				</div>
				
				{/* <div className="connect_1 clearfix">
				  <div className="gallery">
					<a href="img/new/pic1.jpg" className="big"><img src="img/new/pic1.jpg" alt="" title="Beautiful Image" /></a>
					<a href="img/new/download.jpeg"><img src="img/new/download.jpeg" alt="" title /></a>
					<a href="img/new/picc2.jpg"><img src="img/new/picc2.jpg" alt="" title="Beautiful Image" /></a>
					<a href="img/new/new6.jpg"><img src="img/new/new6.jpg" alt="" title /></a>
					<div className="clear" />
					<a href="img/new/12.jpg"><img src="img/new/12.jpg" alt="" title /></a>
					<a href="img/new/jj.jpg"><img src="img/new/jj.jpg" alt="" title /></a>
					<a href="img/new/pic2.jpg" className="big"><img src="img/new/pic2.jpg" alt="" title /></a>
					<a href="img/new/ff.jpg"><img src="img/new/ff.jpg" alt="" title /></a>
					<div className="clear" />
					<a href="img/26.jpg" className="big"><img src="img/thumbs/26.jpg" alt="" title /></a>
					<a href="img/27.jpg"><img src="img/thumbs/27.jpg" alt="" title /></a>
					<a href="img/28.jpg"><img src="img/thumbs/28.jpg" alt="" title /></a>
					<a href="img/29.jpg"><img src="img/thumbs/29.jpg" alt="" title /></a>
					<div className="clear" />
				  </div>
				</div> */}
			  </div>
			</div>
		  </section>

 )} } ;

export default Gallery;
