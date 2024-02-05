import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styles from '../Posters/PostersAll.module.scss'


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
  }, [genre])

  return (
    <div>
        <div className={styles.PostersWrapper}>
        {apiData && apiData.map(item => {
            const array_genre = item.genres.map(a=> a.title)
            return (
                <div className={styles.indhold} key={item.id}>
                  <Link to={`${item.slug}`}>
                    <img src={item.image} alt={item.title} />
                    </Link>
                    <h4>{item.name}</h4>
                    <p>Kr. {item.price}.00</p>
                    <a className={styles.kurv} href="">Læg i kurv</a>
                </div>
            )
        })}
    </div>
    </div>
)
}
