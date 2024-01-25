import axios from "axios"
import { useEffect, useState } from "react"
import styles from './RandomPosters.module.scss'

export const RandomPosters = () => {
    const [apiData, setApiData] = useState([])
  
    const getData = async () => {
      const url=`http://localhost:3000/posters?sort_key=random&limit=2`
      const result = await axios.get(url)
      console.log(result.data);
      setApiData(result.data);
    }
    useEffect(() => {
      getData()
    }, [setApiData])

    return (
        <div>
            <h2>Sidste nyt...</h2>
            <div className={styles.randomPosters}>
            {apiData && apiData.map(item => {
                return (
                    <div className={styles.indhold} key={item.id}>
                        <h3>{item.className}</h3>
                        <img src={item.image} alt={item.title} />
                    </div>
                )
            })}
        </div>
        </div>
    )
}
