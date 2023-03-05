import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import {  useNavigate} from 'react-router-dom';

 export function Movie({ movie ,id,deleteButton,EditButton}) {
  const navigate=useNavigate();
  let [toggle, setToggle] = useState(false);
  let changes = {
    color: movie.rating >= 8.5 ? "green" : "red"
  };
  return <>

    <Card className="films-container">
      <img src={movie.poster} alt={movie.name} className="films-poster" />
      <CardContent><div className="films-specs">
        <h2 className="films-name">{movie.name}
          <IconButton 
          color="primary"
           onClick={() => setToggle(!toggle)} aria-label="toggle-summary">
            {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton 
          color="primary" 
          onClick={() => navigate(`/movies/${id}`)} 
          aria-label="Movie-details">
           <InfoIcon /> 
          </IconButton>
          </h2>
         <p style={changes} className="films-rating">🌟{movie.rating} </p>
      </div>


        {toggle ? null : <p className="films-summary">{movie.summary}</p>}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton} {EditButton}
      </CardActions>

    </Card>
  </>;
}
