import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/pages/Home";
import RecipePage from "/pages/RecipePage";
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 p-4">
        <div className="max-w-7xl mx-auto p-4">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-1">App de Recettes</h1>
        </div>
        
       
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/recette/:id" element={<RecipePage />}/>
        </Routes>
      </div>
    </BrowserRouter>
   
    
  )
}

export default App

