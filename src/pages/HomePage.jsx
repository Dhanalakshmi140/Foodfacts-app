import { useState } from "react"
import SearchBar from "../components/SearchBar"
import FoodList from "../components/FoodList"
import ErrorMessage from "../components/ErrorMessage"
import axios from "axios"

function HomePage() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (query) => {
    setLoading(true)
    setError(null)

    try {
      const res = await axios.get(
        "https://world.openfoodfacts.org/cgi/search.pl",
        {
          params: {
            search_terms: query,
            json: 1,
            page_size: 10
          }
        }
      )

      const filtered = res.data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== ""
      )

      setResults(filtered)
    } catch (err) {
      setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Search Food</h2>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}

      {!loading && results.length === 0 && (
        <p>Search something...</p>
      )}

      <FoodList products={results} />
    </div>
  )
}

export default HomePage