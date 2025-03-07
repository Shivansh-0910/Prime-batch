import HomePage from "./pages/homepage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter,Route,Routes } from "react-router-dom";

const App=()=>{
  return(
    <BrowserRouter>
   <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/search" element={<SearchPage />} />
     <Route path="*" element={<NotFoundPage/>}/>
     
   </Routes>
 </BrowserRouter>
 )
}

export default App;