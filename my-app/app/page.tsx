"use client"
import React, { useState, useEffect, createContext, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import MyCard from './card/card';
import FormNavBar from './form/form';
import { Row } from 'react-bootstrap';


export const ThemeContext = createContext('light');

export default function Home() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState<null | string>("")
  const [theme, setTheme] = useState('light');

  const handleSearchInput = (event) => {
    console.log("This is the event ", event.target.value)
    setTitle(event.target.value)
  }

  useEffect(() => {
    const getMovies = async () => {
      await axios.get(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${title}`)
        .then((res) => {
          console.log(res.data);
          setMovies(res.data.Search || []);
        })
        .catch((err) => console.log(err))
    }
    getMovies()
  }, [title])

  return (
    <div className={`body-${theme}`} style={{ minHeight: '60rem !important' }}>
      <ThemeContext.Provider value={theme}>
        <Container fluid="md" >
          <FormNavBar handleSearchInput={handleSearchInput} value={title} theme={theme} setTheme={setTheme}/>
          <Row style={{ margin: '0.5rem' }}>
            {movies.length > 0 && movies.map((movie) => (
              <MyCard movie={movie}/>
            ))} 
          </Row>
        </Container>
      </ThemeContext.Provider>
    </div>
  );
}
