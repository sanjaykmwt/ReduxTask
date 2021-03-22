import React from 'react';
import { withStyles,createStyles, MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import {FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton,FormHelperText} from "@material-ui/core"
import PropTypes from 'prop-types';

const styles    =   (theme)=>createStyles({
    root: {
        border: "1px solid #D8D8D8 !important",
        background:"#FFFFFF",
        fontSize:"small",
        "& .MuiOutlinedInput-root" :{
            height: "41px",
            border: "1px solid #D8D8D8 !important",
            borderRadius: "4px"
        }
    },
    adornedStart:{
        padding:"0px"
    }
});
const muiTheme = createMuiTheme({
    overrides: {
      MuiOutlinedInput:{
            root:{
                border: "2px solid #D8D8D8 !important",
                borderRadius: "5px",
            },
            PrivateNotchedOutline:{
                root:{
                    borderStyle:"none"
                }
                
            },
            number: {
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                  "-webkit-appearance": "none",
                  margin: 0
                }
              },
              input: {
                "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                  "-webkit-appearance": "none",
                  margin: 0
                }
              }
        },
        PrivateNotchedOutline:{
            root:{
                borderStyle:"none"
            }   
        },
    },
  });

class Outlined extends React.Component {
    render(){
        const {classes} = this.props;
                return <FormControl  variant="outlined" fullWidth>
                    <InputLabel 
                    error={this.props.error}
                    htmlFor={this.props.id}>{this.props.label}{this.props.required && <span style={{'color':'red'}}>&nbsp;*</span>}</InputLabel>
                    <MuiThemeProvider theme={muiTheme}> 
                        <OutlinedInput
                            margin="dense"
                            id={this.props.id}
                            type={this.props.type}
                            value={this.props.value}
                            autoFocus={this.props.autoFocus}
                            onChange={this.props.onChange}
                            error={this.props.error}
                            disabled={this.props.disabled}
                            readOnly={this.props.readOnly}
                            onKeyDown={this.props.onKeyDown}
                            classes={{root:classes.root,adornedStart:classes.adornedStart}}
                            startAdornment={<InputAdornment position={'start'}>&nbsp;</InputAdornment>}
                            endAdornment={
                                this.props.icon != null && <InputAdornment position={this.props.icon_position}>
                                <IconButton
                                    tabIndex={-1}
                                    onClick={this.props.onIconClick}
                                    edge="end"
                                >
                                    {this.props.icon}
                                </IconButton>
                                </InputAdornment>
                            }
                            //labelWidth={this.props.labelWidth}
                            placeholder={this.props.placeholder}
                            multiline={this.props.multiline}
                            rows={this.props.rows}
                        />
                    </MuiThemeProvider>
                    {this.props.helperText.trim().length > 0 && <FormHelperText
                        error={this.props.error}
                    >{this.props.helperText}</FormHelperText>}
                </FormControl>
    }
}

Outlined.defaultProps = {
    labelWidth:70,
    type:'text',
    value:null,
    onChange:null,
    onKeyDown:null,
    icon:null,
    autoFocus:false,
    rows:null,
    icon_position:'end',
    onIconClick:null,
    placeholder:"",
    required:false,
    error:false,
    disabled:false,
    helperText:'',
    multiline:false

}

Outlined.propTypes   =   {
    id:PropTypes.string.isRequired,
    label:PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func,
    onKeyDown:PropTypes.func,
    icon:PropTypes.element,
    icon_position:PropTypes.oneOf(['end', 'start']),
    onIconClick:PropTypes.func,
    placeholder:PropTypes.string,
    autoFocus:PropTypes.bool,
    required:PropTypes.bool,
    error:PropTypes.bool,
    multiline:PropTypes.bool,
    helperText:PropTypes.string,
    disabled:PropTypes.bool,
    rows:PropTypes.number
};

export default withStyles(styles)(Outlined)