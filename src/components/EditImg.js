import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'
import ApiService from '../services/ApiService';

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class EditImageComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            image: '',
            imageurl: '',
            show: false,
            message: ''
        }
    }

    componentDidMount() {
	console.log(this.props.match)
        const imageId = this.props.match.params.id;
        console.log(imageId);
        ApiService.fetchImageById(imageId)
            .then((res) => {console.log(res.data);
                let image = res.data;
                this.setState({
                    id: image.id,
                    image: image.image,
                    imageurl: image.imageurl,
                    title: image.title
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveImage = (e) => {
        e.preventDefault();
        let image = {id: this.state.id, image: this.state.image, imageurl: this.state.imageurl, title: this.state.title};
        ApiService.editImage(image)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Image Updated successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.imageList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    imageList = () => {
        return this.props.history.push('/images');
    }

 
    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit Images</Typography>
                <form>
             <TextField placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                    <TextField type="text" placeholder="image" fullWidth margin="normal" name="image" value={this.state.image} onChange={this.onChange}/>
                    <TextField type="text" placeholder="imageurl" fullWidth margin="normal" name="imageurl" value={this.state.imageurl} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler }/>
                    <img src={this.state.image}/>
                    <Button variant="contained" color="primary" onClick={this.saveImage}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditImageComponent;
