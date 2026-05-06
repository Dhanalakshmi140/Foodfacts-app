import { useLocation, useNavigate } from "react-router-dom"

function DetailPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const product = location.state?.product

  // ✅ Better fallback UI
  if (!product) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>⚠ Product not found</h2>
        <p>Please go back and select a product again.</p>
        <button onClick={() => navigate("/")}>⬅ Go to Search</button>
      </div>
    )
  }

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h2>{product.product_name || "Unknown Product"}</h2>
      <p>{product.brands || "Unknown Brand"}</p>

      <h3>Nutrition (per 100g)</h3>

      <p>Calories: {product.nutriments?.["energy-kcal_100g"] || "N/A"} kcal</p>
      <p>Fat: {product.nutriments?.fat_100g || "N/A"} g</p>
      <p>Sugar: {product.nutriments?.sugars_100g || "N/A"} g</p>
      <p>Protein: {product.nutriments?.proteins_100g || "N/A"} g</p>
    </div>
  )
}

<button onClick={() => dispatch({ type: "ADD", product })}>
  Save
</button>

export default DetailPage