// Importar los componentes
import ShowPost from "./components/ShowPost.jsx"
import CreatePost from "./components/CreatePost.jsx"
import EditPost from "./components/EditPost.jsx"

import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return(
      <div className="App">
          <header className="App-Header"></header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ShowPost/>}/>
              <Route path="/create" element={<CreatePost/>}/>
              <Route path="/edit/:id" element={<EditPost/>}/>
            </Routes>
          </BrowserRouter>
      </div>
  )
}
export default App