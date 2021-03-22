import UserAction from "../actions/user";

const initState = {
    status:false,
    inProg:false,
    error:null,
    authuserDetails:[],
};

export default (state = initState, action) => {
    let payload = action.payload;
    switch (action.type) {

        case UserAction.ACTION_USER_LOGIN_START:
            return {...state , inProg:true};
        case UserAction.ACTION_USER_REGISTER_END:
            var error   = null;
            if(action.payload !== undefined && action.payload.error !== undefined){
                error   =   action.payload.error;
            } 
            // var iauthuserDetails  =   state.authuserDetails;
            if(payload.data !== undefined){
                state.authuserDetails.push(payload.data)
            }
            return {...state , inProg:false,error:error,authuserDetails:state.authuserDetails};
              
        case UserAction.ACTION_USER_GET:
            return {...state , inProg:true};
        case UserAction.ACTION_USER_GET_START:
        
            if(payload.clr !== undefined){
                state.authuserDetails.forEach((item,index)=>{
                    if(payload.clr===index){
                        state.authuserDetails[index].color=!state.authuserDetails[index].color
                    }
                })
            }
            return {...state , inProg:false,error:error,authuserDetails:state.authuserDetails};
              
        default:
            return state;
    }
}