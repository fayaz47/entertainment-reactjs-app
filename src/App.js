import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import SimpleBottomNavigation from './components/MainNav'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Trending from './Pages/Trending/Trending';
import Series from './Pages/Series/Series';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
function App() {
  return (
   
    <>
     <BrowserRouter>
    <Header /><div className="app">
      <Container> 
        <Routes>
        <Route path = '/' component={Trending} exact/>
          <Route path = '/movies' component={Movies}/>
          <Route path = '/series' component={Series}/>
          <Route path = '/search' component={Search}/>
        </Routes>
      </Container>
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>

    </>
  );
}

export default App;
