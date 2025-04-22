import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



export  function ToDoRegister(){

    let navigate= useNavigate();

    const formik = useFormik({
        initialValues:{
            userid:'',
            password:'',
            email:''
        },
        onSubmit :(user)=>{
            axios.post(`http://127.0.0.1:4040/users`,user).then(()=>{
                console.log('Posted...');
            })
            alert('Registered Successfully');
            navigate('/login');
        }
    })

    return(
        <div className="container p-4 w-50 bg-light"> 
            <h3>Register</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} className="form-control" name="userid" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} className="form-control" name="password" /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" onChange={formik.handleChange}  className="form-control" name="email" /></dd>
               </dl>
               <button className="btn btn-warning">Register</button>
                <p className="mt-4">Existing User <Link to='/login'>Login</Link> </p>
                
            </form>
        </div>
    )
}