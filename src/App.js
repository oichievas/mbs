import "./App.css"
import Main from "./pages/Main/Main"
import { Routes, Route } from "react-router"
import Frontend from "./pages/Frontend/Frontend"
import Nav from './Components/Nav/Nav'
import Design from "./pages/Design/Design"
import Backend from "./pages/Backend/Backend"
import VideoEdit from "./pages/VideoEdit/VideoEdit"
import CasesPage from "./pages/CasesPage/CasesPage"
import Prices from "./pages/Prices/Prices"

const App = () => {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/" exact element={<Main/>}/>
                <Route path="/frontend" exact element={<Frontend/>}/>
                <Route path="/ux-ui" exact element={<Design/>}/>
                <Route path="/backend" exact element={<Backend/>}/>
                <Route path="/videoediting" exact element={<VideoEdit/>}/>
                <Route path="/cases" exact element={<CasesPage/>}/>
                <Route path="/prices" exact element={<Prices/>}/>
            </Routes>
        </>
    )
}

export default App