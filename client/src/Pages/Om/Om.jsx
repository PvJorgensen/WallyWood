import { PosterList } from '../../Components/Posters/PosterList'


export const Om = () => {
  return (
    <>
    <GenreNav />
    <Outlet />
    <PosterList></PosterList>
    </>
  )
}
