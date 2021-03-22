
import { createStyles} from '@material-ui/core/styles';


export const useStyles =  function(theme){
    const {palette ,breakpoints}     =   theme;
    return createStyles({
        root:{
            width:"65%",
            height:"100%",
            margin:"auto",
            marginBottom:"2%",
            [breakpoints.down("xs")]:{
                margin:"2%",
                width:"95%"
            }
        },
        imageContainer:{
            // textAlign:"center"
        },
        paperroot:{
            padding:"10px",
            marginTop:"10px"
        },
        registerbtn:{
            backgroundColor:"#DD2A1B",
            color:"#ffff",
            textTransform: "none",
            marginTop:"1%",
            marginBottom:"2%",
            fontSize:'small',
            "&:hover":{
                backgroundColor: "#DD2A1B",
            }
          },
    })
}