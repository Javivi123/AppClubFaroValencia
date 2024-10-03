import {BrowserRouter, Route, Routes} from "react-router-dom";
import Init from "./Components/Init";
function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Init />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;