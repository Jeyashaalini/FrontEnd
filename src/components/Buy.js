import React, {Component} from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import{Card,CardContent,FormControl,TextField,Grid, Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button'

import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import BuyPhoto from "./BuyPhoto";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';
import Stripe from'./Stripe';



const style={
    root:{
        minWidth:450,
        backgroundColor:"#8c8c8c",
        marginBottom:20,
        color:'#212121',
        align: 'justify'
    },
    card:{
     align: 'justify',
      minWidth:500,
      backgroundcolor:'#8c8c8c',
      color:"#424242",
      marginTop:20,
      marginLeft:20,
      marginRight:20
    }

}
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}


export default class Buy extends Component{

      constructor(){
        super()
        this.state = {
          open : false,
          art:{},
          buyerName:'',
          buyerAddress:'',
          buyerPhoneNum:'',
          image:[],
          vertical : 'top',
          horizontal : 'center',
          isSucess : false,
        }

      }

      componentDidMount(){
          axios.get('http://localhost:8080/upload/'+ this.props.match.params.id)
          .then((Response) => {
            console.log(Response.data)
            this.setState({
              art:Response.data,
              image:Response.data.image
            })
          })

    }

    buyerNameChange = (e) => {
      this.setState({
        buyerName:e.target.value
      })
    }
    buyerAddressChange = (e) => {
      this.setState({
        buyerAddress:e.target.value
      })
    }
    buyerPhNoChange = (e) => {
      this.setState({
        buyerPhoneNum:e.target.value
      })
    }
    fillAlert = () => {
      this.setState({snackbaropen:false})
      if(this.state.isSucess){
        this.props.history.push("/home");
      }
    }

    IsAlert =  () =>{
        let pending = {
          upload : this.state.upload,
          buyerName : this.state.buyerName,
          buyerAddress : this.state.buyerAddress,
          buyerPhoneNum : this.state.buyerPhoneNum
        }
        if(this.state.buyerAddress && this.state.buyerName && this.state.buyerPhoneNum){
          axios.post('http://localhost:8080/pending',pending)
          .then((Response) => {
            console.log(pending)
            
            this.setState({snackbaropen:true,isSucess:true,open : false, message:'We will deliver your order soon..!! — Thank you!'})
            setTimeout(()=> this.fillAlert(), 3000)
          })
        }else {
          this.setState({snackbaropen:true, message:'Please Fill the Whole Form'})
          setTimeout(()=> this.fillAlert(), 4000)
        }
      }
      handleClickOpen = () => {
        this.setState ({
          open : true,
        })
      };

      handleClose = () => {
        this.setState ({
          open : false,
        })
      };


    render(){
      const { vertical, horizontal } = this.state;
      //console.log(this.state.book)
        return(
          <>
            <div>
            <Snackbar open={this.state.snackbaropen} autoHideDuration={3000} anchorOrigin={{ vertical,horizontal }} key={vertical + horizontal}>
              { this.state.isSucess ? (
                <Alert severity="success">
                  {this.state.message}
                </Alert>
              ):(
                <Alert severity="warning">
                {this.state.message}
              </Alert>
              )
              }
            </Snackbar>
          </div>
        <Grid container spacing = {2}  style = {{marginTop:30}}>

        <Grid item xs={8}>
          <Card style={style.root}>
            <Paper style={{margin:10}}>
              <CardContent>
                  <Grid container spacing={1}>
                      <Grid item xs={5}>
                        <br/><br/><br/>
                        <BuyPhoto image = {this.state.image} />
                      </Grid>
                      <Grid item xs={7}>
                        <div>
                          <h4 style={{textAlign:"left"}}>Title: {this.state.art.title}</h4>
                          <h4 style={{textAlign:"left"}}>Artist Name : {this.state.art.artistName}</h4>
                        <h4 style={{textAlign:"left"}}>Medium : {this.state.art.medium}</h4>
                          <h4 style={{textAlign:"left"}}>Category : {this.state.art.category}</h4>
                           <h4 style={{textAlign:"left"}}>Size : {this.state.art.size}</h4>
                          <h4 style={{textAlign:"left"}}>Descripition : {this.state.art.description}</h4>
                          <h4 style={{textAlign:"left"}}>Price : {this.state.art.price}</h4>
                        </div>
                      </Grid>
                      <Grid item xs={10}/>
                      <Grid item xs={2}>
                        <FormControl>

                          <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               color="primary"
                               onClick={this.handleClickOpen}
                               style = {{backgroundColor:" #4a95e9 "}}
                            >
                             BUY
                              </Button>

                          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                          <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              We thank you so much for business with us and we need some details from you to deliver your Paintings to you they are:
                            </DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              value = {this.state.buyerName}
                              onChange = {this.buyerNameChange}
                              helperText = ""
                              label="Name"
                              type="text"
                              fullWidth
                            />
                            <TextField
                              margin="dense"
                              id="address"
                              value = {this.state.buyerAddress}
                              onChange = {this.buyerAddressChange}
                              helperText = ""
                              label="Deliver Address"
                              type="text"
                              fullWidth
                            />
                            <TextField
                              margin="dense"
                              id="telNum"
                              value = {this.state.buyerPhoneNum}
                              onChange = {this.buyerPhNoChange}
                              helperText = ""
                              label="Telephone Number"
                              type="text"
                              fullWidth
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                              Cancel
                            </Button>
                            <Button onClick = {()=> this.IsAlert()} color="primary">
                              Accpet
                            </Button>
                          </DialogActions>
                        </Dialog>
                       </FormControl>
                       </Grid>
                       </Grid>
              </CardContent>
              </Paper>
        </Card>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
      </>
        )
    }
}
