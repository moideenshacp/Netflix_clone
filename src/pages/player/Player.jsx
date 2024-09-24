import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams()
  const navigate = useNavigate();

  const [apiData,setApiData] = useState([{
    name:'',
    key:'',
    type:'',
    published_at:''
  }])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGI5YTc0ZjdjNGYxNDEyZmQ2MTcyOWY5YzRjZjg2NyIsIm5iZiI6MTcyNTMzNTk5Ny4zMTU2Niwic3ViIjoiNjZkNWJlMWY2YzQyMWRkYzM0NmFiNTI5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.wzcvnD2t1VWB3GHjKA9tA9Bf3iwLEuPTE41LT5HhnRA'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])
  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back_arrow-icon" onClick={()=>{navigate('/')}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
          <p>{apiData.published_at}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
      </div>
      
    </div>
  )
}

export default Player
