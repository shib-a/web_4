import '../App.css';
import "react-router-dom";
import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import Main from "./Main";
import Welcome from "./Welcome";
import NotFound from "./NotFound";
import userStore from "../utils/userStore";

function App() {
   return(
       <Router>
           <Routes>
               <Route path={"/main"} element={
               userStore.getState().isLoggedIn?(<Main/>):(
                   <Navigate to="/" replace/>
               )
               }/>
               <Route path={"/"} element={<Welcome/>}/>
               <Route path={"*"} element={<NotFound/>}/>
           </Routes>
       </Router>
   );
}

export default App;