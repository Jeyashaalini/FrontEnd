import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class EditEvent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            imageUrl: '',
            description: '',
            date:'',
            image : [],
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        const eventId = +this.props.match.params.id;
        ApiService.fetchUserById(eventId)
            .then((res) => {
                let event = res.data;
                this.setState({
                    id: event.id,
                    title: event.title,
                    imageUrl: event.imageUrl,
                    description: event.description,
                    date: event.data,
                    image: event.image
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveEvent = (e) => {
        e.preventDefault();
        let event = {id: this.state.id, title: this.state.title, imageUrl: this.state.imageUrl, description: this.state.description, date: this.state.date, image: this.state.image};
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
        return this.props.history.push('/detail');
    }

    render() {
        return (
            <div>
                 <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                <Typography variant="h4" style={style}>Edit Event</Typography>
                <form>
                <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                    <TextField type="text" placeholder="imageUrl" fullWidth margin="normal" name="image" value={this.state.imageUrl} onChange={this.onChange}/>
                    <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange}/>
                    <TextField type="date" placeholder="date" fullWidth margin="normal" name="date" value={this.state.date} onChange={this.onChange}/>
                    <input type="file" className="form-control" name="file" multiple onChange={this.onFileChangeHandler}/>
                    <img src={this.state.images}/>
                    <Button variant="contained" color="primary" onClick={this.saveEvent}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditEvent;