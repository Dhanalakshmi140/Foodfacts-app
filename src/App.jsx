import { useReducer } from "react"
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import DetailPage from "./pages/DetailPage"
import SavedPage from "./pages/SavedPage"

// reducer
function savedReducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.find((p) => p.id === action.product.id)) return state
      return [...state, action.product]

    case "REMOVE":
      return state.filter((p) => p.id !== action.id)

    default:
      return state
  }
}

function App() {
  const [saved, dispatch] = useReducer(savedReducer, [])

  return (
    <div>
      {/* ✅ pass saved count */}
      <NavBar savedCount={saved.length} />

      <Routes>
  <Route path="/" element={<HomePage />} />

  {/* ✅ Clean version */}
  <Route path="/product/:id" element={<DetailPage />} />

  <Route
    path="/saved"
    element={<SavedPage saved={saved} dispatch={dispatch} />}
  />
</Routes>
    </div>
  )
}

export default App