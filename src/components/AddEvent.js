import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'
import ApiService from '../services/ApiService';

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap',
    color: 'white'
};

const style ={
    display: 'flex',
    justifyContent: 'center',
    color: 'white'

}

class AddEventComponent extends Component{
    constructor(props){
        super(props);
	
        this.state ={
            title: '',
            image: '',
            imageurl: '',
            description:'',
            date:'',
            message: '',
            show: false
        }
    }

    saveEvent = (e) => {
        e.preventDefault();
        let event = {
            image: this.state.image, 
            imageurl: this.state.imageurl, 
            title: this.state.title,
            description: this.state.description,
            date: this.state.date
        };

        ApiService.addEvent(event)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Event added successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.eventList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    eventList = () => {
        return this.props.history.push('/events');
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
     console.log(this.state.event)
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                
                <Typography variant="h4" style={style}>Add Events</Typography>
                <form style={formContainer}>
                    <TextField placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                    <TextField type="text" placeholder="image" fullWidth margin="normal" name="image" value={this.state.image} onChange={this.onChange}/>
                    <TextField type="text" placeholder="imageurl" fullWidth margin="normal" name="imageurl" value={this.state.imageurl} onChange={this.onChange}/>
                    <input type="file" multiple onChange={this.onFileChangeHandler }/>
                    <img src={this.state.image}/>
                    <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                    <TextField type="date" placeholder="date" fullWidth margin="normal" name="date" value={this.state.date} onChange={this.onChange}/>
                    <Button variant="contained" color="primary" onClick={this.saveEvent}>Save</Button>
                </form>
            </div>
        );
    }
}

export default AddEventComponent;
