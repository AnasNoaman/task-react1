function CoustomBouton(props){
    return (
    <button className= {` btn btn-outline-${props.type} btn-lg rounded-pill m-2 ` } >{props.text}</button>
)
}
export default CoustomBouton;