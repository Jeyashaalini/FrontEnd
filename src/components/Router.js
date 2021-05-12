import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import ListImg from "./ListImg";
// import AddImg from "./AddImg";
// import EditImg from "./EditImg";
import AddEvent from './AddEvent'
import EditEvent from './EditEvent'
import ListEvent from './ListEvent'
import React from "react";

const style = {
    color: 'red',
    margin: '10px'
}

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center" style={style}>Image Upload</h1>
                    <Switch>
                        {/* <Route path="/" exact component={ListImg} />
                        <Route path="/images" component={ListImg} />
                        <Route path="/add-image" component={AddImg} />
                        <Route path="/edit-image/:id" component={EditImg} /> */}

			            <Route path="/" exact component={ListEvent} />
                        <Route path="/events" component={ListEvent} />
                        <Route path="/add-event" component={AddEvent} />
                        <Route path="/edit-event/:id" component={EditEvent} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter;
