// import React, { Component } from "react";
// import { Typography, Grid } from '@material-ui/core';
// import AuthService from "../services/AuthService";

// export default class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentUser: AuthService.getCurrentUser()
//     };
//   }

  
//     render() {
//       const { currentUser } = this.state;

//     return (
//         <React.Fragment>
//                   <Typography  gutterBottom>
//                     <h1>Profile : {currentUser.username}</h1>
//                   </Typography>
        
//                   <Grid container spacing={3}>

//                   <Grid item xs={12}>
//                         <strong>Token:</strong>{" "}
//                         {currentUser.basicToken}
//                   </Grid>


//                     <Grid item xs={12}>
                    
//                         <strong>Id:</strong>{" "}
//                         {currentUser.id}
                      
//                     </Grid>
//                     <Grid item xs={12}>
                     
//                         <strong>Email:</strong>{" "}
//                         {currentUser.email}
                     
//                     </Grid>
//                     <Grid item xs={12}>
                     
//                         <strong>Authorities:</strong>
//                         <ul>
//                           {currentUser.roles &&
//                             currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
//                         </ul>
                    
//                     </Grid>
//                   </Grid>
//       </React.Fragment>
//     );
//   }
// }