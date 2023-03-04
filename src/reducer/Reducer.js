
export const initialState = null;
export const reducer = (state, action)=>{
    if(action.type === "user"){
      return action.playload;
    }
    return state;
  }