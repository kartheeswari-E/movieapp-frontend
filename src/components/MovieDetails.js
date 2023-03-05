import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { API } from './Global';
export function MovieDetails() {
  const { id } = useParams();
  const [film, setFilm] = useState({});
  useEffect(() => {
    fetch(`${API}/films/${id}`)
      .then((data) => data.json())
      .then((mv) => setFilm(mv));
  }, [id]);
  let changes = {
    color: film.rating >= 8.5 ? "green" : "red"
  };
  const navigate = useNavigate();
  return <div>


    <iframe
      width="100%"
      height="600px"
      src={film.trailer}
      title="Ponniyin Selvan Trailer | #PS1 Tamil | Mani Ratnam | AR Rahman | Subaskaran | Madras Talkies | Lyca"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>

    </iframe>
    <div className="films-details-container">
      <div className="films-specs">
        <h2 className="films-name">{film.name}</h2>
        <p style={changes} className="films-rating">🌟{film.rating} </p>

      </div>
      <p className="films-summary">{film.summary}</p>
      <Button startIcon={<ArrowBackIcon />} variant="contained" onClick={() => navigate(-1)}>BACK</Button>
    </div>
  </div>;



}
