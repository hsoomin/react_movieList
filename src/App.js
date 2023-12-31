import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Navbar from './components/Navbar';
// import Movies from './pages/Movies';
import About from './pages/About';
import SearchDetail from './pages/SearchDetail'; 
import Search from './components/Search';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/movies' element={<Movies />} /> */}
        <Route path='/about/:id' element={<About />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/search/:movieId' element={<SearchDetail />} />
      </Routes>
    </div>
  );
}

export default App;
