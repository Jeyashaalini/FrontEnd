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

class EditEventComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            image: '',
            imageurl: '',
            description: '',
            date: '',
            show: false,
            message: ''
        }
    }

    componentDidMount() {
	console.log(this.props.match)
        const eventId = this.props.match.params.id;
        console.log(eventId);
        ApiService.fetchEventById(eventId)
            .then((res) => {console.log(res.data);
                let event = res.data;
                this.setState({
                    id: event.id,
                    image: event.image,
                    imageurl: event.imageurl,
                    title: event.title,
                    description: event.description,
                    date : event.date
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveEvent = (e) => {
        e.preventDefault();
        let event = {id: this.state.id, image: this.state.image, imageurl: this.state.imageurl, title: this.state.title, description: this.state.description, date: this.state.date};
        ApiService.editEvent(event)
            .then(res => {
                if(res.data != null) {
                    this.setState({show:true, message : 'Event Updated successfully.'});
                    setTimeout(() => this.setState({show:false}), 3000);
                    setTimeout(() => this.eventList(), 3000);
                } else {
                    this.setState({show:false});
                }
            });
    }

    eventList = () => {
        return this.props.history.push('/events');
    }

 
    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit Events</Typography>
                <form>
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

export default EditEventComponent;
