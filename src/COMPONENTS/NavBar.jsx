import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

function NavBar() {
  const savedCount = useSelector((state) => state.saved.items.length)

  return (
    <nav className="navbar">
      <h2 className="logo">🥗 FoodFacts</h2>

      <div className="links">
        <NavLink to="/" className="link">
          Search
        </NavLink>

        <NavLink to="/saved" className="link">
          Saved{" "}
          {savedCount > 0 && (
            <span className="badge">{savedCount}</span>
          )}
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar