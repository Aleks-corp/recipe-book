import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeListPage from "../pages/RecipeListPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6">
        <Router>
          <Routes>
            <Route path="/" element={<RecipeListPage />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
