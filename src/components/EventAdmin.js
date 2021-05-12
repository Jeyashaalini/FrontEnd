import React, { Component } from 'react'
import ApiService from "../services/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyAlert from './MyAlert'

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

class EventAdmin extends Component{
    constructor(props){
        super(props);
        this.state ={
            title: '',
            imageUrl: '',
            description: '',
            date:'',
            message: '',
            show: false
        }
    }

    saveEvent = (e) => {
        e.preventDefault();
        let event = {
           title: this.state.title, 
            imageUrl: this.state.imageUrl, 
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
        return this.props.history.push('/detail');
    }

    onChange = (e) =>
        this.setState({ 
            [e.target.name]: e.target.value 
        });
        

    render() {
        return(
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"success"}/>
                </div>
                
                <Typography variant="h4" style={style}>Add Event</Typography>
                <form style={formContainer}>
                    <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange}/>
                    <TextField placeholder="imageUrl" fullWidth margin="normal" name="image" value={this.state.imageUrl} onChange={this.onChange}/>
                    <TextField placeholder="description" fullWidth margin="normal" name="lastName" value={this.state.description} onChange={this.onChange}/>
                    <TextField type="number" placeholder="date" fullWidth margin="normal" name="date" value={this.state.date} onChange={this.onChange}/>
                    <Button variant="contained" color="primary" onClick={this.saveEvent}>Save</Button>
                </form>
            </div>
        );
    }
}

export default EventAdmin;
