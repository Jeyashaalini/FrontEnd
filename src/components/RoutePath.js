import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router-dom"

import SignUp from "./SignUp";
import Login from './Login'
//import Contact from './Contact' 
// import BoardAdmin from './BoardAdmin'
// import AddImg from './AddImg'
import Upload from './Upload'
import AllArtBuy from './AllArtBuy'
import BookDetails from './ArtDetails'
import EditImg from './EditImg';
import Home from './Home'
//import Gallery from './Gallery'
//import Detail from './Detail'
// import Header from './Header'
import Footer from './Footer'




export default class RoutePath extends Component {
    render() {
        return(
            <div style={{minHeight: `${window.innerHeight-400}px`}}>
                <Router>
                        {/* <Route exact path="/header" component={Header}/> */}
                        <Route exact path={["/", "/home"]} component={Home} />
                        {/*<Route exact path={["/gallery"]} component={Gallery} />*/}
                        <Route exact path={["/signin"]} component={Login} />
                        <Route exact path={["/signup"]} component={SignUp} />
                        {/*<Route exact path={["/eventdatail"]} component={Detail} />*/}
                        {/*<Route exact path={["/contact"]} component={Contact} />*/}
                        {/* <Route exact path={["/admin"]} component={BoardAdmin} /> */}
                        {/* <Route exact path={["/img-add"]} component={AddImg} /> */}
                        <Route exact path={["/sell"]} component={Upload} />
                        <Route exact path={["buy"]} component={AllArtBuy} />
                        <Route exact path={["/artdetails"]} component={BookDetails} />
                        <Route exact path={["/editimg"]} component={EditImg} />
                        <Route exact path={["/edit/:id"]} component={EditImg} />
                        <Route exact path={["/footer"]} component={Footer}/>
                </Router>  
            </div> 
        )
    }
}

{/* <Route exact path={["/buynowpayment/:id"]} component={BuyNowPayment} /> */}
