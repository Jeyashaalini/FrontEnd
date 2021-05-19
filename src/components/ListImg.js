import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import MyAlert from './MyAlert'
import ApiService from '../services/ApiService';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class ListImageComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [],
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        ApiService.fetchImage()
            .then((res) => {
                this.setState({images: res.data})
                console.log(res.data);
            });
    }

    deleteImage = (imageId) => {
        ApiService.deleteImage(imageId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'Image deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                   images: this.state.images.filter(image => image.id !== imageId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }

    editImage = (id) => {
	console.log(id)
        this.props.history.push('/edit-image/'+ id);
    }

    addImage = () => {
        this.props.history.push('/add-image');
    }

    render() {
        const {images} = this.state;
        console.log(images);
        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
                </div>
                <Typography variant="h4" style={style}>Image Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addImage()}>
                  <h4>  Add Image</h4>
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right"><h4>Id</h4></TableCell>
                            <TableCell align="right"><h4>Image</h4></TableCell>
                            <TableCell align="right"><h4>ImageURL</h4></TableCell>
                            <TableCell align="right"><h4>Title</h4></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        images.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="6" align="center">No Images Available.</TableCell>
                        </TableRow>
                        :
                        images.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="right"><h5> {row.id} </h5> </TableCell>
                                <TableCell align="right"><h5>{row.title}</h5></TableCell>
                                <TableCell align="right"><h5> <img src={row.image} alt= "image" width="150" height="150" /></h5></TableCell>
                                <TableCell align="right"><h5>{row.imageurl}</h5></TableCell>
                                <TableCell align="right" onClick={() => this.editImage(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteImage(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>

            </div>
        );
    }

}

export default ListImageComponent;
