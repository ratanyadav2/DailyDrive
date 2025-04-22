import { BrowserRouter, Route, Routes ,Link } from 'react-router-dom';
import '../to-do/todo-index.css';
import { ToDoHome } from './todo-home';
import { ToDoLogin } from './todo-login';
import { ToDoRegister } from './todo-register';
import { UserDashboard } from './user-dashboard';
import { AddAppointment } from './add-appointment';
import { DeleteAppointment } from './delete-appointment';
import { EditAppointment } from './edit-appointment';

export function ToDoIndex(){
    return(
        <div className="bg-image ">
            <BrowserRouter>
                <header className='p-2 text-white text-center'>
                    <h1> <Link to="/" className="btn btn-light w-50">Daily Drive </Link></h1>
                </header>
                <section>
                    <Routes>
                        <Route path='/' element={<ToDoHome/>} />
                        <Route path='login' element={<ToDoLogin/>} />
                        <Route path='register' element={<ToDoRegister />} />
                        <Route path='dashboard' element={<UserDashboard/>}/>
                        <Route  path='addappointment' element={<AddAppointment />}/>
                        <Route path='delete/:id' element={<DeleteAppointment/>} />
                        <Route  path='edit-appointment/:id' element={<EditAppointment/>}/>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}