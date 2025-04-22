import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function UserDashboard(){

    let navigate = useNavigate();
    const [cookies,setcookies,removecookies] = useCookies(['userid']);
    const [appointment, setappointment] = useState([{id:0, title:'',date:'',userid:''}]);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:4040/appointments`)
        .then(response=>{
            let user_appointment = response.data.filter(appointment=>appointment.userid===cookies['userid']);
            setappointment(user_appointment);
        })
    },[])

    function handleSignout(){
        removecookies('userid');
        navigate('/');
    }

    return(
        <div className="container bg-light w-5 0 p-4"> 
            <h3 className="d-flex justify-content-between"><span>{cookies['userid']}</span><span>Dashboard</span><span><button className="btn btn-link" onClick={handleSignout}>SignOut</button></span></h3>
            <Link  to='/addappointment' className="btn btn-success bi bi-calendar-event">Add Appointment</Link>
            <div className="mt-2 overflow-auto " style={{height:'400px'}} >
                {
                    appointment.map(appointment=>
                    <div key={appointment.id} className="alert m-2 alert-success">
                        <h4>{appointment.title}</h4>
                        <p>{appointment.date}</p>
                        <div>
                            <Link to={`/edit-appointment/${appointment.id}`} className="bi bi-pen-fill btn btn-warning"></Link>
                            <Link to={`/delete/${appointment.id}`} className="bi bi-trash-fill btn btn-danger mx-2"></Link>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}