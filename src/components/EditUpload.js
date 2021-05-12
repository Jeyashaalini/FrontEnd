import React, {Component} from "react";
import{Card,CardContent,Typography,FormControl,TextField,Grid,Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import art from "./art.jpg"
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';

const style={
    
  root:{
    minWidth:450,
    
    backgroundColor:"#8c8c8c",
    marginTop:40,
    color:'#212121',
    marginBottom : 40
    },
    card:{
      minWidth:500,
      backgroundcolor:'#212121',
      color:"#424242",
      margin:50
    }     
  }

export default class EditUpload extends Component{
  constructor (){
    super()
    this.state = {
      edit : false,
      id:0,
      title  : '',
      artistName : '',
	    description : '',
	    category : '',
      size : '',
      price: '',
      usage : '',
      image:[],
      vertical : 'top',
      horizontal : 'center',
      isSucess : false,
    }
    //console.log(localStorage.getItem('bookId'))
    // console.log(this.state.id)
    //localStorage.removeItem('bookId')
  }

onFileChangeHandler = (e) => {
    e.preventDefault();
    var elements=[];
    console.log(e.target.files.length)
    let files = e.target.files
    console.log(files)
    for(let i = 0; i<e.target.files.length; i++){
    let reader = new FileReader()
    reader.readAsDataURL(files[i])
    reader.onload = (e) => {
      console.log(" Imagedata",e.target.result)
      elements.push(e.target.result)
      this.setState({
        image:elements
      })
    }
    // console.log(elements)
  }
}

  TitleChange = (e) => {
    this.setState ({
        name:e.target.value
    })
    //console.log(e.target.value)
  }

  ArtistNameChange = (e) => {
    this.setState ({
      artistName:e.target.value
    })
    console.log(this.state.artistName)
  }

  DescriptionChange = (e) => {
    this.setState ({
      description:e.target.value
    })
  }

  CategoryChange = (e) => {
    this.setState ({
      category:e.target.value
    })
  }

  SizeChange = (e) => {
    this.setState ({
      size:e.target.value
    })
  }

  PriceChange = (e) => {
    this.setState ({
      price:e.target.value
    })
  }

  MediumChange = (e) => {
    this.setState ({
      medium:e.target.value
    })
  }

  updateUpload = (e) => {
    // this.setState({
    //   id:localStorage.getItem('bookId')
    // })
    //e.preventDefault()
    //console.log("ffffffffffffffffffffffffff")
    let upload = {
      title : this.state.title,
      artistName : this.state.artistName,
      description : this.state.description,
      category : this.state.category,
      size : this.state.size,
      price : this.state.price,
      image:this.state.image,
      medium : this.state.medium
    }
    if(this.state.title && this.state.artistName && this.state.description && this.state.category 
      && this.state.size && this.state.price && this.state.image && this.state.medium){
      axios.put('http://localhost:8080/upload/' + this.props.match.params.id,upload)
        .then((Resposne) => {
          console.log(Response)
          this.setState({snackbaropen:true,isSucess:true, message:'Art Work Update Successfully'})
          setTimeout(()=> this.fillAlert(), 3000)
          //this.props.history.push("/BookDetails");
        })
        .catch((error) => {
          console.log(error)
        })
    }else {
      this.setState({snackbaropen:true, message:'Please Fill the Form Properly'})
      setTimeout(()=> this.fillAlert(), 4000)
    }
  }

  handleReset = () => {
    this.setState({
      title : "",
      artistName : "",
      usage : "",
      category : "",
      size : "",
      description : "",
      price : "",
      image:"",
     
    })
  }

  fillAlert = () => {
    this.setState({snackbaropen:false})
    if(this.state.isSucess){
      this.props.history.push("/details");
    }
  }

  componentDidMount () {
    // console.log(this.props.match.params.id)
    this.setState({
      id:this.props.match.params.id
    })
    axios.get('http://localhost:8080/upload/' + this.props.match.params.id)
    .then((Response) => {
      console.log(Response)
      this.setState({
        title: Response.data.title,
        artistName : Response.data.artistName,
        description : Response.data.description,
        category : Response.data.category,
        size : Response.data.size,
        price: Response.data.price,
        image : Response.data.image,
        medium: Response.data.medium
      })
    })
}
    render(){
      const { vertical, horizontal } = this.state;
      //console.log(this.state.image)
        return(
          <>
          <div>
            <Snackbar open={this.state.snackbaropen} autoHideDuration={4000} anchorOrigin={{ vertical,horizontal }} key={vertical + horizontal}>
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
          
          <Grid container>
              <Grid item xs={1}/>
              <Grid item xs={5} style = {{marginTop:60}}>
                  <img src= {art}  alt = "Background Arts"/>
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={4}>
              <Card style={style.root} >
                <Paper style={{margin:10}}>
          
              <CardContent>
                <form >
                  
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h2" >Edit Your Art Works</Typography>
                      </Grid>


                      
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="Title"
                               value = {this.state.title}
                               onChange = {this.TitleChange}
                               label="Title"
                               name="title"
                               autoComplete="title"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               size = "small"
                               value = {this.state.artistName}
                               onChange = {this.ArtistNameChange}
                               required
                               fullWidth
                               id="artist name"
                               label="Artist Name"
                               name="artist name"
                               autoComplete="artist name"
                         />
                      </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                        <InputLabel id="Condition">Medium</InputLabel>
                          <Select
                              //  variant="outlined"
                              //  margin="normal"
                               value = {this.state.medium}
                               onChange = {this.MediumChange}
                                required
                               fullWidth
                               id="Medium"
                               label="Medium"
                              //  name="Usage"
                              //  autoComplete="Usage"
                         >
                         <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value={"pencil/pen/charchol"}>Pencil/Pen/Charchol</MenuItem>
                                <MenuItem value={"pastel"}>Pastel</MenuItem>
                                <MenuItem value={"watercolor"}>Watercolor</MenuItem>
                                <MenuItem value={"acrylic"}>Acrylic</MenuItem>
                                <MenuItem value={"oil paint"}>Oil Paint</MenuItem>
                                </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl fullWidth>
                        <InputLabel id="Category">Category</InputLabel>
                          <Select
                              //  variant="outlined"
                              //  margin="normal"
                               value = {this.state.category}
                               onChange = {this.CategoryChange}
                               fullWidth
                               id="Category"
                               label="Category"
                              //  name="Category"
                              //  autoComplete="Category"
                         >
                           <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value={"landscape"}>Landscape</MenuItem>
                                <MenuItem value={"portrait"}>Portrait</MenuItem>
                                <MenuItem value={"still life"}>Still Life</MenuItem>
                                <MenuItem value={"abstract"}>Abstract</MenuItem>
                                <MenuItem value={"contemporary"}>Contemporary</MenuItem>
                                </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               size = "small"
                               value = {this.state.size}
                               onChange = {this.SizeChange}
                               required
                               fullWidth
                               id="size"
                               label="Size"
                               name="size"
                               autoComplete="Size"
                         />
                        </FormControl>
                      </Grid>
                     
                      
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField 
                              type = "text area"
                               variant="outlined"
                               size = "small"
                               margin="normal"
                               value = {this.state.description}
                               onChange = {this.DescriptionChange}
                               required
                               fullWidth
                               id="descripition"
                               label="Descripition"
                               name="descripition"
                               autoComplete="Descripition"
                         />
                         </FormControl>
                      </Grid>
                      
                      
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               size = "small"
                               value = {this.state.price}
                               onChange = {this.PriceChange}
                               required
                               fullWidth
                               id="price"
                               label="Price"
                               name="Price"
                               autoComplete="Price"
                         />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}/>
                      <Grid item xs={6}>
                         <input
                          accept="image/*"
                          display="none"
                          //value = {this.state.image}

                          onChange={this.onFileChangeHandler}
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                      </Grid>
                      <Grid item xs={6}/>
                        
                      
                      <Grid item xs={3}>
                        <FormControl>
                          <Button
                               //type="submit"
                               fullWidth
                               variant="contained"
                               color="primary"
                               onClick={() => this.updateUpload()}
                               //onClick={this.updateUser}
                           >
                             Update
                          </Button>
                       </FormControl>
                       </Grid>
                       {/* <label htmlFor="contained-button-file">
          Please Upload
        </label> */}
        
                         
                        <Grid item xs={2}>
                        <FormControl>
                          <Button
                               type="reset"
                               fullWidth
                               variant="contained"
                               color="primary"
                               onClick = {() => this.handleReset()}
                          >
                         RESET
                          </Button>
                        </FormControl>
                      </Grid>


        
      {/* <Avatar src="/broken-image.jpg" /> */}


                      {/* <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label> */}

                      {/* <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label> */}

                      

                      </Grid> 
                 
                  
                </form>
              </CardContent>
              </Paper>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
      </>
      
        )
    }
}