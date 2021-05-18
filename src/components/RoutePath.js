import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from "react-router-dom"

import SignUp from "./SignUp";
import Login from './Login'
import Contact from './Contact'
import Admin from './Admin'
import BoardAdmin from './BoardAdmin'
// import AddImg from './AddImg'
import Upload from './Upload'
import AllArtBuy from './AllArtBuy'
import ArtDetails from './ArtDetails'
import EditImg from './EditImg';
import Home from './Home'
import Gallery from './Gallery'
import Events from './Events'
import Header from './Header'
import Footer from './Footer'
import Buy from './Buy';
import AppRouter from './AppRouter'
// import Contact from './Contact'



export default class RoutePath extends Component {

    render() {
        return(
            <div style={{minHeight: `${window.innerHeight-400}px`}}>

            <Header/>
                <Router>

                        <Route exact path={["/", "/home"]} component={Home} />
                        <Route exact path={["/gallery"]} component={Gallery} />
                        <Route exact path={["/signin"]} component={Login} />
                        <Route exact path={["/signup"]} component={SignUp} />
                        <Route exact path={["/events"]} component={Events} />
                        <Route exact path={["/contact"]} component={Contact} />
                         {/* <Route exact path={["/admin"]} component={Admin} />*/}
                         <Route exact path={'/buy'} component={AllArtBuy} />
                         <Route exact path={'/sell'} component={Upload} />
                         <Route exact path={'/buyPainting/:id'} component={Buy} />
                         <Route exact path={'/adminj'} component={AppRouter} />
                        <Route exact path={'/ArtDetails'} component={ArtDetails} />
                      {/*  <Route exact path={["/img-add"]} component={AddImg} />*/}

                </Router>
              <Footer/>
            </div>
        )
    }
}

{/* <Route exact path={["/buynowpayment/:id"]} component={BuyNowPayment} /> */}
