import axios from "axios"
import { useEffect, useState } from "react"
import styles from './PostersAll.module.scss'
import { Link } from "react-router-dom"

export const PostersAll = () => {
    const [apiData, setApiData] = useState([])
  
    const getData = async () => {
      const url=`http://localhost:3000/posters`
      const result = await axios.get(url)
      console.log(result.data);
      setApiData(result.data);
    }
    useEffect(() => {
      getData()
    }, [setApiData])

    return (
        <div>
            <div className={styles.PostersWrapper}>
            {apiData && apiData.map(item => {
                const array_genre = item.genres.map(a=> a.title)
                return (
                    <div className={styles.indhold} key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.name}</h4>
                        <p>Kr. {item.price}.00</p>
                        <a href="">Læg i kurv</a>
                    </div>
                )
            })}
        </div>
        </div>
    )
}
