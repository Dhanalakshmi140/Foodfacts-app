import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

function DetailPage({ saved, dispatch }) {
  const { barcode } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const isSaved = saved?.some((p) => p.code === barcode)

  useEffect(() => {
    let cancelled = false

    const fetchProduct = async () => {
      try {
        setLoading(true)

        const res = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        )

        if (!cancelled) {
          setProduct(res.data.product)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError("Failed to load product")
          setLoading(false)
        }
      }
    }

    fetchProduct()

    return () => {
      cancelled = true
    }
  }, [barcode])

  const handleSave = () => {
    if (isSaved) {
      dispatch({ type: "REMOVE", code: barcode })
    } else {
      dispatch({ type: "ADD", product })
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!product) return <p>No product found</p>

  return (
    <div className="page">
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>{product.product_name}</h2>
      <p>{product.brands}</p>

      <div className="food-card">
        <h3>Nutrition (per 100g)</h3>
        <p>Energy: {product.nutriments?.energy}</p>
        <p>Fat: {product.nutriments?.fat}</p>
        <p>Sugar: {product.nutriments?.sugars}</p>
        <p>Protein: {product.nutriments?.proteins}</p>
      </div>

      <button onClick={handleSave}>
        {isSaved ? "Remove" : "Save"}
      </button>
    </div>
  )
}

export default DetailPage