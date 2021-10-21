import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext"

function GifList(props) {
  const { APIcall } = useContext(GlobalContext)
  // const { APIcall } = this.props

  const [gifs, setGifs] = useState([])


  APIcall()



  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     gifs : []
  //   }
  // }


  // this.setState({
  //   gifs: APICall.data.results
  // })


  return (
    <div>
      {/* {gifs.map((gif) => {
        <div>
          <img src={gif.images.fixed_height} alt="" />
          <p>{gif.title}</p>
        </div>
      })
      }    */}
    </div>
  )
}

export default GifList
