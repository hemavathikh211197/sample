import { useState } from 'react'
import Child from './Child'
function Home()
{
//     let [value,setValue] = useState(0);
//     let counter=(counterVal)=>{
//         setValue(value+counterVal);
//     }
// //     let increase=()=>{
// // setValue(value+1);
// //     }
// //     let decrease=()=>{
// // setValue(value-1);
// //     }

//     return(
//         <div>
//             <h1>{value}</h1>
//             <button onClick={()=>{counter(1)}}>+</button>
//             <button onClick={()=>{counter(-1)}}>-</button>


//             {/* <button onClick={increase}> + </button>
//             <button onClick={decrease}> - </button> */}
//         </div>
//     )

//2


const [x,setX]=useState([10,20,30,40]);
return(
    <div>
<Child x={x}/>
    </div>
)
}
export default Home