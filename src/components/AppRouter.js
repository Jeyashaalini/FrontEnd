import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListImg from "./ListImg";
import AddImg from "./AddImg";
import EditImg from "./EditImg";
import AddEvent from './AddEvent'
import EditEvent from './EditEvent'
import ListEvent from './ListEvent'
import React, {Component} from "react";

const style = {
    color: 'black',
    margin: '10px',
    width:'1250px',
    fontSize: '35px',
    backgroundColor: "white"
}

export default class AppRouter extends Component {
  render(){
    return(
        <div>
            <Router>
                <div className="col-md-10" style={style}>
                    <h1 className="text-center" style={style}>Images & Events Upload</h1>
                    <Switch>
                    <Route path="/adminj" exact component={ListImg} />
                    <Route path="/images" component={ListImg} />
                    <Route path="/add-image" component={AddImg} />
                    <Route path="/edit-image/:id" component={EditImg} />

                    <Route path="/admink" exact component={ListEvent} />
                    <Route path="/events" component={ListEvent} />
                    <Route path="/add-event" component={AddEvent} />
                    <Route path="/edit-event/:id" component={EditEvent} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}}
