import React from 'react'
import './App.css';
import './index.css'
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
//  import Login from './components/Login';
import AppRouter from "./components/AppRouter"
// import { Button, Menu, MenuItem, Switch } from '@material-ui/core';
// import Buy from './components/Buy';
// import Upload from './components/Upload';
// import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BuyPhoto from './components/BuyPhoto'
import RoutePath from './components/RoutePath'
//import AddImg from './components/AddImg'
// import AddEvent from './components/AddEvent'


class App extends React.Component {
  render() {
  return (
    <div className="App">
		{/* <Header/>
    <Home/>
		<Footer/> */}
    {/* <Login/>  */}
    {/*  <Contact/>*/}
    {/*  <Router/>*/}
    {/* <Gallery/>*/}
    {/* <Events/>*/}
     <RoutePath/>
    {/*<AddImg/>*/}
    {/* <Upload/> */}
	{/* <NavBar/>*/}
    {/* <AddEvent/> */}
    </div>
  );
}
}

// import React , {Component} from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import SignUp from "./components/SignUp";
// import Profile from "./components/Profile"
// import { AppBar, Paper, Toolbar, Button } from '@material-ui/core';


// class App extends Component {
//     constructor(props) {
//       super(props);
//       this.logOut = this.logOut.bind(this);
//       this.state = {
//         showAdminBoard: false,
//         currentUser: undefined,
//       };
//     }

//     componentDidMount() {
//       let user;
//       if (localStorage.getItem('username')) {
//         user = {
//           username: localStorage.getItem('username'),
//           id: localStorage.getItem('id'),
//           email: localStorage.getItem('email'),
//           roles: localStorage.getItem('roles'),
//         };
//       }

//       if (user) {
//         this.setState({
//           currentUser: user,
//           showAdminBoard: user.roles.includes("ROLE_ADMIN")
//         });
//       }
//     }

//     logOut () {
//       localStorage.clear()
//     }

//     render() {
//       const { currentUser, showAdminBoard } = this.state;

//   return (
//     <div>
//     <AppBar position="static">
//       <Toolbar>
//       <Paper>
//    {showAdminBoard && (
//                   <Button href="/admin" color='inherit'>
//                     <strong>Admin Board</strong>
//                   </Button>
//                 )}
//                 {currentUser && (
//                   <Button href="/user" color='inherit'>
//                     <strong>User</strong>
//                   </Button>
//                 )}
//               </Paper>

//               {currentUser ? (
//                 <Paper style={{'backgroundColor': 'Black', 'color': 'White'}} elevation={0}>
//                   <Button href="/profile" color='inherit'>
//                     <strong>{currentUser.username}</strong>
//                   </Button>
//                   <Button href="/login" color='inherit' onClick={this.logOut}>
//                     <strong>LogOut</strong>
//                   </Button>
//                 </Paper>
//               ) : (
//                 <Paper style={{'backgroundColor': 'Black', 'color': 'White'}} elevation={0}>
//                   <Button href="/sign-in" color='inherit'>
//                     <strong>Login</strong>
//                   </Button>
//                   <Button href="/sign-up" color='inherit'>
//                     <strong>Sign Up</strong>
//                   </Button>
//                 </Paper>
//               )}
//             </Toolbar>
//       </AppBar>
//     <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           {/* <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link> */}
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-in"}>Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <Switch>
//             <Route exact path='/' component={Login} />
//             <Route path="/sign-in" component={Login} />
//             <Route path="/sign-up" component={SignUp} />
//             <Route exact path="/profile" component={Profile} />
//             {/* <Route path="/user" component={BoardUser} />
//             <Route path="/admin" component={BoardAdmin} /> */}
//           </Switch>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }
// }

export default App;
