import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function DeleteAppointment(){

    let params = useParams();
    let navigate = useNavigate();
    const [appointment, setappointment]=useState([{id:0,title:'',date:'',userid:''}]);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:4040/appointments/${params.id}`).then(response=>{
            setappointment(response.data);
        })
    },[])

    function handleDeleteClick(){
        axios.delete(`http://127.0.0.1:4040/appointments/${params.id}`)
        .then(()=>{
            console.log('Deleted...');
        });
        navigate('/dashboard');
    }

    return(
        <div className="container bg-light w-50 p-4">
            <h3>Delete Appointment</h3>
            <h5 className="my-3">Are you sure want to delete ? <br/><span className="text-danger my-3">{appointment.title}</span></h5>
            <button onClick={handleDeleteClick} className="btn btn-danger mx-2">Yes</button>
            <Link to="/dashboard" className="btn btn-warning">Cancel</Link>
        </div>
    )
}