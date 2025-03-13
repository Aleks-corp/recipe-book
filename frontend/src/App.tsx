import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeInfo from "./components/RecipeInfo";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl p-6">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeInfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
