import {useReducer} from 'react'

function reducer (state,action){
    switch (action.type){
        case 'increment':
        return {count : state.count + 1};
         case 'decrement':
         return{ count : state.count -1};
         default: throw new Error ();
    }
}
const initialState={count:0}

const UseReducer = () =>{
const [state, dispatch] = useReducer(reducer, initialState);

return(
    <div>
        <div> count : { state.count}
        <button onClick={()=> dispatch({type :'decrement'})}>-</button>
        <button onClick={()=> dispatch({type :'increment'})}>+</button>


        </div>
    </div>
)
}
export default UseReducer;