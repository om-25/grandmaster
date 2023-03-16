import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/movies" exact element={<MoviesList/>} />
                <Route path="/movies/create" exact element={<MoviesInsert/>} />
                <Route
                    path="/movies/update/:id"
                    exact
                    element={<MoviesUpdate/>}
                />
            </Routes>
        </Router>
    )
}

export default App
       