import { Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home/Home"
import { Posters } from "../../Pages/Posters/Posters"
import { PosterDetails } from "../Posters/PosterDetails"
import { PosterList } from "../Posters/PosterList"
import { PageNotFound } from "../../Pages/PageNotFound/PageNotFound"
import { Om } from "../../Pages/Om/Om"
import { Login } from "../../Pages/Login/Login"





export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />}/>
            <Route path='/posters' element={<Posters />}>
                <Route path=':genre' element={<PosterList />} />
                <Route path=':genre/:poster' element={<PosterDetails />} />
            </Route>
            <Route path="/Om" element={<Om></Om>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        
        
    )
}