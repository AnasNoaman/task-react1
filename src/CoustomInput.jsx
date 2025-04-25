function CoustomInput(props){
 return (<div className=" mb-3  m-2">
    <label className="form-label" htmlFor= {` ${props.forhtml} ` }>{props.text}</label>
   <input className="form-control" type="{` ${props.type} ` }" id="{` ${props.forhtml} ` }" name="{` ${props.text} ` }"></input>
   </div>
 )
}
export default CoustomInput;