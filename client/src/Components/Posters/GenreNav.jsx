import { useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"
import styles from './GenreNav.module.scss'

export const GenreNav = () => {
  const [apiData, setApiData] = useState([])

  const getData = async () => {
    const url=`http://localhost:3000/genre`
    const result = await axios.get(url)
    setApiData(result.data);
  }
  getData()
  return (
    <nav>
      <h2>Plakater</h2>
      <ul>
        <h3>Filtre</h3>
        {apiData.map(item => {
          return (
            <li key={item.id}><NavLink to={item.slug}>{item.title}</NavLink></li>
          )
        })}
      </ul>
    </nav>
  )
}
