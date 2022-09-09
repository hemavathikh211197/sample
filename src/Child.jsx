function Child({x})
{
return(
    <div>
        {
        x.map((value,index)=>{
            return(<h1>value inside index {index} is {value} </h1>)
        })
        }
    </div>
)
}
export default Child