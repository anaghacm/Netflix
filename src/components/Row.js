import React, { useState, useEffect } from 'react'
import instance from '../baseUrl'
import '../components/Row.css'

function Row({isLargeRow, title, fetchUrl }) {

    //Movies state
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    async function fetchData() {
        const result = await instance.get(fetchUrl)
        setMovies(result.data.results)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='movies'>
                {
                    movies.map(movie => (
                        <img className={`movieimg ${isLargeRow && 'largeMovie'}`}
                            src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    //     <img className='movieimg'
                    //     src={`${base_url}${movie.poster_path}`}
                    //     alt={movie.name}
                    // />
                    ))
                }
            </div>
        </div>
    )
}

export default Row