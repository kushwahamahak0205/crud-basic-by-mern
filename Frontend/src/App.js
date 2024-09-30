
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./component/Home";
import Insert from "./component/Insert";
import Display from "./component/Display";
import Update from "./component/Update";
import Contact from "./component/Contact";
import Search from "./component/Search";
import EditDataShow from "./component/EditDataShow";
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={< Layout/>}>
        <Route path="Home" element={<Home/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Insert" element={<Insert/>}/>
        <Route path="Display" element={<Display/>}/>
        <Route path="Update" element={<Update/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Search" element={<Search/>}/>
        <Route path="/editdata/:id" element={<EditDataShow/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
        
        </>
    );
}
export default App;