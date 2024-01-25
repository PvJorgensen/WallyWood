import { GenreNav } from "../../assets/Components/PosterComponents/GenreNav"
import { Outlet} from 'react-router-dom'

export const Posters = () => {
  return (
    <div>
        <GenreNav />
        <Outlet />
    </div>
  )
}
