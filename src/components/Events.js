import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../App.css'
import Header from './Header'
import Footer from './Footer'
import CardHeader from "@material-ui/core/CardHeader";
import { Avatar, IconButton ,CardMedia } from "@material-ui/core";
import {Grid,Card,CardContent,Typography} from '@material-ui/core';
import {spacing} from "@material-ui/core";

export default class Events extends Component {
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
        .get(`http://localhost:8080/events`)
        .then(res => {

            const data = res.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

            const postData = slice.map(events =>


              <Grid item xs={4}>
              <Card key={events.id} style={{width:"400px"}} >
                {/* <p>{plants.title}</p>
                <img src={plants.imageUrl} alt=""/> */}
                {/* <CardHeader
                                         avatar={<Avatar src={plants.avatarUrl} />}
                                        //   subheader={ devices.price}

                                                 /> */}
     <CardContent  >
     <Typography variant="h3" component="h2"  style={{ color: "darkred" }}>
       {events.title}
       </Typography>
          </CardContent><br/><br/>
              <CardMedia>
         <img src= {events.image}  style={{ height: "350px" }}/>
            </CardMedia>
          <CardContent>
  <Typography variant="h4" color="textSecondary" component="p" style={{ color: "black" }}>
    {events.description}
      </Typography>
      </CardContent>
      <CardContent>
<Typography variant="bottom" color="textSecondary" component="p" style={{ color: "black" }}>
{events.date}
  </Typography>
  </CardContent>
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
<Footer/>
