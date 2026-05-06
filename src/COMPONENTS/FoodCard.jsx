import { useNavigate } from "react-router-dom"

function FoodCard({ product }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${product.id}`, {
      state: { product }   // ✅ THIS IS THE KEY FIX
    })
  }

  return (
    <div
      onClick={handleClick}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "12px",
        margin: "10px",
        cursor: "pointer",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h3>{product.product_name}</h3>
      <p>{product.brands}</p>
    </div>
  )
}

export default FoodCard