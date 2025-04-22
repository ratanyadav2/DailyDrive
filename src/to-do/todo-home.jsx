import { Link } from "react-router-dom";


export function ToDoHome(){
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'600px'}}>
            <div style={{width:'500px'}} className="d-flex">
            <Link to='/login' className="btn btn-warning w-50">Login</Link>
            <Link  to='/register'  className="btn btn-dark w-50">Register</Link>
            </div>
        </div>
    )
}