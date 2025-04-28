import CoustomBouton from "./Coustombutton";
import CoustomInput from "./CoustomInput";
function AddUser() {
    return(
    <>
    <form>
            <CoustomInput text="Name" forhtml="name" type="text" />
            <CoustomInput text="Email" forhtml="email" type="email" />
            <CoustomInput text="Age" forhtml="age" type="number" />
        </form>
        <CoustomBouton text="Add" type="success" />
        </>
    )
}
export default AddUser;