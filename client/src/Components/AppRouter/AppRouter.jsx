import { Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home/Home"
import { Posters } from "../../Pages/Posters/Posters"
import { PosterDetails } from "../Posters/PosterDetails"
import { PosterList } from "../Posters/PosterList"
import { PageNotFound } from "../../Pages/PageNotFound/PageNotFound"





export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/posters' element={<Posters />}>
                <Route path=':genre' element={<PosterList />} />
                <Route path=':genre/:poster' element={<PosterDetails />} />
            </Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        
        
    )
}