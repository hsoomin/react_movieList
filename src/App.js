import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Users from './pages/Users';
import User from './pages/User';
import About from './pages/About';



function App() {
  

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/movie_list' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<User/>}/>
        <Route path='/about/:id' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
