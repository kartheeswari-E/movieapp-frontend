import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API } from './Global';
import React ,{useEffect,useState}from 'react';
 import { useParams } from "react-router-dom"

const movieValidationSchema = yup.object({
    name: yup
        .string()
        .required("Why not fill this name😅")
        .min(1, "need a longer name🤔"),
    poster: yup
        .string()
        .required("Why not fill this poster😅")
        .min(4, "need a longer poster🤔"),
    rating: yup
        .number()
        .required("Why not fill this rating😅")
        .min(0, "need a bigger rating🤔").max(10),
    summary: yup
        .string()
        .required("Why not fill this summary😅")
        .min(20, "need a longer summary🤔"),
    trailer: yup
        .string()
        .required("Why not fill this trailer😅")
        .min(4, "need a longer trailer🤔")
})


export function EditMovies() {
  const {id}=useParams();
const [film, setFilm] = useState(null);
  useEffect(() => {
    fetch(`${API}/films/${id}`)
      .then((data) => data.json())
      .then((mv) => setFilm(mv));
  }, [id]);
  return film ? <EditMoviesForm film={film}/> : "loading";
  }
  export function EditMoviesForm({film}){
    const { handleSubmit, values, handleChange, touched, handleBlur, errors } = useFormik({
        initialValues: {
            name: film.name,
            poster: film.poster,
            rating: film.rating,
            summary: film.summary,
            trailer: film.trailer
        },
        validationSchema: movieValidationSchema,
        onSubmit: (editMovieList) => {
            console.log('onSubmit', editMovieList)
            EditMovie(editMovieList)
        }
    })
    const navigate = useNavigate()
    const EditMovie = (editMovieList) => {
        fetch(`${API}/films/${film.id}`, {
            method: "PUT",
            body: JSON.stringify(editMovieList),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => navigate('/movies'))
            .catch((n) => console.log('error occurred' + n))
    };
    return <>
        <Box onSubmit={handleSubmit} className="add-movie-form" component="form"  >
            <TextField
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name ? errors.name : null}
                label="Name" variant="outlined" />


            <TextField
                name="poster"
                value={values.poster}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.poster && errors.poster}
                helperText={touched.poster && errors.poster ? errors.poster : null}
                label="Poster" variant="outlined" />

            <TextField
                name="rating"
                value={values.rating}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.rating && errors.rating}
                helperText={touched.rating && errors.rating ? errors.rating : null}
                label="Rating" variant="outlined" />

            <TextField
                name="summary"
                value={values.summary}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.summary && errors.summary}
                helperText={touched.summary && errors.summary ? errors.summary : null}
                label="Summary" variant="outlined" />
            <TextField
                name="trailer"
                value={values.trailer}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.trailer && errors.trailer}
                helperText={touched.trailer && errors.trailer ? errors.trailer : null}
                label="Trailer" variant="outlined" />
            <Button type="Submit" variant="contained">Submit</Button>
        </Box>
    </>;
}

