import { useState } from "react"

import Userslist from './Userslist'
function Home(){
    const [usersName,setusersName]= useState(["pooja","karthik","shwetha","gunda","gundi"])
    return(
        <div>{
        usersName.map((user)=>{
            return (<h1>User Name:{user}</h1>)
        })
        </div>
    )
}

export default Userslist