import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../App.css'
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, IconButton ,CardMedia } from "@material-ui/core";
import {Grid,Card,CardContent,Typography} from '@material-ui/core';
import {spacing} from "@material-ui/core";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 6,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
receivedData() {
    axios
        .get(`http://localhost:8080/images`)
        .then(res => {

            const data = res.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

            const postData = slice.map(images =>


              <Grid item xs={4}>
              <Card key={images.id} style={{ width: "400px"}} >
                {/* <p>{plants.title}</p>
                <img src={plants.imageUrl} alt=""/> */}
                {/* <CardHeader
                                         avatar={<Avatar src={plants.avatarUrl} />}
                                        //   subheader={ devices.price}
1
                                                 /> */}
             <CardContent  >
           <Typography variant="h3" component="h2"  style={{ color: "red" }}>
         {images.title}
               </Typography>
          </CardContent><br/><br/>
          <CardMedia>
       <img src= {images.image}  style={{ height: "350px"}}/>
          </CardMedia>

        <CardContent>
          <Typography variant="h5" component="h2">

             </Typography>
          </CardContent>
                </Card>
                </Grid>)


            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),

                postData
            })
        });
}
handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};

componentDidMount() {
    this.receivedData()
}
render() {
    return (

        <div>
            <Grid container spacing={4}>
            {this.state.postData}
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>
                </Grid>
        </div>



    )
}
}


//
// import { Grid, Card} from '@material-ui/core';
// import React ,{Component} from 'react';
// import TableCell from '@material-ui/core/TableCell';
// import ApiService from '../services/ApiService'
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
// import axios from 'axios'
// import ReactPaginate from 'react-paginate';
//
// class Gallery extends Component {
//
//   constructor(props) {
//       super(props)
//       this.state = {
//           images: [],
//           offset: 0,
//           perPage: 10,
//           currentPage: 0
//       };
//       this.handlePageClick = this
//             .handlePageClick
//             .bind(this);
//   }
//   receivedData() {
//     axios
//         .get(`http://localhost:8080/images`)
//         .then(res => {
//
//             const images = res.images;
//             const slice = images.slice(this.state.offset, this.state.offset + this.state.perPage)
//             const postData = slice.map(pd => <React.Fragment>
//                   <Grid container spacing={3}>
//
//         <Grid item xs={12} sm={3}>
//           <Card >
//                   <CardHeader title={pd.title}/>
//                   <CardMedia title="Gallery"/>
//                           <CardContent>
//                   <img src={pd.image} alt= "gallery" width="200" height="200"/>
//                           </CardContent>
//                 </Card>
//                   </Grid>
//                 </Grid>
//             </React.Fragment>)
//
//             this.setState({
//                 pageCount: Math.ceil(images.length / this.state.perPage),
//
//                 postData
//             })
//         });
// }
// handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     const offset = selectedPage * this.state.perPage;
//
//     this.setState({
//         currentPage: selectedPage,
//         offset: offset
//     }, () => {
//         this.receivedData()
//     });
//
// };
//
//   componentDidMount() {
//       ApiService.fetchImage()
//           .then((res) => {
//               this.setState({images: res.data})
//               console.log(res.data);
//           });
//
//           this.receivedData()
//         }
//
//   render() {
//     const {images} = this.state;
//     console.log(images);
//     return (
//       <div>
//
//             {this.state.postData}
//                 <ReactPaginate
//                     previousLabel={"prev"}
//                     nextLabel={"next"}
//                     breakLabel={"..."}
//                     breakClassName={"break-me"}
//                     pageCount={this.state.pageCount}
//                     marginPagesDisplayed={2}
//                     pageRangeDisplayed={5}
//                     onPageChange={this.handlePageClick}
//                     containerClassName={"pagination"}
//                     subContainerClassName={"pages pagination"}
//                     activeClassName={"active"}/>
//       </div>
//               );
//             }
//
//         }
//
// export default Gallery;

// class Gallery extends Component {

// 			  constructor(props) {
// 				  super(props);
// 				  this.state = {
// 					id:"",
// 					title: '',
//             				image: '',
//             				imageurl: ''
// 				  }
// 			  }
// 		 componentDidMount() {
// 			 ApiService.fetchImageById()
// 			 .then((res) => {console.log(res.data);
// 				let image= res.data;
// 				this.setState({
// 					image: this.state.image,
//             				imageurl: this.state.imageurl,
//             				title: this.state.title
// 				} );
// 			})}
//
// 		 onChange = (e) =>
// 		 this.setState({[e.target.name] : e.target.value});
// 		 render() {
// 			 const {images} = this.state;
// 			 console.log(images)
// 			 return (
// 		  <section id="connect" className="gallery_page">
// 			<div className="container">
// 			  <div className="row">
// 				<div className="connect clearfix">
// 				  <h2>GALLERY</h2>
// 				</div>
//
// 				 <div>
// 					<Grid container spacing={3}>
// 					{
//                         images.length === 0 ?
//                         <TableRow>
//                             <TableCell colSpan="6" align="center">No Images Available.</TableCell>
//                         </TableRow>
//                         :
//                         images.map(row => (
//
// 								<Grid item xs={12} >
// 						<Card>
// 						<img src={this.state.images} onChange={this.onChange} alt="image" width="350" height="350"  />
// 						</Card>
// 						</Grid>
// 						))}
// 						</Grid>
// 				</div>
//     ) }};
// export default Gallery;
				//  <div className="connect_1 clearfix">
				//   <div className="gallery">
				// 	<a href="img/new/pic1.jpg" className="big"><img src="img/new/pic1.jpg" alt="" title="Beautiful Image" /></a>
				// 	<a href="img/new/download.jpeg"><img src="img/new/download.jpeg" alt="" title /></a>
				// 	<a href="img/new/picc2.jpg"><img src="img/new/picc2.jpg" alt="" title="Beautiful Image" /></a>
				// 	<a href="img/new/new6.jpg"><img src="img/new/new6.jpg" alt="" title /></a>
				// 	<div className="clear" />
				// 	<a href="img/new/12.jpg"><img src="img/new/12.jpg" alt="" title /></a>
				// 	<a href="img/new/jj.jpg"><img src="img/new/jj.jpg" alt="" title /></a>
				// 	<a href="img/new/pic2.jpg" className="big"><img src="img/new/pic2.jpg" alt="" title /></a>
				// 	<a href="img/new/ff.jpg"><img src="img/new/ff.jpg" alt="" title /></a>
				// 	<div className="clear" />
				// 	<a href="img/26.jpg" className="big"><img src="img/thumbs/26.jpg" alt="" title /></a>
				// 	<a href="img/27.jpg"><img src="img/thumbs/27.jpg" alt="" title /></a>
				// 	<a href="img/28.jpg"><img src="img/thumbs/28.jpg" alt="" title /></a>
				// 	<a href="img/29.jpg"><img src="img/thumbs/29.jpg" alt="" title /></a>
				// 	<div className="clear" />
				//   </div>
				// </div>
// 			  </div>
// 			</div>
// 		  </section>
