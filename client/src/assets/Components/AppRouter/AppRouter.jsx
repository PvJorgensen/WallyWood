import { Route, Routes } from "react-router-dom"
import { Home } from "../../../Pages/Home/Home"
import { Posters } from "../../../Pages/Posters/Posters"
import { PosterDetails } from "../PosterComponents/PosterDetails"
import { PosterList } from "../PosterComponents/PosterList"





export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/posters' element={<Posters />}>
                <Route path=':genre' element={<PosterList />} />
                <Route path=':genre/:poster' element={<PosterDetails />} />
            </Route>
        </Routes>
        
        
    )
}