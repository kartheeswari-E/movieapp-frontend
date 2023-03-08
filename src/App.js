import './App.css';
import React from 'react'
import {useState} from 'react'
import { Routes, Route, Navigate,useNavigate } from "react-router-dom";
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { AddMovie } from './components/AddMovie';
import { MovieList } from './components/MovieList';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './components/MovieDetails';
import { BasicForm } from './components/BasicForm';
import { EditMovies } from './components/EditMovies';
function App() {
  const [films]= useState([]);
  const navigate=useNavigate();
  const [mode ,setMode]=useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
 
 
  return( 
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{minHeight : "100vh"}} elevation={4} >
  <div className='App'>
   
   <AppBar position="static">
        <Toolbar>
        <Button onClick={()=>navigate("/")}
         color="inherit">Home</Button>
        <Button  onClick={()=>navigate("/movies")}
        color="inherit">Movies</Button>
        <Button  onClick={()=>navigate("/addmovie")}
        color="inherit">Add Movies</Button>
        <Button  
        sx={{marginLeft:"auto"}}
        startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        onClick={()=>setMode( mode==="light"?"dark":"light")}
        color="inherit">{mode==="light"?"dark":"light"} Mode</Button>
        </Toolbar>
      </AppBar>

<section className='route-container'>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/films" element={<Navigate replace to="/films"/> } />
        <Route path="/movies" element={<MovieList data={films}/> } />
        <Route path="/movies/:id" element={<MovieDetails /> } />
        <Route path="/movies/edit/:id" element={<EditMovies /> } />
        <Route path="/basicform" element={<BasicForm /> } />
        <Route path="/addmovie" element={<AddMovie /> } />
        <Route path="*" element={<NotFound /> } />
        
      </Routes>
      </section>
      
</div>
</Paper>
</ThemeProvider>

  );
    }
export default App;