import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'
import ApiService from '../services/ApiService';

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class AddImageComponent extends Component{
    constructor(props){
        super(props);
	
        this.state ={
            title: '',
            image: '',
            imageurl: '',
            message: '',
            show: false
        }
    }

//this.logOut = this.logOut.bind(this);

    saveImage = (e) => {
        e.preventDefault();
        let image = {
            image: this.state.image, 
            imageurl: this.state.imageurl, 
            title: this.state.title
        };

        ApiService.addImage(image)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Image added successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.imageList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    imageList = () => {
        return this.props.history.push('/images');
    };

    onChange = (e) =>
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    onFileChangeHandler = (e) => {
        e.preventDefault();
        var elements=[];
        console.log(e.target.files.length)
        let files = e.target.files
        console.log(files)
        for(let i = 0; i<e.target.files.length; i++){
            let reader = new FileReader()
            reader.readAsDataURL(files[i])
            reader.onload = (e) => {
            console.log(" Imagedata",e.target.result)
            elements.push(e.target.result)
            this.setState({image:elements[0]})
            }
            console.log(elements)
        }
   }
    render() {
     console.log(this.state.image)
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                
                <Typography variant="h4" style={style}>Add Images</Typography>
                <form style={formContainer}>
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

export default AddImageComponent;
