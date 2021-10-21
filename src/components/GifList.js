import React, { useState, useEffect } from 'react'
// import { GlobalContext } from "../context/GlobalContext"
import Axios from "axios"

function GifList() {
  // const { APIcall } = useContext(GlobalContext)

  const [gifs, setGifs] = useState([])


  const callAPI = async () => {
    const call = await Axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=dBvFvLLl1LEJoFCa8LHBkbcyBqSPmz36&limit=25&rating=g`)
    const result = call.data.data
    console.log(result)
    setGifs(result)
  }



  useEffect(() => {
    callAPI()
  }, []);

  console.log(gifs)
  return (
    <div>
      {
        gifs.map((gif) => (
          <div key={gif.name}>
            <img src={gif.images.fixed_height.webp} alt={gif.title} />
            <p>{gif.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default GifList
