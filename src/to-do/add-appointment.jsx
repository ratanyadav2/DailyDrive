import { useFormik } from "formik";
import { useCookies } from "react-cookie"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function AddAppointment(){

    const [cookies,setcookies,removecookies]= useCookies(['userid']);
    let navigate = useNavigate();

    const formik =useFormik({
        initialValues:{
            title:'',
            date:'',
            userid:cookies['userid']
        },
        onSubmit:(appointments)=>{
            axios.post(`http://127.0.0.1:4040/appointments` , appointments)
            .then(()=>{
                console.log('Appointment Added ...');
            })
            navigate('/dashboard')
        }
    })

    return(
        <div className="container bg-light w-50 p-4">
            <h3>Add Appointment  - {cookies['userid']}</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Title</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="title" className="form-control" /></dd>
                    <dt>Date</dt>
                    <dd><input type="date" onChange={formik.handleChange} name="date" className="form-control" /></dd>
                </dl>
                <button type="submit" className="btn btn-success">Add </button>
                <Link  to='/dashboard' className='btn btn-warning mx-2'>Cancel</Link>
            </form>
        </div>
    )
}