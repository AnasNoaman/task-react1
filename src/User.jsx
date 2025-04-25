import CoustomBouton from "./Coustombutton";

function User(props){
    return(
        <div className="user card m-2" key={props.id}>
            <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">Email: {props.email}</p>
        </div>
        <div className="botton d-flex">
        <CoustomBouton type="primary" text="Details"/>
        <CoustomBouton type="danger" text="Delete"/>
        </div>
       
    </div>
    )

}
export default User;
