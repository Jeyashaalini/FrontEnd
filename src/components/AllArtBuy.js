import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';
import Tooltip from '@material-ui/core/Tooltip';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import axios from 'axios';
import { useTheme } from '@material-ui/core/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Pagination from '@material-ui/lab/Pagination';
import TablePagination from '@material-ui/core/TablePagination';
import { CardActions, CardContent, CardHeader, CardMedia, List } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));


  const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));

  function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
      console.log("Page" + page)
    };

    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
      console.log("Page" + page)
    };

    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }


function AllUploadBuy() {
    const classes = useStyles();
    const [isFilter, setIsFilter] = React.useState(false);
    const [value, setValue] = React.useState([100, 100]);
    const [category, setCategory] = React.useState('');
    const [medium, setMedium] = React.useState('');
    const [search, setSearch] = React.useState('');
    const [upload, setUpload] = React.useState([]);
    const [page, setPage] = React.useState(0);
    // const [pageNo, setPageNo] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [count, setCount] = React.useState();
    const [isFiltered, setIsFiltered] = React.useState(false);


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    const handleChangePage = (event, newPage) => {
      console.log(value[1])
        setPage(newPage);
        if(isFiltered === true){
          axios.get("http://localhost:8080/upload/page/filteredpage?medium="+medium+"&category="+category+"&pageNo="+newPage+"&minPrice="+value[0]+"&maxPrice="+value[1])
          .then((Response) => {
            console.log(Response.data.Total_No_Of_Elements)
            setCount (Response.data.Total_No_Of_Elements)
            console.log(count)
            setUpload ( Response.data.data)
            console.log(page)
            console.log(upload)
            //console.log(Response.data.data)

          })
        }
        else if(search === ''){
        axios.get("http://localhost:8080/upload/page?pageSize=10&pageNo="+newPage)
        .then((Response) => {
          console.log(Response.data.Total_No_Of_Elements)
          setCount (Response.data.Total_No_Of_Elements)
          console.log(count)
          setUpload ( Response.data.data)
          console.log(page)
          console.log(upload)
          //console.log(Response.data.data)

        })
      }else{
        axios.get("http://localhost:8080/upload/page/serachedPages?serched="+search + "&pageNo="+ newPage)
        .then((Response) => {
          console.log(Response.data.Total_No_Of_Elements)
          setCount (Response.data.Total_No_Of_Elements)
          console.log(count)
          setUpload ( Response.data.data)
          console.log(page)
          console.log(upload)
          //console.log(Response.data.data)

        })
      }



      };

      const filterData = () => {
        setPage(0)
        setIsFiltered(true)
        // axios.get("http://localhost:8081/upload/page/filteredpage?medium=New&category=d")
        axios.get("http://localhost:8080/upload/page/filteredpage?category="+medium+"&category="+category+"&minPrice="+value[0]+"&maxPrice="+value[1])
          .then((Response) => {
            console.log(Response.data.Total_No_Of_Elements)
            setCount (Response.data.Total_No_Of_Elements)
            console.log(count)
            setUpload ( Response.data.data)
            console.log(page)
            console.log(upload)
            //console.log(Response.data.data)

          })
      }

      const serachData = () => {
        setPage(0)
        setIsFiltered(false)
        if(search === ''){
            axios.get("http://localhost:8080/upload/page?pageSize=10&pageNo=0")
            .then((Response) => {
                  setCount(Response.data.Total_No_Of_Elements)
                  setUpload( Response.data.data)
                  console.log(upload)
          })
        }else{
          axios.get("http://localhost:8080/upload/page/serachedPages?serched="+search + "&pageSize=10&pageNo="+ page)
          .then((Response) => {
            setCount (Response.data.Total_No_Of_Elements)
            console.log(count)
          setUpload( Response.data.data)
          console.log(upload)
        })
      }
    }

      // const handleChangeRowsPerPage = (event) => {
      //   setRowsPerPage(parseInt(event.target.value, 10));
      //   setPage(0);
      // };


    useEffect(() => {
        axios.get("http://localhost:8080/upload/page?pageSize=10&pageNo=0")
          .then((Response) => {
                setCount(Response.data.Total_No_Of_Elements)
                setUpload( Response.data.data)
                console.log(upload)
        })
      });


    const searchUpdate = (event) => {
        setSearch(event.target.value)
    }
    const clearText = (upload) => {
      setSearch ('')
      axios.get("http://localhost:8080/upload/page?pageSize=10&pageNo=0")
      .then((Response) => {
            setCount(Response.data.Total_No_Of_Elements)
            setUpload( Response.data.data)
            console.log(upload)
    })
  }

    // function generate(element) {
    //     return books.map((value) =>
    //       React.cloneElement(element, {
    //         ...this.value.bookName


    //       }),
    //     );
    //   }

    // const serachData = () => {
    //     if(search == null || search == ''){
    //         axios.get("http://localhost:8081/books/page?pageSize=10&pageNo="+pageNo)
    //             .then((Response) => {
    //                 setCount(Response.data.Total_No_Of_Elements)
    //                 setBooks( Response.data.data)
    //                 console.log(books)
    //     })
    //     }else{
    //     axios.get("http://localhost:8081/books/page/serachedPages?serched="+search+"&pageSize=10")
    //       .then((Response) => {
    //         setCount(Response.data.Total_No_Of_Elements)
    //         setBooks(  Response.data.data)
    //         console.log(books)
    //     })
    // }
    // }

    const handleClick = () => {
        !isFilter? (setIsFilter(true)):(setIsFilter(false))
        // setSearch('')

    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const handleCatChange = (event) => {
        setCategory(event.target.value);
      };
    const handleConChange = (event) => {
        setMedium(event.target.value);
      };

    //   const reloadUploadList = () => {
    //       console.log("Heloololololololo")
    //   upload.fetchUpload()
    //     .then((Response) => {
    //         setUpload(Response.data)
    //     })
    // }


    return(
        <div className={classes.demo} >
              {/* <button onClick = {reloadUploadList}>Art</button> */}
            <Grid container spacing={1} >
            <Grid item xs = {1}/>
            {isFilter ? (
                <Grid item xs = {2} >
                    <Card style ={{marginTop:40}}>
                        <Paper style ={{padding:20}} class = "AllBookSellBG">
                        <h2>Filter</h2>
                            <Typography id="Price" gutterBottom>
                                Price range
                            </Typography>
                            <Slider

                                max = {50000}
                                min = {1000 }
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                // getAriaValueText={valuetext}
                            />
                            <br/><br/>
                            <FormControl variant="filled" style = {{width:"80%"}}>
                                <InputLabel id="Category">Category</InputLabel>
                                <Select
                                labelId="Category"
                                id="Category"
                                value={category}
                                onChange={handleCatChange}
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
                            <br/><br/>
                            <FormControl variant="filled" style = {{width:"80%"}}>
                                <InputLabel id="Medium">Medium</InputLabel>
                                <Select
                                labelId="Medium"
                                id="Medium"
                                value={medium}
                                onChange={handleConChange}
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
                            <br/><br/><br/>
                            <Button variant="outlined" type = "submit" onClick = {() => filterData()}>Find</Button>
                        </Paper>
                    </Card>
                </Grid>
            ):(
                <Grid item xs = {2}/>
            )
            }
                <Grid item xs = {8} style ={{padding:40}}>
                    <Card style ={{padding:10}} class = "AllBookSellBG" >
                        <Paper style = {{margin:5}}>
                            <div align = "left" style = {{padding:10}}>
                            <TextField
                            onChange ={searchUpdate}
                            id="searchText"
                            label="Search for ArtWorks"
                            value= {search}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton type="submit" aria-label="search" onClick = {() => serachData()}>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                                ),
                                endAdornment : (
                                  <InputAdornment position="end">
                                    <IconButton onClick = {() => clearText()}>
                                      <ClearIcon/>
                                    </IconButton>
                                  </InputAdornment>
                                )
                            }}
                            />
                            <Tooltip title="Filter">
                                <IconButton onClick = {handleClick} >
                                    <FilterListIcon/>
                                </IconButton>
                            </Tooltip>
                            </div>
                            <div>
                                <h2>Art Works</h2>
                            </div>

              {/* <Card containerStyle={{padding: 0}} >
                     {upload.map((value) =>
                            <List >  */}
                            {/* <div>
                              <Grid container spacing={3}>
                              {upload.length != 0 ? (upload.map(row => (
                                <Grid item xs ={12}>
                                  <Card>
                                    <CardHeader title={row.title}/>
                                    <CardMedia title ="ArtWorks"/>
                                    <img src={row.image} alt ="ArtWork" width="200" height="200"/>
                                    <CardContent>
                                      <Typography>{row.artistName}</Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                    <Link to={`/buyPainting/${value.id}`}>
                                      <Button size="small" class="btn" variant="contained">More Info & Buy</Button>
                                      </Link>
                                    </CardActions>
                                  </Card>
                                  </Grid>
                              ))):null }
                              </Grid>
                            </div> */}
            <List>
                {upload.map((value)=> (
                    <div id={upload.id} class="pricing-horizontal row col-10 m-auto d-flex shadow-sm rounded overflow-hidden bg-white">
                    <div class="col-md-3 text-center bg-secondary text-light py-4">
                        <i><img src={value.image} width="200px" height="200px" style={{"border-radius":"50%"}}/></i>
                          </div>
                        <div class="pricing-horizontal-body offset-lg-1 col-md-5 col-lg-4 d-flex align-items-center pl-5 pt-lg-0 pt-4">
                      <ul class="text-left px-4 list-unstyled mb-0 light-300 ">
                  <li><i class="bx bxs-circle me-2"></i>{value.title} </li>
                    <li><i class="bx bxs-circle me-2"></i>{value.price}</li>
          </ul>
          <Link to={`/buyPainting/${value.id}`}>
            <Button size="small" class="btn" variant="contained">More Info & Buy</Button>
            </Link>
      </div>
</div>
))}
    </List>

                             <Grid container spacing={1}
                            direction="column"
                            alignItems="center"
                            justify="center"
                            >
                               {/* <Typography>Page: {pageNo}</Typography>
                                <Pagination count={10} page={page} onChange={handlePageChange}/> */}
                                <TablePagination
                                    rowsPerPageOptions={10}
                                    // colSpan={3}
                                    count={count}
                                    rowsPerPage={rowsPerPage}
                                    setRowsPerPage={setRowsPerPage}
                                    page={page}

                                    // SelectProps={{
                                    //   inputProps: { 'aria-label': 'rows per page' },
                                    //   native: true,
                                    // }}
                                    onChangePage={handleChangePage}
                                    onHandleChange={handleChangeRowsPerPage}
                                    //onChangeRowsPerPage={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                    />
             </Grid>
                        </Paper>
                    </Card>
                </Grid>
                <Grid item xs = {1}/>
                </Grid>

          </div>
    )
}
export default AllUploadBuy;
