import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const PosterList = () => {
  const [apiData, setApiData] = useState([])
  const {genre} = useParams()

  const getData = async () => {
    const url=`http://localhost:3000/posters/list_by_genre/${genre}`
    const result = await axios.get(url)
    console.log(result.data);
    setApiData(result.data);
  }
  useEffect(() => {
    getData()
  }, [setApiData])

  return (
    <div></div>
  )
}
