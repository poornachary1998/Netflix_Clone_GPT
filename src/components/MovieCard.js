import React from 'react'
import { Img_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 pr-4'>
        <img alt='Movie_Card' src={ Img_URL + posterPath}></img>
    </div>
  )
}

export default MovieCard