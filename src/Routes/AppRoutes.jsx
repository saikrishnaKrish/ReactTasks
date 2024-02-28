
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import TasksComponent from '../components/CRUD TASKS';
import PageNotFound from '../components/PageNotFound';
import Home from '../components/Home';

const AppRoutes = () => {
  return (
    <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
                <Route path='/userDetails' element={<UserDetails/>}/>
                <Route path='/todoList' element={<TasksComponent/>}/>
                <Route path='/*' element={<PageNotFound/>} />
            </Routes>
    </Router>
  )
}

export default AppRoutes