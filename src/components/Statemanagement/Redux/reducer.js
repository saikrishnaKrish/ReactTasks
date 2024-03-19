import { FETCH_DATA_FAILUTE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actionTypes"

const initialState={
    data:[],
    isLoading:false,
    error:"",
    amount:0,

}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading:true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                data:action.payload,
                error:''
            }
        case FETCH_DATA_FAILUTE:
            return {
                ...state,
                isLoading:false,
                error:action.payload
            }
        default:return state
    }
}

export default reducer;
