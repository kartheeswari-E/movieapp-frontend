import React from 'react';
import { Movie } from './Movie';
import {useState,useEffect} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { API } from './Global';
export function MovieList() {
  const navigate = useNavigate();
  const [films,setFilms]= useState([])
  const getMovies = () => {
    fetch(`${API}/films`,
    {   method:"GET",
  })

    .then((data)=>data.json())
    .then((mvs)=>setFilms(mvs));
  };

  useEffect(()=>getMovies(),[]);

  const deleteMovie=(id)=>{
        fetch(`${API}/films/${id}`,
        {
          method:"DELETE",
        }).then(()=>getMovies());
        
        
  }
  return <>
    <div className="films-list-container">
      {films.map((mv) => (
      <Movie  key={mv.id} 
      movie={mv} 
      id={mv.id} 
      deleteButton=
      {<IconButton onClick={()=>deleteMovie(mv.id)} color="error" aria-label="delete">
      <DeleteIcon />
    </IconButton>}
    EditButton=
    {<IconButton  onClick={() => navigate(`/movies/edit/${mv.id}`)}  color="error" aria-label="edit">
    <EditIcon />
</IconButton>}
      />))}
    </div>
  </>;
}
