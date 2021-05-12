import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import MyAlert from './MyAlert'
import ApiService from '../services/ApiService';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const style ={
    display: 'flex',
    justifyContent: 'center'
}

class ListEventComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: [],
            show: false,
            message: ''
        }
    }

    componentDidMount() {
        ApiService.fetchEvent()
            .then((res) => {
                this.setState({events: res.data})
                console.log(res.data);
            });
    }

    deleteEvent = (eventId) => {
        ApiService.deleteEvent(eventId)
           .then(res => {
               if(res.data != null) {
                this.setState({"show":true, message : 'Event deleted successfully.'});
                setTimeout(() => this.setState({"show":false}), 3000);
                this.setState({
                   events: this.state.images.filter(event => event.id !== eventId)
                });
            } else {
                this.setState({"show":false});
            }
           })
    }

    editEvent = (id) => {
	console.log(id)
        this.props.history.push('/edit-event/'+ id);
    }

    addEvent = () => {
        this.props.history.push('/add-event');
    }

	
    	render() {
	const {events} = this.state;
        console.log(events);
        
        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyAlert show = {this.state.show} message = {this.state.message} type = {"error"}/>
                </div>
                <Typography variant="h4" style={style}>Event Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addEvent()}>
                    Add Event
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">ImageURL</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        events.length === 0 ?
                        <TableRow>
                            <TableCell colSpan="6" align="center">No Events Available.</TableCell>
                        </TableRow> 
                        :
                        events.map(row => (
                            <TableRow key={row.id}>
                                <TableCell align="right">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right"><img src={row.image} alt= "event" width="150" height="150" /></TableCell>
                                <TableCell align="right">{row.imageurl}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right" onClick={() => this.editEvent(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteEvent(row.id)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>          
			
            </div>
        );
    }

}

export default ListEventComponent;
