<<<<<<< HEAD
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import SavedPage from "./pages/SavedPage.jsx";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🍔 FoodFacts</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/saved" style={{ margin: "10px" }}>Saved</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:barcode" element={<DetailPage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </div>
  );
}

export default App;
=======
import { useReducer } from "react"
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"
import SavedPage from "./pages/SavedPage"

function savedReducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.find((p) => p.code === action.product.code)) return state
      return [...state, action.product]

    case "REMOVE":
      return state.filter((p) => p.code !== action.code)

    default:
      return state
  }
}

function App() {
  const [saved, dispatch] = useReducer(savedReducer, [])

  return (
    <div>
      <NavBar savedCount={saved.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/product/:barcode"
          element={<DetailPage saved={saved} dispatch={dispatch} />}
        />

        <Route
          path="/saved"
          element={<SavedPage saved={saved} dispatch={dispatch} />}
        />
      </Routes>
    </div>
  )
}

export default App
>>>>>>> origin/main
