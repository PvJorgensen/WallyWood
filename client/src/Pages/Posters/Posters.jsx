import { GenreNav } from "../../Components/Posters/GenreNav"
import { Outlet} from 'react-router-dom'
import styles from './Posters.module.scss'

export const Posters = () => {
  return (
    <div className={styles.posterPage}>
        <GenreNav />
        <Outlet />
    </div>
  )
}
