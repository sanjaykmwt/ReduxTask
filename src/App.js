import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import {compose} from "recompose";
import {useStyles} from "./appStyle";
import {Typography,Paper,Button} from "@material-ui/core";
import Outlined from "./common/input/Outlined";
import {connect} from "react-redux";
import UserAction from './store/actions/user';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      name_error:''
    }
  }


handleAdd(){
  var name= this.state.name;
  let postData = {
    name:name,
    color:false
  }
  this.setState({name:''})
  this.props.add(postData)
}

handleColor(index){
  this.props.colorUpdate(index)
}


  render(){
    const {classes} = this.props
    var state = this.state;
    let userData = this.props.userReducer.authuserDetails
    let lateData = [];
    if(userData.length!==0){
      lateData=userData;
    }
    return(
      <div className={classes.root}>
          <div className={classes.imageContainer}>
            <Typography variant={"h5"} className={classes.properttitle1}>
              Add Data
            </Typography>
            <Paper className={classes.paperroot}>
              <Outlined
                id="name"
                type="text"
                placeholder="Name"
                required={false}
                value={state.name}
                error={state.name_error.trim().length !== 0}
                helperText={state.name_error}
                onChange={(event) =>{
                  this.setState({'name':event.target.value,'name_error':''})
                }}
              />
              <Button  variant="contained" className={classes.registerbtn}  onClick={()=>{
                  this.handleAdd()
                }} color="primary">
                  Register
              </Button>
              <div className={classes.imageContainer}>
                {
                  lateData.length!=0&& lateData.map((item,index)=>{
                    return <Typography key={index} style={{color:item.color===true?"#03aa03":"#000000",cursor:"pointer"}} onClick={()=>{
                      this.handleColor(index)
                    }}>{index+1}&nbsp;{item.name}</Typography>
                  })
                }
              </div>
            </Paper>
          </div>
      </div>
    )
  }
}


export default compose(
  withRouter,
  withStyles(useStyles)
)(connect((state, props) => {
  return {
    userReducer:state.user,
  };
}, {
    add:UserAction.add,
    colorUpdate:UserAction.colorUpdate
})(App))
