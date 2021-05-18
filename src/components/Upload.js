import React, {Component} from "react";
import{Card,CardContent,Typography,FormControl,TextField,Grid,Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import art from "./art.jpg"
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



export default class Sell extends Component{
  constructor (){
    // const vertical = 'top'
    // const horizontal = 'center'
    // const URL ='http://localhost:8080/upload';
    super()
    this.state = {
      edit : false,
      title  : '',
      artistName : '',
	    description : '',
	    category : '',
      size : '',
      price: 0,
      medium : '',
      image : [],
      phoneNumber : '',
      vertical : 'top',
      horizontal : 'center',
      isSucess : false,
    }
    // localStorage.setItem('user',true)
      // localStorage.removeItem('user')

  }

  TitleChange = (e) => {
    this.setState ({
      title:e.target.value
    })
    //console.log(e.target.value)
  }

  PhotoChange =(e) => {
    var file = new FileReader()
    console.log(e.target.value)
    file = e.target.value
    console.log(file)
  //   this.setState ({
  //     files:e.target.value
  // })
  // file.onload = function(){
  //   alert(file.result)
  //   file.readAsBinaryString()
  // }

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
  var n = Number(e.target.value)
    this.setState ({
      price:n
    })
  }

  MediumChange = (e) => {
    this.setState ({
      medium:e.target.value
    })
  }
  PhoneNumberChange = (e) => {
    this.setState ({
      phoneNumber:e.target.value
    })
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

      //console.log(e)
    // this.setState({
    //     selectedFile: e.target.files
    // });

    // fetch('http://localhost:8080/upload', {
    //     method: 'post',
    //     body: formData
    // }).then(res => {
    //     if(res.ok) {
    //         console.log(res.data);
    //         alert("File uploaded successfully.")
    //     }
    // });
};

fillAlert = () => {
  this.setState({snackbaropen:false})
  if(this.state.isSucess){
    this.props.history.push("/home");
  }
}


  addUpload = (e) => {
    //e.preventDefault()
    // const formData = new FormData();
    // formData.append('file', this.state.selectedFile);
    // console.log(formData)
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
	console.log(upload)


    if(this.state.title && this.state.artistName && this.state.description && this.state.category
      && this.state.size && this.state.price && this.state.image && this.state.medium)
{
      axios.post('http://localhost:8080/upload',upload)
      .then((Response) => {
        console.log(Response)
        this.setState({snackbaropen:true,isSucess:true, message:'Art work Added Successfully'})
        setTimeout(()=> this.fillAlert(), 3000)
        //this.props.history.push("/home");
        // window.location.push('/admin')
      })
      console.log(upload)
    }else {
      this.setState({snackbaropen:true, message:'Please Fill the Whole Form'})
      setTimeout(()=> this.fillAlert(), 4000)
    }
  }
  handleReset = () => {
    this.setState({
      title : "",
      artistName : "",
      medium : "",
      category : "",
      size : "",
      description : "",
      price : 0,
      image:"",
      phoneNumber: ''
    })
  }

    render(){
      const { vertical, horizontal } = this.state;
      console.log(this.state.image)
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
          {localStorage.getItem('user') ?(
          <Grid container>
              <Grid item xs={1}/>
              <Grid item xs={5} style = {{marginTop:60}}>
                  <img src= {art} height='400' width='600'  alt = "Background Arts"/>
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={4}>
              <Card style={style.root} >
                <Paper style={{margin:10}}>

              <CardContent>
                <form >

                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h2" >Upload Your Paintings</Typography>
                      </Grid>



                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               size = "small"
                               required
                               value = {this.state.title}
                               onChange = {this.TitleChange}
                               fullWidth
                               id="Title"
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

                      <Grid item xs={5}>
                        <FormControl fullWidth>
                          <TextField
                              type = "text area"
                               variant="outlined"
                               size = "small"
                               margin="normal"
                               value = {this.state.phoneNumber}
                               onChange = {this.PhoneNumberChange}
                               required
                               fullWidth
                               id="phoneNumber"
                               label="Phone Number"
                               name="phoneNumber"
                               autoComplete="Phone Number"
                         />
                         </FormControl>
                      </Grid>
                      <Grid item xs={6}/>
                      {/* <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               fullWidth
                               id="phone number"
                               label="Phone Number"
                               name="phone number"
                               autoComplete="phone number"
                         />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                              //  fullWidth
                               id="address"
                               label="Address"
                               name="address"
                               autoComplete="address"
                         />
                        </FormControl>
                      </Grid> */}
                      <Grid item xs={6}>
                      {/* <label>Upload Your File </label> */}
                            <input type="file" className="form-control" name="file" multiple onChange={this.onFileChangeHandler}/>
                      </Grid>
                      <Grid item xs={6}/>



                      <Grid item xs={2}>
                        <FormControl>
                          <Button
                               //type="submit"
                               size = "small"
                               fullWidth
                               variant="contained"
                               color="primary"
                              //  onClick={() => {if(window.confirm('Add the Book?')){this.addBook()}}}
                               onClick = {this.addUpload}
                           >
                             ADD
                          </Button>
                       </FormControl>
                       </Grid>
                       {/* <label htmlFor="contained-button-file">
          Please Upload
        </label> */}

                         &emsp;
                        <Grid item xs={2}>
                        <FormControl>
                          <Button
                               type="reset"
                               size = "small"
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
          ):(
            <Grid container spacing = {1} >
              <Grid item xs={3}/>

              <Grid item xs={6} style={{marginTop:"12%",margin:'12%'}}>
              <Card style = {{backgroundColor:"#8c8c8c"}} >
                <Paper style={{margin:10}}>
                  <div style = {{padding:20}}>
                  <Alert variant="outlined" severity="info">
                    You have to login for selling your artworks — Login first!
                  </Alert>
                  </div>
                </Paper>
              </Card>
              </Grid>
              <Grid item xs={3}/>
              </Grid>
          )
          }
          </>
        )

    }
}
