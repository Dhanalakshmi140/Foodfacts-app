import { useState } from "react"
import SearchBar from "../components/SearchBar"
import FoodList from "../components/FoodList"
import ErrorMessage from "../components/ErrorMessage"

function HomePage() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSearch = async (query) => {
    setLoading(true)
    setError("")
    setResults([])

    try {
      const url = `/api/cgi/search.pl?search_terms=${encodeURIComponent(
        query
      )}&json=1&page_size=10`

      const res = await fetch(url)

      if (!res.ok) {
        throw new Error("API failed")
      }

      const data = await res.json()

      const filtered = (data.products || []).filter(
        (p) => p.product_name && p.product_name.trim() !== ""
      )

      if (filtered.length === 0) {
        throw new Error("No results")
      }

      setResults(filtered)

    } catch (err) {
      console.log("API Error:", err)

      // ✅ fallback data
      const fallback = [
        {
          id: "1",
          product_name: "Dosa",
          brands: "Indian Food",
          nutriments: {
            energy: 150,
            proteins: 4,
            fat: 3,
            sugars: 1,
          },
        },
        {
          id: "2",
          product_name: "Rice",
          brands: "Staple Food",
          nutriments: {
            energy: 130,
            proteins: 2,
            fat: 0.5,
            sugars: 0,
          },
        },
      ]

      setResults(fallback)
      setError("Showing sample data (API temporarily unavailable)")
    } finally {
      setLoading(false)
    }
  }

  // ✅ IMPORTANT: return must be OUTSIDE handleSearch
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>🥗 FoodFacts</h2>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p style={{ textAlign: "center" }}>
          🔄 Fetching food data...
        </p>
      )}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && results.length === 0 && (
        <p style={{ textAlign: "center" }}>
          Search food like dosa, apple, rice 🍎
        </p>
      )}

      <FoodList products={results} />
    </div>
  )
}

export default HomePage